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
import { Control } from "@radix-ui/react-form";

import styles from "./Radio.module.css";

type RadioProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<"input">, "type">;

/**
 * A radio component.
 */
export const RadioInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<RadioProps>
>(function Radio({ className, ...props }, ref) {
  const classes = classnames(styles.container, className);
  return (
    <div className={classes}>
      <input ref={ref} {...props} className={styles.input} type="radio" />
      <div className={styles.ui} />
    </div>
  );
});

export const RadioControl = forwardRef<
  ComponentRef<typeof RadioInput>,
  ComponentProps<typeof RadioInput>
>(function RadioControl(props, ref) {
  return (
    <Control asChild>
      <RadioInput ref={ref} {...props} />
    </Control>
  );
});
