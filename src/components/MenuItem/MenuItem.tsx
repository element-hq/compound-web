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
import React, {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
  SVGAttributes,
} from "react";
import styles from "./MenuItem.module.css";
import { Text } from "../Typography/Text";
import ChevronRightIcon from "@vector-im/compound-design-tokens/icons/chevron-right.svg";

type MenuItemElement = "button" | "label" | "div";

type Props<C extends MenuItemElement> = {
  /**
   * The element type of this menu item.
   * @default button
   */
  as?: C;
  className?: string;
  /**
   * The icon to show on this menu item.
   */
  Icon: ComponentType<SVGAttributes<SVGElement>>;
  /**
   * The label to show on this menu item.
   */
  label: string;
  /**
   * The color variant of the menu item.
   * @default primary
   */
  kind?: "primary" | "critical";
  /**
   * Whether to replace the children with a navigation hint on hover.
   * @default true
   */
  navHint?: boolean;
} & ComponentPropsWithoutRef<C>;

export const MenuItem = <C extends MenuItemElement = "button">({
  as,
  className,
  Icon,
  label,
  kind = "primary",
  navHint = true,
  children,
  ...props
}: Props<C>) => {
  const Component = as ?? ("button" as ElementType);

  return (
    <Component
      {...props}
      className={classnames(className, styles.item, {
        [styles.interactive]: as !== "div",
      })}
      data-kind={kind}
    >
      <Icon width={24} height={24} className={styles.icon} aria-hidden={true} />
      <Text className={styles.label} size="md" weight="medium" as="span">
        {label}
      </Text>
      {navHint && (
        <ChevronRightIcon
          width={24}
          height={24}
          className={styles["nav-hint"]}
          aria-hidden={true}
        />
      )}
      {children}
    </Component>
  );
};
