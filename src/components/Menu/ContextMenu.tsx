/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type FC,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  ContextMenuItem,
} from "@radix-ui/react-context-menu";
import { FloatingMenu } from "./FloatingMenu";
import { Drawer } from "vaul";
import classnames from "classnames";
import drawerStyles from "./DrawerMenu.module.css";
import contextStyles from "./ContextMenu.module.css";
import {
  MenuContext,
  type MenuData,
  type MenuItemWrapperProps,
} from "./MenuContext";
import { DrawerMenu } from "./DrawerMenu";
import { getPlatform } from "../../utils/platform";

interface Props {
  /**
   * The menu title.
   */
  title: string;
  /**
   * Wether the title is displayed.
   * @default true
   */
  showTitle?: boolean;
  /**
   * Event handler called when the open state of the menu changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The trigger that can be right-clicked or long-pressed to open the menu.
   * This must be a component that accepts a ref and spreads props.
   * https://www.radix-ui.com/primitives/docs/guides/composition
   */
  trigger: ReactNode;
  /**
   * Whether the functionality of this menu is available through some other
   * keyboard-accessible means. Preferably this should be true, because context
   * menus are potentially difficult to discover, but if false the trigger will
   * become focusable so that it can be opened via keyboard navigation.
   */
  hasAccessibleAlternative: boolean;
  /**
   * The menu contents.
   */
  children: ReactNode;
}

const ContextMenuItemWrapper: FC<MenuItemWrapperProps> = ({
  onSelect,
  children,
}) => (
  <ContextMenuItem onSelect={onSelect ?? undefined} asChild>
    {children}
  </ContextMenuItem>
);

/**
 * A menu opened by right-clicking or long-pressing another UI element.
 */
export const ContextMenu: FC<Props> = ({
  title,
  showTitle = true,
  onOpenChange: onOpenChangeProp,
  trigger: triggerProp,
  hasAccessibleAlternative,
  children: childrenProp,
}) => {
  const [open, setOpen] = useState(false);
  const onOpenChange = useCallback(
    (value: boolean) => {
      setOpen(value);
      onOpenChangeProp?.(value);
    },
    [setOpen, onOpenChangeProp],
  );

  // Normally, the menu takes the form of a floating box. But on Android and
  // iOS, the menu should morph into a drawer
  const platform = getPlatform();
  const drawer = platform === "android" || platform === "ios";
  const context: MenuData = useMemo(
    () => ({
      MenuItemWrapper: drawer ? null : ContextMenuItemWrapper,
      onOpenChange,
    }),
    [onOpenChange],
  );
  const children = (
    <MenuContext.Provider value={context}>{childrenProp}</MenuContext.Provider>
  );

  const trigger = (
    <Trigger
      aria-haspopup="menu"
      tabIndex={hasAccessibleAlternative ? undefined : 0}
      asChild
    >
      {triggerProp}
    </Trigger>
  );

  // This is a small hack: Vaul drawers only support buttons as triggers, so
  // we end up mounting an empty Radix context menu tree alongside the
  // drawer tree, purely so we can use its Trigger component (which supports
  // touch for free). The resulting behavior and DOM tree looks exactly the
  // same as if Vaul provided a long-press trigger of its own, so I think
  // this is fine.
  return drawer ? (
    <>
      <Root onOpenChange={onOpenChange}>{trigger}</Root>
      <Drawer.Root open={open} onOpenChange={onOpenChange}>
        <Drawer.Portal>
          <Drawer.Overlay className={classnames(drawerStyles.bg)} />
          <Drawer.Content asChild>
            <DrawerMenu title={title}>{children}</DrawerMenu>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  ) : (
    <Root onOpenChange={onOpenChange}>
      {trigger}
      <Portal>
        <Content asChild className={classnames(contextStyles.content)}>
          <FloatingMenu showTitle={showTitle} title={title}>
            {children}
          </FloatingMenu>
        </Content>
      </Portal>
    </Root>
  );
};
