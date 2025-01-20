/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  forwardRef,
  useCallback,
  useRef,
  useState,
  useEffect,
  useReducer,
} from "react";
import { Submit, ValidityState } from "@radix-ui/react-form";
import CheckIcon from "@vector-im/compound-design-tokens/assets/web/icons/check";
import CancelIcon from "@vector-im/compound-design-tokens/assets/web/icons/close";

import styles from "./EditInPlace.module.css";

import {
  Field,
  HelpMessage,
  Label,
  LoadingMessage,
  Root,
  SuccessMessage,
  TextControl,
} from "../..";
import { Button, Tooltip } from "../../../..";

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
  onSave?: (e: React.FormEvent<HTMLFormElement>) => Promise<void> | void;

  /**
   * Callback for when the user wishes to cancel the change
   */
  onCancel?: (e: React.FormEvent<HTMLFormElement>) => void;

  /**
   * onInput event handler on the text control
   */
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback for when the server validation errors should be cleared.
   */
  onClearServerErrors?: () => void;

  /**
   * Whether the field is in an error state according to the server validation.
   *
   * For validation messages, use native validations properties directly, or add custom error messages as children.
   */
  serverInvalid?: boolean;

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
   * Label to be displayed under the input as a help text
   */
  helpLabel?: string;

  /**
   * If true, disabled the entire component to disallow editing.
   */
  disabled?: boolean;
} & React.ComponentProps<typeof TextControl>;

enum State {
  /** No changes on the input has been made */
  Initial,

  /** The input has been changed */
  Dirty,

  /** The input is being saved */
  Saving,

  /** The input has been saved */
  Saved,
}

enum Event {
  Touch, // The user 'touched' the control
  Save, // The user has clicked the save button
  Saved, // The onSave callback finished successfully
  SaveError, // The onSave callback finished with an error
  Cancel, // The user has clicked the cancel button
  SavedTimeout, // The user has clicked the save button and the saved label has been shown for 2 seconds
}

function reducer(state: State, action: Event): State {
  switch (action) {
    case Event.Touch:
      if (state === State.Initial || state === State.Saved) return State.Dirty;
      else return state;

    case Event.Save:
      return State.Saving;

    case Event.Cancel:
      return State.Initial;

    case Event.Saved:
      if (state === State.Saving) return State.Saved;
      else return state;

    case Event.SaveError:
      if (state === State.Saving) return State.Initial;
      else return state;

    case Event.SavedTimeout:
      if (state === State.Saved) return State.Initial;
      else return state;
  }

  assertNever(action);
}

function assertNever(value: never): never {
  throw new Error(`Unreachable value: ${value}`);
}

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
      onInput,
      onClearServerErrors,
      serverInvalid,
      saveButtonLabel,
      cancelButtonLabel,
      savedLabel,
      savingLabel,
      helpLabel,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    const [state, dispatch] = useReducer(reducer, State.Initial);

    // Tracks the focus state of the form
    // This uses a `ref` to make sure the onFocus/onBlur callback don't trigger unnecessary re-renders
    // and a state to track the focus state and hide the buttons when the form is not focused
    const isFocusWithinRef = useRef(false);
    const [isFocusWithin, setFocusWithin] = useState(false);

    const shouldShowSaveButton =
      state === State.Dirty || state === State.Saving || isFocusWithin;

    const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
      undefined,
    );

    useEffect(() => {
      // Start a timer when we switch to the saved state
      if (state === State.Saved) {
        hideTimer.current = setTimeout(() => {
          dispatch(Event.SavedTimeout);
          hideTimer.current = undefined;
        }, 2000);
      }

      return () => {
        // Clear any timers that may have been set
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = undefined;
      };
    }, [state]);

    const formRef = useRef<HTMLFormElement>(null);
    const saveButtonRef = useRef<HTMLButtonElement>(null);
    const cancelButtonRef = useRef<HTMLButtonElement>(null);

    const onFocus = useCallback(() => {
      if (isFocusWithinRef.current) return;
      isFocusWithinRef.current = true;
      setFocusWithin(true);
    }, [isFocusWithin, setFocusWithin]);

    const onBlur = useCallback(
      (e: React.FocusEvent) => {
        if (!isFocusWithinRef.current) return;
        // If the user switched to another element within the form
        // consider that we're still focused within the form
        if (e.currentTarget.contains(e.relatedTarget)) return;

        isFocusWithinRef.current = false;
        setFocusWithin(false);
      },
      [isFocusWithin, setFocusWithin],
    );

    const onInputHandler = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(Event.Touch);
        onInput?.(e);
      },
      [dispatch, onInput],
    );

    const onFormSubmit = useCallback(
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Prevent submitting the form if the user has not yet entered any text
        if (state === State.Initial) {
          return;
        }

        try {
          dispatch(Event.Save);
          saveButtonRef.current?.blur();
          await onSave?.(e);
          dispatch(Event.Saved);
        } catch {
          // We don't really need to do anything here, we just don't want to display the
          // 'saved' label, obviously. The user of the component can update the error to
          // show what failed.
          dispatch(Event.SaveError);
        }
      },
      [onSave, state, hideTimer],
    );

    const onFormReset = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
        cancelButtonRef.current?.blur();
        onCancel?.(e);
        dispatch(Event.Cancel);
      },
      [cancelButtonRef, onCancel],
    );

    return (
      <Root
        className={className}
        onSubmit={onFormSubmit}
        onReset={onFormReset}
        onFocus={onFocus}
        onBlur={onBlur}
        onClearServerErrors={onClearServerErrors}
        ref={formRef}
      >
        <Field name="input" serverInvalid={serverInvalid}>
          <Label>{label}</Label>
          <div className={styles.controls}>
            <TextControl
              ref={ref}
              {...props}
              onInput={onInputHandler}
              disabled={disabled || state === State.Saving}
            />

            {shouldShowSaveButton && (
              <div className={styles["button-group"]}>
                <Tooltip label={saveButtonLabel}>
                  <Submit asChild>
                    <Button
                      type="submit"
                      kind="primary"
                      size="sm"
                      ref={saveButtonRef}
                      disabled={state !== State.Dirty}
                      iconOnly
                      Icon={CheckIcon}
                    />
                  </Submit>
                </Tooltip>

                <Tooltip label={cancelButtonLabel}>
                  <Button
                    type="reset"
                    kind="secondary"
                    size="sm"
                    ref={cancelButtonRef}
                    className={styles.button}
                    disabled={state === State.Saving}
                    iconOnly
                    Icon={CancelIcon}
                  />
                </Tooltip>
              </div>
            )}
          </div>

          {/*
            During the loading saving state, we only show the saving message.
            Else, we show whatever children were passed on, as they will have other validation messages
          */}
          {state === State.Saving ? (
            <LoadingMessage>{savingLabel}</LoadingMessage>
          ) : (
            children
          )}

          {savedLabel && state === State.Saved && (
            <SuccessMessage>{savedLabel}</SuccessMessage>
          )}

          {/*
            We show the help message only if:
              - the helpLabel is set
              - the form hasn't been validated yet
              - the 'serverInvalid' prop is not set
              - we're in the initial or dirty state
            */}
          {helpLabel && (state === State.Initial || state === State.Dirty) && (
            <ValidityState>
              {(validity) =>
                (validity === undefined || validity.valid) &&
                !serverInvalid && <HelpMessage>{helpLabel}</HelpMessage>
              }
            </ValidityState>
          )}
        </Field>
      </Root>
    );
  },
);
