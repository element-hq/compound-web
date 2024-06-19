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
import React, {
  forwardRef,
  useCallback,
  useRef,
  useState,
  useEffect,
} from "react";
import { Submit } from "@radix-ui/react-form";
import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";
import CancelIcon from "@vector-im/compound-design-tokens/icons/close.svg";

import styles from "./EditInPlace.module.css";
import { TextControl } from "../Text";

import {
  ErrorMessage,
  Field,
  Label,
  LoadingMessage,
  Root,
  SuccessMessage,
} from "../..";
import { Tooltip } from "../../../..";

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
   * Callback for when the user confirms the change
   */
  onSave?: (e: React.FormEvent) => Promise<void> | void;

  /**
   * Callback for when the user wishes to cancel the change
   */
  onCancel?: (e: React.FormEvent) => void;

  /**
   * onInput event handler on the text control
   */
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;

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
   * The label for the cancel button
   */
  cancelButtonLabel: string;

  /**
   * If true, disabled the entire component to disallow editing.
   */
  disabled?: boolean;
} & React.ComponentProps<typeof TextControl>;

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
      error,
      savedLabel,
      savingLabel,
      disabled,
      ...props
    },
    ref,
  ) {
    const [showSaved, setShowSaved] = useState(false);
    const [saving, setSaving] = useState(false);
    const [dirty, setDirty] = useState(false);

    const classes = classnames(styles.container, className, {
      [styles["is-dirty"]]: dirty,
    });

    const hideTimer = useRef<ReturnType<typeof setTimeout>>();

    const saveButtonRef = useRef<HTMLButtonElement | null>(null);
    const cancelButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
      return () => {
        // Clear any timers that may have been set when the component gets unmounted
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = undefined;
      };
    }, []);

    const onInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setDirty(true);
        props.onInput?.(e);
      },
      [setDirty],
    );

    const onFormSubmit = useCallback(
      async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          setShowSaved(false);
          setSaving(true);
          saveButtonRef.current?.blur();
          await onSave?.(e);
          setDirty(false);
          setShowSaved(true);

          if (hideTimer.current) clearTimeout(hideTimer.current);
          hideTimer.current = setTimeout(() => {
            setShowSaved(false);
            hideTimer.current = undefined;
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

    const onFormReset = useCallback(
      (e: React.FormEvent) => {
        cancelButtonRef.current?.blur();
        onCancel?.(e);
        setDirty(false);
      },
      [cancelButtonRef, onCancel],
    );

    return (
      <Root className={classes} onSubmit={onFormSubmit} onReset={onFormReset}>
        <Field name="input" serverInvalid={Boolean(error)}>
          <Label>{label}</Label>
          <div className={styles.controls}>
            <TextControl
              ref={ref}
              {...props}
              onInput={onInput}
              disabled={disabled || saving}
            />
            <div className={styles["button-group"]}>
              <Tooltip label={saveButtonLabel}>
                <Submit asChild>
                  <button
                    type="submit"
                    className={classnames(
                      styles.button,
                      styles["primary-button"],
                      {
                        [styles["primary-button-disabled"]]: !dirty,
                      },
                    )}
                    ref={saveButtonRef}
                    aria-label={saveButtonLabel}
                    disabled={!dirty || saving}
                  >
                    <CheckIcon />
                  </button>
                </Submit>
              </Tooltip>

              <Tooltip label={cancelButtonLabel}>
                <button
                  type="reset"
                  role="button"
                  ref={cancelButtonRef}
                  className={styles.button}
                  aria-label={cancelButtonLabel}
                  disabled={saving}
                >
                  <CancelIcon />
                </button>
              </Tooltip>
            </div>
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {saving && <LoadingMessage>{savingLabel}</LoadingMessage>}
          {savedLabel && showSaved && (
            <SuccessMessage>{savedLabel}</SuccessMessage>
          )}
        </Field>
      </Root>
    );
  },
);
