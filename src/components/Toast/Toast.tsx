/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { forwardRef, type PropsWithChildren } from "react";
import styles from "./Toast.module.css";

type ToastProps = {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { children, className, ...props }: PropsWithChildren<ToastProps>,
  ref,
) {
  const classes = classnames(styles["toast-container"], className);
  return (
    <div {...props} className={classes} ref={ref}>
      {children}
    </div>
  );
});
