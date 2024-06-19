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
import { Message } from "@radix-ui/react-form";
import CheckCircleSolidIcon from "@vector-im/compound-design-tokens/icons/check-circle-solid.svg";
import ErrorIcon from "@vector-im/compound-design-tokens/icons/error.svg";

import styles from "./form.module.css";
import classNames from "classnames";
import { InlineSpinner } from "../InlineSpinner/InlineSpinner";

type MessageProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof Message>;

/**
 * An error message to display below a form control.
 */
export const ErrorMessage = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<MessageProps>
>(function ErrorMessage({ children, className, ...props }, ref) {
  const classes = classNames(
    styles.message,
    styles["error-message"],
    className,
  );
  return (
    <Message ref={ref} {...props} className={classes}>
      <ErrorIcon />
      {children}
    </Message>
  );
});

/**
 * A success message to display below a form control.
 */
export const SuccessMessage = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<MessageProps>
>(function ErrorMessage({ children, className, ...props }, ref) {
  const classes = classNames(
    styles.message,
    styles["success-message"],
    className,
  );
  return (
    <Message ref={ref} {...props} className={classes}>
      <CheckCircleSolidIcon />
      {children}
    </Message>
  );
});

/**
 * A message showing a loading state
 */
export const LoadingMessage = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<MessageProps>
>(function ErrorMessage({ children, className, ...props }, ref) {
  const classes = classNames(styles.message, className);
  return (
    <Message ref={ref} {...props} className={classes}>
      <InlineSpinner />
      {children}
    </Message>
  );
});

/**
 * A help message to display below a form control.
 */
export const HelpMessage = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<MessageProps>
>(function HelpMessage({ children, className, ...props }, ref) {
  const classes = classNames(styles.message, styles["help-message"], className);
  return (
    <Message ref={ref} {...props} className={classes}>
      {children}
    </Message>
  );
});
