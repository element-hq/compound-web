/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type FC, type ReactNode, useMemo } from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { FloatingMenu } from "./FloatingMenu";
import { Drawer } from "vaul";
import classnames from "classnames";
import drawerMenu from "./DrawerMenu.module.css";
import {
  MenuContext,
  type MenuData,
  type MenuItemWrapperProps,
} from "./MenuContext";
import { DrawerMenu } from "./DrawerMenu";
import { getPlatform } from "../../utils/platform";

interface Props {
  /**
   * The menu title. This can be hidden with `showTitle={false}` in which case it will only
   * be a label for screen readers.
   */
  title: string;
  /**
   * Controls whether the title is displayed (see `title` prop). Titles are only displayed on
   * web: on mobile, this parameter is ignored.
   */
  showTitle?: boolean;
  /**
   * Whether the menu is open.
   */
  open: boolean;
  /**
   * Event handler called when the open state of the menu changes. This includes
   * anything like clicking the trigger, selecting a menu item, or dismissing
   * the menu with the mouse or keyboard.
   */
  onOpenChange: (open: boolean) => void;
  /**
   * The button that opens the menu. This must be a component that accepts a ref
   * and spreads props.
   * https://www.radix-ui.com/primitives/docs/guides/composition
   */
  trigger: ReactNode;
  /**
   * The menu contents.
   */
  children: ReactNode;
  /**
   * The side of the trigger on which to place the menu. Note that the menu may
   * still end up on a different side than the one you request if there isn't
   * enough space.
   * @default bottom
   */
  side?: "top" | "right" | "bottom" | "left";
  /**
   * The edge along which the menu and trigger will be aligned.
   * @default center
   */
  align?: "start" | "center" | "end";
}

const DropdownMenuItemWrapper: FC<MenuItemWrapperProps> = ({
  onSelect,
  children,
}) => (
  <DropdownMenuItem onSelect={onSelect ?? undefined} asChild>
    {children}
  </DropdownMenuItem>
);

/**
 * A menu opened by pressing a button.
 */
export const Menu: FC<Props> = ({
  title,
  showTitle = true,
  open,
  onOpenChange,
  trigger,
  children: childrenProp,
  side = "bottom",
  align = "center",
}) => {
  // Normally, the menu takes the form of a floating box. But on Android and
  // iOS, the menu should morph into a drawer
  const platform = getPlatform();
  const drawer = platform === "android" || platform === "ios";
  const context: MenuData = useMemo(
    () => ({
      MenuItemWrapper: drawer ? null : DropdownMenuItemWrapper,
      onOpenChange,
    }),
    [onOpenChange],
  );
  const children = (
    <MenuContext.Provider value={context}>{childrenProp}</MenuContext.Provider>
  );

  return drawer ? (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className={classnames(drawerMenu.bg)} />
        <Drawer.Content asChild>
          <DrawerMenu title={title}>{children}</DrawerMenu>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ) : (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Content asChild side={side} align={align} sideOffset={8}>
          <FloatingMenu title={title} showTitle={showTitle}>
            {children}
          </FloatingMenu>
        </Content>
      </Portal>
    </Root>
  );
};
