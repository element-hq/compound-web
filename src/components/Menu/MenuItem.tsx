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
  useCallback,
  useContext,
} from "react";
import styles from "./MenuItem.module.css";
import { Text } from "../Typography/Text";
import ChevronRightIcon from "@vector-im/compound-design-tokens/icons/chevron-right.svg";
import { MenuContext } from "./MenuContext";

type MenuItemElement = "button" | "label" | "a" | "div";

type Props<C extends MenuItemElement> = {
  /**
   * The element type of this menu item.
   * @default button
   */
  as?: C;
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The icon to show on this menu item.
   */
  Icon: ComponentType<SVGAttributes<SVGElement>>;
  /**
   * The label to show on this menu item.
   */
  // This prop is required because it's rare to not want a label
  label: string | null;
  /**
   * Event callback for when the item is selected via mouse, touch, or keyboard.
   * Calling event.preventDefault in this handler will prevent the menu from
   * being dismissed.
   */
  // This prop is required because it's rare to not want a selection handler
  onSelect: ((e: Event) => void) | null;
  /**
   * The color variant of the menu item.
   * @default primary
   */
  kind?: "primary" | "critical";
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, "onSelect">;

/**
 * An item within a menu, acting either as a navigation button, or simply a
 * container for other interactive elements.
 */
export const MenuItem = <C extends MenuItemElement = "button">({
  as,
  className,
  Icon,
  label,
  onSelect,
  kind = "primary",
  children,
  onClick: onClickProp,
  disabled,
  ...props
}: Props<C>): JSX.Element => {
  const Component = as ?? ("button" as ElementType);
  const context = useContext(MenuContext);

  const onClick = useCallback(
    (e: Parameters<Exclude<typeof onClickProp, undefined>>[0]) => {
      (onClickProp as ((e_: typeof e) => void) | undefined)?.(e);
      // If there is no wrapper component to automatically handle onSelect, we
      // need to handle it manually, dismissing the menu as the default action
      if (onSelect !== null && context?.MenuItemWrapper == null) {
        const selectEvent = new CustomEvent("menu.itemSelect", {
          bubbles: true,
          cancelable: true,
        });
        onSelect(selectEvent);
        if (!selectEvent.defaultPrevented) context?.onOpenChange(false);
      }
    },
    [context, onSelect],
  );

  const content = (
    <Component
      role="menuitem"
      {...props}
      className={classnames(className, styles.item, {
        [styles.interactive]: onSelect !== null,
        [styles["no-label"]]: label === null,
        [styles["disabled"]]: disabled,
      })}
      data-kind={kind}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon width={24} height={24} className={styles.icon} aria-hidden={true} />
      {label !== null && (
        <Text className={styles.label} size="md" weight="medium" as="span">
          {label}
        </Text>
      )}
      {/* We use CSS to swap between this navigation hint and the provided
      children on hover - see the styles module. */}
      {(Component === "button" || Component === "a") && (
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

  return context?.MenuItemWrapper == null || onSelect === null ? (
    content
  ) : (
    <context.MenuItemWrapper onSelect={onSelect}>
      {content}
    </context.MenuItemWrapper>
  );
};
