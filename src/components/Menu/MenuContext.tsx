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

import { ComponentType, ReactNode, createContext } from "react";

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
