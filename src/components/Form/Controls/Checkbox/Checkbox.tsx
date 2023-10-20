/*
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

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

import classnames from "classnames";
import React, { ComponentProps, ComponentRef, forwardRef } from "react";
import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";
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
