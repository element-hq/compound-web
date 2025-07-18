/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  forwardRef,
  type ComponentProps,
  type ComponentRef,
} from "react";
import { Control } from "@radix-ui/react-form";

import styles from "./Text.module.css";
import classNames from "classnames";

type TextProps = {
  /**
   * The CSS class name.
   */
  className?: string;

  /**
   * Enable contextual alternate ligatures on input text
   * For example on an in-place editing field
   * https://github.com/rsms/inter/issues/222
   * https://github.com/rsms/inter/blob/master/src/features/calt.fea
   */
  enableLigatures?: boolean;
} & ComponentProps<"input">;

/**
 * A styled text input, for standalone use.
 */
export const TextInput = forwardRef<HTMLInputElement, TextProps>(
  function TextInput({ className, enableLigatures, ...props }, ref) {
    const classes = classNames(styles.control, className, {
      [styles["enable-ligatures"]]: enableLigatures,
    });
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
