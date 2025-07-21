/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  type ComponentProps,
  type ComponentRef,
  forwardRef,
} from "react";
import CheckIcon from "@vector-im/compound-design-tokens/assets/web/icons/check";
import { Control } from "@radix-ui/react-form";

import styles from "./Checkbox.module.css";

type Props = {
  /**
   * The CSS class name.
   */
  className?: string;
} & Omit<ComponentProps<"input">, "type">;

/**
 * A styled checkbox input, for standalone use.
 */
export const CheckboxInput = forwardRef<HTMLInputElement, Props>(
  function Checkbox({ className, ...props }, ref) {
    const classes = classnames(styles.container, className);
    return (
      <div className={classes}>
        <input ref={ref} className={styles.input} {...props} type="checkbox" />
        <div className={styles.ui}>
          <CheckIcon aria-hidden={true} />
        </div>
      </div>
    );
  },
);

/**
 * A styled checkbox input wrapped in a `Control` component, for use in Radix forms.
 */
export const CheckboxControl = forwardRef<
  ComponentRef<typeof CheckboxInput>,
  ComponentProps<typeof CheckboxInput>
>(function CheckboxControl(props, ref) {
  return (
    <Control asChild>
      <CheckboxInput ref={ref} {...props} />
    </Control>
  );
});
