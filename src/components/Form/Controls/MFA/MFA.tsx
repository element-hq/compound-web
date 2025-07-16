/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type ComponentProps,
  type ComponentRef,
  forwardRef,
  type PropsWithoutRef,
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
