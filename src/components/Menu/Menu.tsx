/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type FC,
  type ReactNode,
  useMemo,
  useEffect,
  useState,
} from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  type DropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import { FloatingMenu } from "./FloatingMenu";
import { Drawer } from "vaul";
import classnames from "classnames";
import drawerMenu from "./DrawerMenu.module.css";
import {
  MenuContext,
  type MenuData,
  type MenuItemWrapperProps,
  type SubMenuWrapperProps,
} from "./MenuContext";
import { DrawerMenu } from "./DrawerMenu";
import { getPlatform } from "../../utils/platform";
import { usePortalRoot } from "../PortalRoot/PortalRoot";

interface Props {
  /**
   * CSS classes for the menu.
   */
  className?: string;

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
  /**
   * Elements besides the viewport that the menu stays within; a menu too long
   * for the space scrolls. Ignored where the menu is a drawer.
   */
  collisionBoundary?: DropdownMenuContentProps["collisionBoundary"];
  /**
   * Pixels kept between the menu and its boundary. Ignored where the menu is a
   * drawer.
   * @default 0
   */
  collisionPadding?: DropdownMenuContentProps["collisionPadding"];
}

const DropdownMenuItemWrapper: FC<MenuItemWrapperProps> = ({
  onSelect,
  children,
}) => (
  <DropdownMenuItem onSelect={onSelect ?? undefined} asChild>
    {children}
  </DropdownMenuItem>
);

/** Duration of the parent menu's slide-in animation (ms). */
const MENU_ANIMATION_DURATION = 180;

const DropdownSubMenuWrapper: FC<SubMenuWrapperProps> = ({
  trigger,
  children,
  open: openProp,
  onOpenChange,
}) => {
  const portalRoot = usePortalRoot();
  // When the submenu is programmatically opened at the same time as the parent
  // menu (e.g. open={true} on mount), the parent is still mid-animation and
  // the trigger position hasn't settled. Defer the open so the submenu
  // positions correctly after the parent animation completes.
  const [deferredOpen, setDeferredOpen] = useState(false);

  useEffect(() => {
    if (openProp) {
      const timer = setTimeout(
        () => setDeferredOpen(true),
        MENU_ANIMATION_DURATION,
      );
      return () => clearTimeout(timer);
    } else {
      setDeferredOpen(false);
    }
  }, [openProp]);

  const open = openProp ? deferredOpen : openProp;

  return (
    <DropdownMenuSub open={open} onOpenChange={onOpenChange}>
      <DropdownMenuSubTrigger asChild>{trigger}</DropdownMenuSubTrigger>
      <DropdownMenuPortal container={portalRoot}>
        <DropdownMenuSubContent asChild sideOffset={4} alignOffset={-20}>
          <FloatingMenu title="" showTitle={false}>
            {children}
          </FloatingMenu>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

/**
 * A menu opened by pressing a button.
 */
export const Menu: FC<Props> = ({
  className,
  title,
  showTitle = true,
  open,
  onOpenChange,
  trigger,
  children: childrenProp,
  side = "bottom",
  align = "center",
  collisionBoundary,
  collisionPadding = 0,
}) => {
  // Normally, the menu takes the form of a floating box. But on Android and
  // iOS, the menu should morph into a drawer
  const platform = getPlatform();
  const drawer = platform === "android" || platform === "ios";
  const portalRoot = usePortalRoot();
  const context: MenuData = useMemo(
    () => ({
      MenuItemWrapper: drawer ? null : DropdownMenuItemWrapper,
      SubMenuWrapper: drawer ? null : DropdownSubMenuWrapper,
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
      <Drawer.Portal container={portalRoot}>
        <Drawer.Overlay className={classnames(drawerMenu.bg)} />
        <Drawer.Content asChild>
          <DrawerMenu title={title}>{children}</DrawerMenu>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  ) : (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>{trigger}</Trigger>
      <Portal container={portalRoot}>
        <Content
          asChild
          side={side}
          align={align}
          sideOffset={8}
          collisionBoundary={collisionBoundary}
          collisionPadding={collisionPadding}
        >
          <FloatingMenu
            className={className}
            title={title}
            showTitle={showTitle}
          >
            {children}
          </FloatingMenu>
        </Content>
      </Portal>
    </Root>
  );
};
