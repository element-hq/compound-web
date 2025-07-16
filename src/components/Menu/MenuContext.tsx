/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type ComponentType, type ReactNode, createContext } from "react";

export interface MenuItemWrapperProps {
  /**
   * Event callback for when the item is selected via mouse, touch, or keyboard.
   * Calling event.preventDefault in this handler will prevent the menu from
   * being dismissed.
   */
  onSelect: (e: Event) => void;
  children: ReactNode;
}

export interface MenuData {
  /**
   * A component that wraps interactive menu items.
   */
  MenuItemWrapper: ComponentType<MenuItemWrapperProps> | null;
  /**
   * Event handler called when the open state of the menu changes.
   */
  onOpenChange: (open: boolean) => void;
}

/**
 * A React context providing information about the menu in which a given
 * component resides.
 */
export const MenuContext = createContext<MenuData | null>(null);
