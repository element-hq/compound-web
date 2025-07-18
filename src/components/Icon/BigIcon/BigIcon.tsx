/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX, type PropsWithChildren } from "react";
import styles from "./BigIcon.module.css";
import classNames from "classnames";

interface BigIconProps {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The size of the icon.
   * @default "large"
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether this button triggers a destructive action.
   * @default false
   */
  destructive?: boolean;
  /**
   * Whether this button triggers a success action.
   * @default false
   */
  success?: boolean;
}

export function BigIcon({
  className,
  size = "large",
  destructive = false,
  success = false,
  children,
}: PropsWithChildren<BigIconProps>): JSX.Element {
  return (
    <div
      className={classNames(styles.content, className, {
        [styles.destructive]: destructive,
        [styles.success]: success,
      })}
      data-size={size}
    >
      {React.Children.only(children)}
    </div>
  );
}
