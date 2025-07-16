/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type ComponentProps,
  forwardRef,
  useCallback,
  useId,
} from "react";
import { MenuItem } from "./MenuItem";
import { ToggleInput } from "../Form/Controls/Toggle";

type Props = Pick<
  ComponentProps<typeof MenuItem>,
  "className" | "Icon" | "label" | "onSelect" | "disabled" | "onClick"
> & {
  /**
   * Whether the toggle is checked.
   */
  checked: boolean;
};

/**
 * A menu item with a toggle control.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export const ToggleMenuItem = forwardRef<HTMLInputElement, Props>(
  function ToggleMenuItem(
    { className, Icon, label, onSelect, checked, disabled, onClick },
    ref,
  ) {
    const toggleId = useId();
    // The toggle is controlled and we intend to ignore its events. We do need
    // to at least set onChange though to make React happy.
    const onChange = useCallback(() => {}, []);

    // <label> elements are not allowed to have a role like menuitemcheckbox, so
    // we must instead use a plain <div> for the menu item and use aria-checked
    // etc. to communicate its state.
    return (
      <MenuItem
        as="div"
        role="menuitemcheckbox"
        aria-checked={checked}
        className={className}
        Icon={Icon}
        label={label}
        onSelect={onSelect}
        disabled={disabled}
        onClick={onClick}
      >
        <ToggleInput
          id={toggleId}
          ref={ref}
          // This is purely cosmetic; really the whole MenuItem is the toggle.
          aria-hidden
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
      </MenuItem>
    );
  },
);
