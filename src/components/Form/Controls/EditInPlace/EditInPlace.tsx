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
import React, { FormEvent, forwardRef, useCallback, useRef } from "react";
import styles from "./EditInPlace.module.css";
import { TextInput } from "../Text";
import useId from "../../../../utils/useId";

import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";
import CancelIcon from "@vector-im/compound-design-tokens/icons/close.svg";
import ErrorIcon from "@vector-im/compound-design-tokens/icons/error.svg";
import { InlineSpinner } from "../../../InlineSpinner/InlineSpinner";

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
   * The label for the 'in progress' saving caption
   */
  savingLabel: string;

  /**
   * True to disable the save button, false to enable.
   * Default: false (enabled)
   */
  disableSaveButton?: boolean;

  /**
   * The label for the cancel button
   */
  cancelButtonLabel?: string;

  /**
   * Label to be displayed under the input as a help text
   */
  helpLabel?: string;
} & React.ComponentProps<typeof TextInput>;

/**
 * A text box with save/cancel buttons that appear when the field is active.
 * Since thios control has its own 'save' button, it should *not* appear as part
 * of a larger form: it exists as its own form that submits separately.
 */
export const EditInPlace = forwardRef<HTMLInputElement, Props>(
  function EditInPlace(
    {
      className,
      label,
      onSave,
      onCancel,
      saveButtonLabel,
      cancelButtonLabel,
      disableSaveButton,
      error,
      savedLabel,
      savingLabel,
      helpLabel,
      ...props
    },
    ref,
  ) {
    const id = useId();
    const labelId = useId();
    const errorTextId = useId();

    const [showSaved, setShowSaved] = React.useState(false);
    const [saving, setSaving] = React.useState(false);

    const classes = classnames(styles.container, className, {
      [styles["container-error"]]: Boolean(error),
      [styles["container-show-buttons"]]: saving,
    });

    // Display the help label if there is no other labels
    const displayHelpLabel =
      Boolean(helpLabel) && !error && !saving && !(savedLabel && showSaved);

    const hideTimer = useRef<NodeJS.Timeout | null>(null);

    const saveButtonRef = useRef<HTMLButtonElement | null>(null);
    const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
      return () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
      };
    }, []);

    const onFormSubmit = useCallback(
      async (e: FormEvent) => {
        e.preventDefault();
        try {
          setSaving(true);
          await onSave();
          saveButtonRef.current?.blur();
          setShowSaved(true);
          hideTimer.current = setTimeout(() => {
            setShowSaved(false);
          }, 2000);
        } catch (e) {
          // We don't really need to do anything here, we just don't want to display the
          // 'saved' label, obviously. The user of the component can update the error to
          // show what failed.
        } finally {
          setSaving(false);
        }
      },
      [setShowSaved, onSave, hideTimer],
    );

    const onCancelButtonClicked = useCallback(() => {
      cancelButtonRef.current?.blur();
      onCancel();
    }, [cancelButtonRef, onCancel]);

    return (
      <form className={classes} id={id} onSubmit={onFormSubmit}>
        <div className={styles.label} id={labelId}>
          {label}
        </div>
        <div className={styles.controls}>
          <TextInput
            ref={ref}
            {...props}
            className={styles.control}
            aria-labelledby={labelId}
            aria-invalid={Boolean(error)}
            aria-errormessage={error ? errorTextId : undefined}
            disabled={saving}
          />
          <div className={styles["button-group"]}>
            <button
              type="submit"
              className={classnames(styles.button, styles["primary-button"], {
                [styles["primary-button-disabled"]]: disableSaveButton,
              })}
              ref={saveButtonRef}
              aria-controls={id}
              aria-label={saveButtonLabel}
              disabled={disableSaveButton || saving}
            >
              <CheckIcon />
            </button>
            <button
              type="button"
              role="button"
              ref={cancelButtonRef}
              className={styles.button}
              onClick={onCancelButtonClicked}
              aria-controls={id}
              aria-label={cancelButtonLabel}
              disabled={saving}
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
        {saving && (
          <div className={styles["caption-line"]}>
            <InlineSpinner />
            <span
              className={classnames(
                styles["caption-text"],
                styles["caption-text-saving"],
              )}
            >
              {savingLabel}
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
        {displayHelpLabel && (
          <div className={styles["caption-line"]}>
            <span
              className={classnames(
                styles["caption-text"],
                styles["caption-text-help"],
              )}
            >
              {helpLabel}
            </span>
          </div>
        )}
      </form>
    );
  },
);
