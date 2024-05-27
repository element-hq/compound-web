/*
Copyright 2024 New Vector Ltd

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

import React, { PropsWithChildren, forwardRef } from "react";
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
