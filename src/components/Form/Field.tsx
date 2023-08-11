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

import React, { forwardRef, PropsWithChildren } from "react";
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
