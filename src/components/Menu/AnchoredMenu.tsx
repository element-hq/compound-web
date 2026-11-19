/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type FC,
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import {
  Root,
  Anchor,
  Portal,
  Content,
  Item,
  Sub,
  SubTrigger,
  SubContent,
} from "@radix-ui/react-menu";
import { FloatingMenu } from "./FloatingMenu";
import {
  MenuContext,
  type MenuData,
  type MenuItemWrapperProps,
  type SubMenuWrapperProps,
} from "./MenuContext";
import { usePortalRoot } from "../PortalRoot/PortalRoot";
import { useDeferredSubMenuOpen } from "./useDeferredSubMenuOpen";

/**
 * What an AnchoredMenu is positioned against: an element, or a function
 * returning a rectangle in viewport coordinates. Either is read every time the
 * menu's position is updated (on open, scroll and resize).
 */
export type MenuAnchor = RefObject<Element | null> | (() => DOMRect);

export interface AnchoredMenuProps {
  /**
   * The menu title.
   */
  title: string;
  /**
   * Whether the title is displayed. If false, it is still used as the menu's
   * accessible name.
   * @default true
   */
  showTitle?: boolean;
  /**
   * Whether the menu is open.
   */
  open: boolean;
  /**
   * Event handler called when the open state of the menu changes.
   */
  onOpenChange: (open: boolean) => void;
  /**
   * What the menu is positioned against.
   */
  anchor: MenuAnchor;
  /**
   * The side of the anchor on which to place the menu. The menu may still end
   * up on the other side if there isn't enough space.
   * @default right
   */
  side?: "top" | "right" | "bottom" | "left";
  /**
   * The edge along which the menu and anchor are aligned.
   * @default start
   */
  align?: "start" | "center" | "end";
  /**
   * The distance in pixels between the menu and the anchor.
   * @default 4
   */
  sideOffset?: number;
  /**
   * The offset in pixels from the alignment edge.
   * @default -20
   */
  alignOffset?: number;
  /**
   * Whether the rest of the page is inert while the menu is open.
   * @default true
   */
  modal?: boolean;
  /**
   * The id of the menu element, for use with aria-controls.
   */
  id?: string;
  /**
   * Event handler called when focus moves back out of the menu after it closes.
   * By default, focus goes back to whatever had it when the menu opened, or,
   * if that element has gone, to the menu this one was opened from.
   * Call event.preventDefault to handle focus yourself.
   */
  onCloseAutoFocus?: (e: Event) => void;
  /**
   * The menu contents (typically MenuItem elements).
   */
  children: ReactNode;
}

const AnchoredMenuItemWrapper: FC<MenuItemWrapperProps> = ({
  onSelect,
  children,
}) => (
  <Item onSelect={onSelect ?? undefined} asChild>
    {children}
  </Item>
);

const AnchoredSubMenuWrapper: FC<SubMenuWrapperProps> = ({
  trigger,
  children,
  open: openProp,
  onOpenChange,
}) => {
  const portalRoot = usePortalRoot();
  const open = useDeferredSubMenuOpen(openProp);

  return (
    <Sub open={open} onOpenChange={onOpenChange}>
      <SubTrigger asChild>{trigger}</SubTrigger>
      <Portal container={portalRoot}>
        <SubContent asChild sideOffset={4} alignOffset={-20}>
          <FloatingMenu title="" showTitle={false}>
            {children}
          </FloatingMenu>
        </SubContent>
      </Portal>
    </Sub>
  );
};

const CLOSE_KEY_FOR_SIDE: Record<string, string | undefined> = {
  right: "ArrowLeft",
  left: "ArrowRight",
};

/**
 * A menu that is opened by setting `open`, and positioned against any element
 * or rectangle rather than a trigger. Opened from a menu item, and positioned
 * against the menu the item is in, it looks like a submenu but only opens and
 * closes when told to.
 *
 * The caller is responsible for the element that opens the menu, including
 * its aria-haspopup, aria-expanded and aria-controls attributes.
 */
// This is an internal component for now. Consumers should use it via
// Dropdown's "menu" variant.
export const AnchoredMenu: FC<AnchoredMenuProps> = ({
  title,
  showTitle = true,
  open,
  onOpenChange,
  anchor,
  side = "right",
  align = "start",
  sideOffset = 4,
  alignOffset = -20,
  modal = true,
  id,
  onCloseAutoFocus: onCloseAutoFocusProp,
  children: childrenProp,
}) => {
  const portalRoot = usePortalRoot();
  const parentContext = useContext(MenuContext);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const virtualRef = useMemo(
    () => ({
      current: {
        getBoundingClientRect: (): DOMRect =>
          typeof anchor === "function"
            ? anchor()
            : (anchor.current?.getBoundingClientRect() ?? new DOMRect()),
      },
    }),
    [anchor],
  );

  const context: MenuData = useMemo(
    () => ({
      MenuItemWrapper: AnchoredMenuItemWrapper,
      SubMenuWrapper: AnchoredSubMenuWrapper,
      onOpenChange,
      contentRef,
    }),
    [onOpenChange],
  );

  // Remember what had focus when the menu opened, so that if it has gone by
  // the time the menu closes (eg. the trigger was replaced by the selected
  // value) focus can go somewhere sensible rather than the document body.
  // Layout effects run before Radix moves focus into the menu (in a passive
  // effect), so this sees the element that had focus beforehand.
  const focusedOnOpenRef = useRef<Element | null>(null);
  useLayoutEffect(() => {
    if (open) focusedOnOpenRef.current = document.activeElement;
  }, [open]);

  const onCloseAutoFocus = useCallback(
    (e: Event) => {
      onCloseAutoFocusProp?.(e);
      if (e.defaultPrevented) return;
      if (focusedOnOpenRef.current?.isConnected) return;
      const fallback = parentContext?.contentRef?.current;
      if (fallback) {
        e.preventDefault();
        fallback.focus();
      }
    },
    [onCloseAutoFocusProp, parentContext],
  );

  // Radix only closes submenus with the arrow key pointing back at their
  // trigger, so do the same here for menus to the side of their anchor.
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const placedSide = e.currentTarget.getAttribute("data-side") ?? side;
      if (
        e.key === CLOSE_KEY_FOR_SIDE[placedSide] &&
        e.target instanceof Element &&
        e.target.closest("[data-radix-menu-content]") === e.currentTarget
      ) {
        e.preventDefault();
        onOpenChange(false);
      }
    },
    [side, onOpenChange],
  );

  return (
    <Root open={open} onOpenChange={onOpenChange} modal={modal}>
      <Anchor virtualRef={virtualRef} />
      <Portal container={portalRoot}>
        <Content
          asChild
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          onCloseAutoFocus={onCloseAutoFocus}
          onKeyDown={onKeyDown}
        >
          <FloatingMenu
            ref={contentRef}
            id={id}
            title={title}
            showTitle={showTitle}
          >
            <MenuContext.Provider value={context}>
              {childrenProp}
            </MenuContext.Provider>
          </FloatingMenu>
        </Content>
      </Portal>
    </Root>
  );
};
