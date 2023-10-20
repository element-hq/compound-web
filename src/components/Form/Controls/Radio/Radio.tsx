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
