/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type FC,
  type MouseEvent,
  type ReactNode,
  type SyntheticEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { MenuContext } from "./MenuContext";

interface Props {
  /**
   * The trigger element that opens the submenu. This is usually a MenuItem,
   * but can be any element that forwards its ref and spreads its props. The
   * submenu is positioned beside this element.
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
   * How the pointer opens the submenu.
   * - `"hover"`: opens when the pointer rests on the trigger, and closes when
   *   the pointer leaves the trigger unless it is heading for the submenu.
   * - `"click"`: clicking the trigger opens and closes the submenu. Moving the
   *   pointer off the trigger leaves it open; moving onto another item in the
   *   parent menu still closes it.
   *
   * Keyboard behaviour is the same for both.
   * @default "hover"
   */
  openOn?: "hover" | "click";
  /**
   * The submenu contents (typically MenuItem elements).
   */
  children: ReactNode;
}

// Radix skips its own trigger handlers when the default has been prevented.
const preventDefault = (e: SyntheticEvent): void => e.preventDefault();

/**
 * A submenu within a Menu or ContextMenu. The trigger is usually a MenuItem
 * and the children are the submenu items.
 */
export const SubMenu: FC<Props> = ({
  trigger,
  open: openProp,
  onOpenChange,
  openOn = "hover",
  children,
}) => {
  const context = useContext(MenuContext);

  // Radix's trigger only ever opens the submenu, so to let a second click
  // close it, click mode keeps track of the open state here.
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = openProp ?? (openOn === "click" ? uncontrolledOpen : undefined);
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      setUncontrolledOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange],
  );

  const onTriggerClick = useCallback(
    (e: MouseEvent) => {
      if (open) {
        e.preventDefault();
        handleOpenChange(false);
      }
    },
    [open, handleOpenChange],
  );

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

  // These handlers run before Radix's trigger handlers, and stop them
  // opening the submenu on hover or closing it when the pointer leaves.
  const wrappedTrigger =
    openOn === "click" ? (
      <Slot
        onPointerMove={preventDefault}
        onPointerLeave={preventDefault}
        onClick={onTriggerClick}
      >
        {trigger}
      </Slot>
    ) : (
      trigger
    );

  return (
    <context.SubMenuWrapper
      trigger={wrappedTrigger}
      open={open}
      onOpenChange={handleOpenChange}
    >
      {children}
    </context.SubMenuWrapper>
  );
};
