/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type PropsWithChildren, forwardRef } from "react";
import { Label as RadixLabel } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";

type LabelProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof RadixLabel>;

/**
 * Thin wrapper around Radix UI Label component
 * https://www.radix-ui.com/docs/primitives/components/form#label
 */
export const Label = forwardRef<
  HTMLLabelElement,
  PropsWithChildren<LabelProps>
>(function Label({ children, ...props }, ref) {
  const classes = classNames(styles.label, props.className);
  return (
    <RadixLabel ref={ref} {...props} className={classes}>
      {children}
    </RadixLabel>
  );
});
