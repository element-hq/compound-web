/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useId,
} from "react";
import styles from "./FloatingMenu.module.css";
import { MenuTitle } from "./MenuTitle.tsx";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /**
   * The menu title.
   */
  title: string;
  /**
   * Whether to show the title. If false, the title will be hidden but still used as a label for screen readers.
   */
  showTitle?: boolean;
  /**
   * The CSS class.
   */
  className?: string;
  /**
   * The menu contents.
   */
  children: ReactNode;
}

/**
 * A menu in a floating box, as commonly seen on desktop.
 */
// This an internal component not intended for export! Consumers should use it
// via the Menu or ContextMenu components.
export const FloatingMenu = forwardRef<HTMLDivElement, Props>(
  ({ title, showTitle = true, className, children, ...props }, ref) => {
    const titleId = useId();
    return (
      <div
        role="menu"
        ref={ref}
        aria-label={showTitle ? undefined : title}
        aria-labelledby={showTitle ? titleId : undefined}
        className={classnames(className, styles.menu)}
        {...props}
      >
        {showTitle && (
          <MenuTitle className={styles.title} title={title} id={titleId} />
        )}
        {children}
      </div>
    );
  },
);

FloatingMenu.displayName = "FloatingMenu";
