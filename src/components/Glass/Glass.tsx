/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  Children,
} from "react";
import classNames from "classnames";

import styles from "./Glass.module.css";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /**
   * The child component.
   */
  children: ReactNode;
  /**
   * The CSS class.
   */
  className?: string;
}

/**
 * Adds a border of glass around a child component.
 */
export const Glass = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, ref) => (
    <div ref={ref} className={classNames(className, styles.glass)} {...rest}>
      {Children.only(children)}
    </div>
  ),
);

Glass.displayName = "Glass";
