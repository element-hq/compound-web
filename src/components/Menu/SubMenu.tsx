/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type FC, type ReactNode, useContext } from "react";
import { MenuContext } from "./MenuContext";

interface Props {
  /**
   * The trigger element that opens the submenu. This should be a MenuItem.
   */
  trigger: ReactNode;
  /**
   * Whether the submenu is open (controlled).
   */
  open?: boolean;
  /**
   * Event handler called when the open state of the submenu changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The submenu contents (typically MenuItem elements).
   */
  children: ReactNode;
}

/**
 * A submenu within a Menu or ContextMenu. The trigger should be a MenuItem
 * component and the children are the submenu items.
 */
export const SubMenu: FC<Props> = ({
  trigger,
  open,
  onOpenChange,
  children,
}) => {
  const context = useContext(MenuContext);

  // When there's no SubMenuWrapper (e.g. drawer on mobile), flatten the
  // submenu items inline — nested flyouts don't work well in drawers.
  if (context?.SubMenuWrapper == null) {
    return (
      <>
        {trigger}
        {children}
      </>
    );
  }

  return (
    <context.SubMenuWrapper
      trigger={trigger}
      open={open}
      onOpenChange={onOpenChange}
    >
      {children}
    </context.SubMenuWrapper>
  );
};
