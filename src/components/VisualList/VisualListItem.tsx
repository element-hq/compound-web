/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type ComponentType,
  type JSX,
  type PropsWithChildren,
} from "react";
import styles from "./VisualListItem.module.css";
import classNames from "classnames";

interface VisualListItemProps extends React.HTMLProps<HTMLLIElement> {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The icon component.
   */
  Icon: ComponentType<React.SVGAttributes<SVGElement>>;

  success?: boolean;
  destructive?: boolean;
}

/**
 * A list component.
 */
export function VisualListItem({
  className,
  children,
  Icon,
  success = false,
  destructive = false,
  ...props
}: PropsWithChildren<VisualListItemProps>): JSX.Element {
  return (
    <li
      className={classNames(styles["visual-list-item"], className)}
      {...props}
    >
      <Icon
        className={classNames(styles["visual-list-item-icon"], {
          [styles["visual-list-item-icon-success"]]: success,
          [styles["visual-list-item-icon-destructive"]]: destructive,
        })}
        width="24px"
        height="24px"
        aria-hidden={true}
      />
      {children}
    </li>
  );
}
