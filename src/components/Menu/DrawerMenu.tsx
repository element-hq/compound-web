/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from "react";
import ChevronDownIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-down";
import styles from "./DrawerMenu.module.css";
import { getPlatform } from "../../utils/platform";
import classNames from "classnames";
import { MenuScrollArea } from "./MenuScrollArea";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /**
   * The menu title.
   */
  title: string;
  /**
   * The menu contents.
   */
  children: ReactNode;
}

/**
 * A menu in a drawer, as commonly seen on mobile.
 */
// This an internal component not intended for export! Consumers should use it
// via the Menu or ContextMenu components.
export const DrawerMenu = forwardRef<HTMLDivElement, Props>(
  ({ title, children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(className, styles.drawer)}
      aria-label={title}
      data-platform={getPlatform()}
      {...props}
      role="menu"
    >
      <MenuScrollArea className={styles.body}>{children}</MenuScrollArea>
      <ChevronDownIcon
        aria-hidden
        className={styles.more}
        width={20}
        height={20}
      />
    </div>
  ),
);

DrawerMenu.displayName = "DrawerMenu";
