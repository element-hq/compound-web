/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { type PropsWithChildren } from "react";
import styles from "./Badge.module.css";
import { Typography } from "../Typography/Typography";

type BadgeProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The type of badge.
   */
  kind?: "default" | "grey" | "on-solid" | "blue" | "green" | "red";
};

/**
 * A Badge component.
 */
export const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({
  children,
  kind = "default",
  className,
}) => {
  const classes = classnames(styles.badge, className);
  return (
    <Typography
      as="span"
      size="sm"
      weight="medium"
      className={classes}
      data-kind={kind}
    >
      {children}
    </Typography>
  );
};
