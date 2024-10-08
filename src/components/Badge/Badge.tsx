/*
Copyright 2023 New Vector Ltd

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

import classnames from "classnames";
import React, { PropsWithChildren } from "react";
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
