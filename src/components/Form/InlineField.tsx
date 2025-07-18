/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, type ReactElement } from "react";
import { Field } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";

type Props = {
  /**
   * The CSS class name.
   */
  className?: string;

  /**
   * The checkbox/radio control to render alongside the rest of the field.
   */
  control: ReactElement;
} & React.ComponentProps<typeof Field>;

export const InlineField = forwardRef<HTMLDivElement, Props>(
  function InlineField({ className, control, children, ...props }, ref) {
    const classes = classNames(styles["inline-field"], className);
    return (
      <Field ref={ref} {...props} className={classes}>
        <div className={styles["inline-field-control"]}>{control}</div>
        <div className={styles["inline-field-body"]}>{children}</div>
      </Field>
    );
  },
);
