/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, type PropsWithChildren } from "react";
import styles from "./Link.module.css";
import classNames from "classnames";

type LinkProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The type of link.
   * @default "primary"
   */
  kind?: "primary" | "critical";
  /**
   * The size of link.
   * @default "medium"
   */
  size?: "small" | "medium";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel" | "size">;

/**
 * A link component.
 */
export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  function Link(
    { children, className, kind = "primary", size = "medium", ...props },
    ref,
  ) {
    return (
      <a
        ref={ref}
        {...props}
        rel="noreferrer noopener"
        className={classNames(styles.link, className)}
        data-kind={kind}
        data-size={size}
      >
        {children}
      </a>
    );
  },
);
