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

import React, { PropsWithoutRef, useState } from "react";
import classnames from "classnames";
import { Control } from "../../Control";

import styles from "./MFA.module.css";
import formStyles from "../../form.module.css";
import classNames from "classnames";

type MFAProps = {
  className?: string;
  length?: number;
  value?: string;
  disabled?: boolean;
} & React.ComponentProps<typeof Control>;

/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export const MFAControl = React.forwardRef(function MFAControl(
  { className, length = 6, ...props }: PropsWithoutRef<MFAProps>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const classes = classNames(styles.mfa, className);

  const [mfaDigits, setMfaDigits] = useState(props.value ?? "");

  return (
    <div className={classes}>
      <input
        {...props}
        // Showing digits on mobile browsers. Using numbers is not really suited
        // as it often adds a way to increment or decrement the current value
        // which is not interesting for this use case
        type="tel"
        minLength={0}
        maxLength={length}
        value={mfaDigits}
        className={styles["mfa-input"]}
        onChange={(e) => {
          setMfaDigits(
            e.currentTarget.value.replace(/[^\d]/g, "").slice(0, length),
          );
        }}
        autoComplete="off"
        ref={ref}
      />
      {Array(length)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={`digit-${index}`}
              className={classnames(styles.digit, formStyles.control)}
              aria-hidden="true"
            >
              {mfaDigits.charAt(index) ?? ""}
            </div>
          );
        })}
    </div>
  );
});
