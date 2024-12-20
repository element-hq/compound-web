/*
Copyright 2024 New Vector Ltd

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

import React, { ComponentType, JSX, PropsWithChildren } from "react";
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
