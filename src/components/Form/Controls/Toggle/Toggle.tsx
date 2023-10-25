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
import React, {
  ComponentProps,
  ComponentRef,
  forwardRef,
  PropsWithChildren,
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
      <input ref={ref} className={styles.input} {...props} type="checkbox" />
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
