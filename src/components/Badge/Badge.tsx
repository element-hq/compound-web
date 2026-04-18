/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { type ComponentType, type PropsWithChildren } from "react";
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
  /**
   * An icon to display within the badge.
   */
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
};

/**
 * A Badge component.
 */
export const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({
  children,
  Icon,
  kind = "default",
  className,
}) => {
  const classes = classnames(styles.badge, className, {
    [styles["has-icon"]]: !!Icon,
  });
  return (
    <Typography
      as="span"
      size="sm"
      weight="medium"
      className={classes}
      data-kind={kind}
    >
      {Icon && <Icon width="16" height="16" aria-hidden={true} />}
      {children}
    </Typography>
  );
};
