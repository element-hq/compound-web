/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX, type PropsWithChildren } from "react";
import styles from "./VisualList.module.css";
import classNames from "classnames";

interface VisualListProps extends React.HTMLProps<HTMLUListElement> {
  /**
   * The CSS class name.
   */
  className?: string;
}

/**
 * A list component.
 */
export function VisualList({
  className,
  children,
  ...props
}: PropsWithChildren<VisualListProps>): JSX.Element {
  return (
    <ul className={classNames(styles["visual-list"], className)} {...props}>
      {children}
    </ul>
  );
}
