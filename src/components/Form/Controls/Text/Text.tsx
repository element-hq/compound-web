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

import React, { forwardRef, ComponentProps, ComponentRef } from "react";
import { Control } from "@radix-ui/react-form";

import styles from "./Text.module.css";
import classNames from "classnames";

type TextProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & ComponentProps<"input">;

/**
 * A styled text input, for standalone use.
 */
export const TextInput = forwardRef<HTMLInputElement, TextProps>(
  function TextInput(props, ref) {
    const classes = classNames(styles.control, props.className);
    return <input ref={ref} {...props} className={classes} />;
  },
);

/**
 * A styled text input wrapped in a `Control` component, for use in Radix forms.
 */
export const TextControl = forwardRef<
  ComponentRef<typeof TextInput>,
  ComponentProps<typeof TextInput>
>(function TextControl(props, ref) {
  return (
    <Control asChild>
      <TextInput ref={ref} {...props} />
    </Control>
  );
});
