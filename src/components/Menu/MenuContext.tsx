/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
  type ComponentType,
  type ReactNode,
  type RefObject,
  createContext,
} from "react";

export interface MenuItemWrapperProps {
  /**
   * Event callback for when the item is selected via mouse, touch, or keyboard.
   * Calling event.preventDefault in this handler will prevent the menu from
   * being dismissed.
   */
  onSelect: (e: Event) => void;
  children: ReactNode;
}

export interface SubMenuWrapperProps {
  /**
   * The trigger element that opens the submenu (typically a MenuItem).
   */
  trigger: ReactNode;
  /**
   * The submenu contents.
   */
  children: ReactNode;
  /**
   * Whether the submenu is open (controlled).
   */
  open?: boolean;
  /**
   * Event handler called when the open state of the submenu changes.
   */
  onOpenChange?: (open: boolean) => void;
}

export interface MenuData {
  /**
   * A component that wraps interactive menu items.
   */
  MenuItemWrapper: ComponentType<MenuItemWrapperProps> | null;
  /**
   * A component that wraps submenus.
   */
  SubMenuWrapper: ComponentType<SubMenuWrapperProps> | null;
  /**
   * Event handler called when the open state of the menu changes.
   */
  onOpenChange: (open: boolean) => void;
  /**
   * The element holding the menu's content, if it is a floating box. Lets a
   * popup opened from inside the menu line up with the menu's edge.
   */
  contentRef?: RefObject<HTMLElement | null>;
}

/**
 * A React context providing information about the menu in which a given
 * component resides.
 */
export const MenuContext = createContext<MenuData | null>(null);
