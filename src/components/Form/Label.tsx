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

import React, { PropsWithChildren, forwardRef } from "react";
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
