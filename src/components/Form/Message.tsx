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
import { Message as RadixMessage } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";
import ErrorIcon from "@vector-im/compound-design-tokens/icons/error.svg";

type MessageProps = {
  /**
   * The CSS class name.
   */
  className?: string;

  /**
   * The kind of the form, either "help" or "error".
   *
   * @default "help"
   */
  kind?: "help" | "error";
} & React.ComponentProps<typeof RadixMessage>;

/**
 * Thin wrapper around Radix UI Message component
 * https://www.radix-ui.com/docs/primitives/components/form#message
 */
export const Message = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<MessageProps>
>(function Message({ children, kind = "help", ...props }, ref) {
  const classes = classNames(styles.message, props.className);
  return (
    <RadixMessage
      ref={ref}
      {...props}
      className={classes}
      data-invalid={kind == "error" ? true : undefined}
    >
      {kind == "error" && <ErrorIcon />}
      {children}
    </RadixMessage>
  );
});
