/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";

import styles from "./IndicatorIcon.module.css";

type IconButtonProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The icon size in CSS units, e.g. `"24px"`.
   * @default 100%
   */
  size?: CSSStyleDeclaration["height"];
  /**
   * The icon colour.
   */
  colour?: string;
  /**
   * The indicator dot displayed on the top right
   * Names based on the colours used for the dot, or undefined for no dot.
   */
  indicator?: "default" | "success" | "critical";
};

export const IndicatorIcon = forwardRef<
  HTMLDivElement,
  PropsWithChildren<IconButtonProps>
>(function IconButton(
  { children, className, size = "100%", colour, indicator },
  ref,
) {
  const classes = classnames(styles["indicator-icon"], className);
  return (
    <div
      ref={ref}
      className={classes}
      data-indicator={indicator}
      style={
        {
          "--cpd-icon-button-size": size,
          "--cpd-color-icon-tertiary": colour,
        } as React.CSSProperties
      }
    >
      {React.Children.only(children)}
    </div>
  );
});
