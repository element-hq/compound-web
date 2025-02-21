/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { Text } from "../Typography/Text.tsx";
import styles from "./MenuTitle.module.css";
import classnames from "classnames";

interface MenuTitleProps {
  /**
   * The title of the menu.
   */
  title: string;
  /**
   * The id of the menu title.
   */
  id?: string;
  /**
   * The CSS class.
   */
  className?: string;
}

export const MenuTitle: React.FC<MenuTitleProps> = ({
  title,
  id,
  className,
}) => {
  const classes = classnames(styles["menu-title"], className);

  return (
    <Text as="h3" id={id} className={classes} size="sm" weight="semibold">
      {title}
    </Text>
  );
};
