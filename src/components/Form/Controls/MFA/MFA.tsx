/*
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

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

import React, {
  ComponentProps,
  ComponentRef,
  forwardRef,
  PropsWithoutRef,
} from "react";

import styles from "./MFA.module.css";
import classNames from "classnames";
import { Control } from "@radix-ui/react-form";

type DigitProps = {
  filled: boolean;
  selected: boolean;
};

const Digit: React.FC<DigitProps> = ({ filled, selected }) => (
  <div
    className={styles.digit}
    aria-hidden="true"
    data-filled={filled ? "" : undefined}
    data-selected={selected ? "" : undefined}
  />
);

type MFAProps = {
  className?: string;
  length?: number;
  disabled?: boolean;
} & Omit<
  React.ComponentProps<"input">,
  "type" | "inputMode" | "pattern" | "autoComplete"
>;

export const MFAInput = forwardRef(function MFAInput(
  { className, length = 6, ...props }: PropsWithoutRef<MFAProps>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const classes = classNames(styles.container, className);
  const [currentLength, setCurrentLength] = React.useState(0);
  const [selection, setSelection] = React.useState<null | [number, number]>(
    null,
  );

  const update = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    setCurrentLength(input.value?.length);

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
      <input
        {...props}
        inputMode="numeric"
        // Showing digits on mobile browsers. Using numbers is not really suited
        // as it often adds a way to increment or decrement the current value
        // which is not interesting for this use case
        type="text"
        minLength={0}
        maxLength={length}
        className={styles.control}
        pattern={`\\d{${length}}`}
        autoComplete="one-time-code"
        onSelect={update}
        onFocus={update}
        onBlur={update}
        onMouseDown={update}
        onMouseMove={update}
        onMouseUp={update}
        onChange={update}
        ref={ref}
      />
      {Array.from(Array(length).keys()).map((index) => (
        <Digit
          key={index}
          filled={index < currentLength}
          selected={
            !!selection && index >= selection[0] && index < selection[1]
          }
        />
      ))}
    </div>
  );
});

export const MFAControl = forwardRef<
  ComponentRef<typeof MFAInput>,
  ComponentProps<typeof MFAInput>
>(function ActionControl(props, ref) {
  return (
    <Control asChild>
      <MFAInput ref={ref} {...props} />
    </Control>
  );
});
