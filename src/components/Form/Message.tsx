/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, type PropsWithChildren } from "react";
import { Message } from "@radix-ui/react-form";
import CheckCircleSolidIcon from "@vector-im/compound-design-tokens/assets/web/icons/check-circle-solid";
import ErrorIcon from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";

import styles from "./form.module.css";
import classNames from "classnames";
import { InlineSpinner } from "../InlineSpinner";

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
>(function SuccessMessage({ children, className, ...props }, ref) {
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
>(function LoadingMessage({ children, className, ...props }, ref) {
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
