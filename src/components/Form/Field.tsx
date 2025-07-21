/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, type PropsWithChildren } from "react";
import { Field as RadixField } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";

type FieldProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof RadixField>;

/**
 * Thin wrapper around Radix UI Field component
 * https://www.radix-ui.com/docs/primitives/components/form#field
 */
export const Field = forwardRef<HTMLDivElement, PropsWithChildren<FieldProps>>(
  function Field({ children, ...props }, ref) {
    const classes = classNames(styles.field, props.className);
    return (
      <RadixField ref={ref} {...props} className={classes}>
        {children}
      </RadixField>
    );
  },
);
