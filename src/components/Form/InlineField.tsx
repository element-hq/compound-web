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

import React, { forwardRef, ReactElement } from "react";
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
