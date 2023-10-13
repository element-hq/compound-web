/*
Copyright 2023  New Vector Ltd

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

import React, { forwardRef, PropsWithoutRef, useLayoutEffect } from "react";
import * as Form from "@radix-ui/react-form";

import styles from "./MFA.module.css";
import classNames from "classnames";

type DigitProp = {
  invalid: boolean;
  filled: boolean;
  selected: boolean;
};

const Digit: React.FC<DigitProp> = ({ invalid, filled, selected }) => (
  <div
    className={styles.digit}
    aria-hidden="true"
    data-invalid={invalid ? "" : undefined}
    data-filled={filled ? "" : undefined}
    data-selected={selected ? "" : undefined}
  />
);

type MFAProps = {
  className?: string;
  length?: number;
  value?: string;
  disabled?: boolean;
} & React.ComponentProps<typeof Form.Control>;

export const MFAControl = forwardRef(function MFAControl(
  { className, length = 6, ...props }: PropsWithoutRef<MFAProps>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const classes = classNames(styles.mfa, className);
  const [currentLength, setCurrentLength] = React.useState(0);
  const [selection, setSelection] = React.useState<null | [number, number]>(
    null,
  );

  const updateSelection = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    if (
      document.activeElement !== input ||
      input.selectionStart === null ||
      input.selectionEnd === null
    ) {
      setSelection(null);
    } else {
      setSelection([input.selectionStart, input.selectionEnd]);
    }
  };

  return (
    <div className={classes}>
      <Form.Control
        {...props}
        inputMode="numeric"
        // Showing digits on mobile browsers. Using numbers is not really suited
        // as it often adds a way to increment or decrement the current value
        // which is not interesting for this use case
        type="text"
        minLength={0}
        maxLength={length}
        className={styles["mfa-input"]}
        pattern={`\\d{${length}}`}
        autoComplete="one-time-code"
        onSelect={updateSelection}
        onFocus={updateSelection}
        onBlur={updateSelection}
        onMouseDown={updateSelection}
        onMouseMove={updateSelection}
        onMouseUp={updateSelection}
        ref={ref}
        onChange={(event) => {
          updateSelection(event);
          setCurrentLength(event.currentTarget.value?.length);
        }}
      />
      <Form.ValidityState>
        {(validity?: ValidityState) =>
          Array.from(Array(length).keys()).map((index) => (
            <Digit
              key={index}
              invalid={!!validity && !validity.valid}
              filled={index < currentLength}
              selected={
                !!selection && index >= selection[0] && index < selection[1]
              }
            />
          ))
        }
      </Form.ValidityState>
    </div>
  );
});
