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
  type PropsWithChildren,
} from "react";
import styles from "./Toggle.module.css";
import { Control } from "@radix-ui/react-form";

type ToggleProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & Omit<ComponentProps<"input">, "type">;

/**
 * A toggle component.
 */
export const ToggleInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<ToggleProps>
>(function Toggle({ className, ...props }, ref) {
  const classes = classnames(styles.container, className);
  return (
    <div className={classes}>
      <input
        role="switch"
        ref={ref}
        className={styles.input}
        {...props}
        type="checkbox"
      />
      <div className={styles.ui} />
    </div>
  );
});

/**
 * A styled checkbox input wrapped in a `Control` component, for use in Radix forms.
 */
export const ToggleControl = forwardRef<
  ComponentRef<typeof ToggleInput>,
  ComponentProps<typeof ToggleInput>
>(function ToggleControl(props, ref) {
  return (
    <Control asChild>
      <ToggleInput ref={ref} {...props} />
    </Control>
  );
});
