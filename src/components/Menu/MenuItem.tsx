/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ElementType,
  isValidElement,
  type ReactElement,
  type SVGAttributes,
  useCallback,
  useContext,
  type MouseEventHandler,
} from "react";
import styles from "./MenuItem.module.css";
import { Text } from "../Typography/Text";
import ChevronRightIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-right";
import { MenuContext } from "./MenuContext";
import { Slot } from "@radix-ui/react-slot";

type MenuItemElement = "button" | "a" | "div";

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
   * When `Icon` is a ReactElement, it should spread the props
   */
  Icon?: ComponentType<SVGAttributes<SVGElement>> | ReactElement;
  /**
   * The label to show on this menu item.
   */
  // This prop is required because it's rare to not want a label
  label: string | null;
  /**
   * Additional properties to pass to the Text label component.
   */
  labelProps?: ComponentPropsWithoutRef<typeof Text>;
  /**
   * Event callback for when the item is selected via mouse, touch, or keyboard.
   * Calling event.preventDefault in this handler will prevent the menu from
   * being dismissed.
   */
  // This prop is required because it's rare to not want a selection handler
  onSelect: ((e: Event) => void) | null;
  /**
   * Event callback for when the item is clicked.
   * @param e
   */
  onClick?: MouseEventHandler<HTMLElementTagNameMap[C]>;
  /**
   * The color variant of the menu item.
   * @default primary
   */
  kind?: "primary" | "critical";
  disabled?: boolean;
  /**
   * Whether to hide the chevron navigation hint.
   */
  hideChevron?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, "onSelect" | "onClick">;

/**
 * An item within a menu, acting either as a navigation button, or simply a
 * container for other interactive elements.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export const MenuItem = <C extends MenuItemElement = "button">({
  as,
  className,
  Icon,
  label,
  labelProps,
  onSelect,
  kind = "primary",
  children,
  onClick: onClickProp,
  disabled,
  hideChevron,
  ...props
}: Props<C>): React.ReactElement => {
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

  const iconIsReactElement = isValidElement(Icon);
  const componentIcon = Icon as ReactElement;
  const SvgIcon = Icon as ComponentType<SVGAttributes<SVGElement>>;

  const content = (
    <Component
      role="menuitem"
      {...props}
      className={classnames(className, styles.item, {
        [styles.interactive]: onSelect !== null,
        [styles["no-label"]]: label === null,
        [styles["no-icon"]]: !Icon,
        [styles["disabled"]]: disabled,
      })}
      data-kind={kind}
      onClick={onClick}
      disabled={Component === "button" ? disabled : undefined}
      aria-disabled={Component === "button" ? undefined : disabled}
    >
      {Icon &&
        (iconIsReactElement ? (
          <Slot className={styles.icon}>{componentIcon}</Slot>
        ) : (
          <SvgIcon
            width={24}
            height={24}
            className={styles.icon}
            aria-hidden={true}
          />
        ))}

      {label !== null && (
        <Text
          className={styles.label}
          size="md"
          weight="medium"
          as="span"
          {...labelProps}
        >
          {label}
        </Text>
      )}
      {/* We use CSS to swap between this navigation hint and the provided
      children on hover - see the styles module. */}
      {!hideChevron && (Component === "button" || Component === "a") && (
        <ChevronRightIcon
          width={8}
          height={24}
          className={styles["nav-hint"]}
          aria-hidden={true}
          /* The SVG is a small icon in a large canvas. It probably ought to be
             cropped, but we can adjust the viewBox here to chop off the horizontal
             space to get it closer to the right hand edge.
           */
          viewBox="8 0 8 24"
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
