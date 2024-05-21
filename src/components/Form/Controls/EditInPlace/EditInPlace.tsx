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
import React, { forwardRef, useCallback, useRef } from "react";
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
   * The 'initial' value of the field. If the current value is equal to this, the save
   * button will be disabled (as it will be considered not to have changed)
   */
  initialValue: string;

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
  saveButtonLabel: string;

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
      initialValue,
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
    const errorTextId = useId();
    const classes = classnames(styles.container, className, {
      [styles["container-error"]]: Boolean(error),
    });

    const saveDisabled = Boolean(error) || props.value === initialValue;

    const [showSaved, setShowSaved] = React.useState(false);

    const hideTimer = useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      return () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
      };
    }, []);

    const onSaveButonClicked = useCallback(async () => {
      try {
        onSave();
        setShowSaved(true);
        hideTimer.current = setTimeout(() => {
          setShowSaved(false);
        }, 2000);
      } catch (e) {
        // We don't really need to do anything here, we just don't want to display the
        // 'saved' label, obviously. The user of the component can update the error to
        // show what failed.
      }
    }, [setShowSaved, onSave, hideTimer]);

    return (
      <div className={classes} id={id}>
        <div className={styles.label} id={labelId}>
          {props.label}
        </div>
        <div className={styles.controls}>
          <TextInput
            ref={ref}
            {...props}
            className={styles.control}
            aria-invalid={Boolean(error)}
            aria-errormessage={error ? errorTextId : undefined}
          />
          <div className={styles["button-group"]}>
            <button
              className={classnames(styles.button, styles["primary-button"], {
                [styles["primary-button-disabled"]]: saveDisabled,
              })}
              onClick={onSaveButonClicked}
              aria-controls={id}
              aria-label={saveButtonLabel}
              disabled={saveDisabled}
            >
              <CheckIcon />
            </button>
            <button
              role="button"
              className={styles.button}
              onClick={onCancel}
              aria-controls={id}
              aria-label={cancelButtonLabel}
            >
              <CancelIcon />
            </button>
          </div>
        </div>
        {error && (
          <div className={styles["caption-line"]}>
            <ErrorIcon
              className={classnames(
                styles["caption-icon"],
                styles["caption-icon-error"],
              )}
            />
            <span
              id={errorTextId}
              className={classnames(
                styles["caption-text"],
                styles["caption-text-error"],
              )}
            >
              {error}
            </span>
          </div>
        )}
        {savedLabel && showSaved && (
          <div className={styles["caption-line"]}>
            <div
              className={classnames(
                styles["caption-icon"],
                styles["caption-icon-saved"],
              )}
            >
              <CheckIcon />
            </div>
            <span
              className={classnames(
                styles["caption-text"],
                styles["caption-text-saved"],
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
