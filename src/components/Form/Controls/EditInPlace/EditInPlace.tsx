/*
Copyright 2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import classnames from "classnames";
import React, { forwardRef, useCallback } from "react";
import styles from "./EditInPlace.module.css";
import { TextInput } from "../Text";
import useId from "../../../../utils/useId";

import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";
import CancelIcon from "@vector-im/compound-design-tokens/icons/close.svg";
import ErrorIcon from "@vector-im/compound-design-tokens/icons/error.svg";

type Props = {
  /**
   * The label for the control
   */
  label: string;

  /**
   * The CSS class name.
   */
  className?: string;

  /**
   * The content of the text box
   */
  value: string;

  /**
   * Whether the value has been changed from its initial value. If false,
   * the save button will be disabled.
   * Default: false
   */
  valueIsChanged?: boolean;

  /**
   * Event handler for when the user has edited the value in the text box
   * (but not yet saved/confirmed it)
   */
  onChange: (value: string) => void;

  /**
   * Callback for when the user confirms the change
   */
  onSave: () => Promise<void>;

  /**
   * Calback for when the user wishes to cancel the change
   */
  onCancel: () => void;

  /**
   * Error message to be displayed below the box. If supplied, will disable the
   * save button.
   */
  error?: string;

  /**
   * Label to be displayed by the green check at the bottom. Will only be displayed
   * for 2 seconds after the onSave callback promise resolves successfully.
   */
  savedLabel?: string;

  /**
   * The label for the save button
   */
  saveButtonLabel?: string;

  /**
   * The label for the cancel button
   */
  cancelButtonLabel?: string;
} & React.ComponentProps<typeof TextInput>;

/**
 * A text box with save/cancel buttons that appear when the field is active
 */
export const EditInPlace = forwardRef<HTMLInputElement, Props>(
  function EditInPlace(
    {
      className,
      valueIsChanged,
      onSave,
      onCancel,
      saveButtonLabel,
      cancelButtonLabel,
      error,
      savedLabel,
      ...props
    },
    ref,
  ) {
    const id = useId();
    const labelId = useId();
    const classes = classnames(styles.container, className, {
      [styles.containerError]: Boolean(error),
    });

    const saveDisabled = Boolean(error) || !valueIsChanged;

    const [showSaved, setShowSaved] = React.useState(false);

    const onSaveButonClicked = useCallback(async () => {
      if (saveDisabled) return;

      try {
        onSave();
        setShowSaved(true);
        setTimeout(() => {
          setShowSaved(false);
        }, 2000);
      } catch (e) {
        // We don't really need to do anything here, we just don't want to display the
        // 'saved' label, obviously. The user of the component can update the error to
        // show what failed.
      }
    }, []);

    return (
      <div className={classes} id={id}>
        <div className={styles.label} id={labelId}>
          {props.label}
        </div>
        <div className={styles.controls}>
          <TextInput ref={ref} {...props} className={styles.control} />
          <div className={styles.buttonGroup}>
            <div
              role="button"
              className={classnames(styles.button, styles.primaryButton, {
                [styles.primaryButtonDisabled]: saveDisabled,
              })}
              onClick={onSaveButonClicked}
              aria-controls={id}
              aria-label={saveButtonLabel}
              aria-disabled={saveDisabled}
            >
              <CheckIcon />
            </div>
            <div
              role="button"
              className={styles.button}
              onClick={onCancel}
              aria-controls={id}
              aria-label={cancelButtonLabel}
            >
              <CancelIcon />
            </div>
          </div>
        </div>
        {error && (
          <div className={styles.captionLine}>
            <ErrorIcon
              className={classnames(
                styles.captionIcon,
                styles.captionIconError,
              )}
            />
            <span
              className={classnames(
                styles.captionText,
                styles.captionTextError,
              )}
            >
              {error}
            </span>
          </div>
        )}
        {savedLabel && showSaved && (
          <div className={styles.captionLine}>
            <div
              className={classnames(
                styles.captionIcon,
                styles.captionIconSaved,
              )}
            >
              <CheckIcon />
            </div>
            <span
              className={classnames(
                styles.captionText,
                styles.captionTextSaved,
              )}
            >
              {savedLabel}
            </span>
          </div>
        )}
      </div>
    );
  },
);
