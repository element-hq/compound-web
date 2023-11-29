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

import React, { FC, ReactNode, useMemo } from "react";
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
import { MenuContext, MenuData, MenuItemWrapperProps } from "./MenuContext";
import { DrawerMenu } from "./DrawerMenu";
import { getPlatform } from "../../utils/platform";

interface Props {
  /**
   * The menu title.
   */
  title: string;
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
          <FloatingMenu title={title}>{children}</FloatingMenu>
        </Content>
      </Portal>
    </Root>
  );
};
