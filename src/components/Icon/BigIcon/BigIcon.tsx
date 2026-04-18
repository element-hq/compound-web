/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX, type PropsWithChildren } from "react";
import styles from "./BigIcon.module.css";
import classNames from "classnames";
import type { Size } from "../../../utils/size";

interface BigIconProps {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The t-shirt size of the icon.
   * @default "lg"
   */
  size?: Size & ("sm" | "md" | "lg");
  /**
   * The color variant of the icon.
   * @default "primary"
   */
  kind?: "primary" | "critical" | "success";
}

export function BigIcon({
  className,
  size = "lg",
  kind = "primary",
  children,
}: PropsWithChildren<BigIconProps>): JSX.Element {
  return (
    <div
      className={classNames(styles["big-icon"], className)}
      data-size={size}
      data-kind={kind}
    >
      {React.Children.only(children)}
    </div>
  );
}
