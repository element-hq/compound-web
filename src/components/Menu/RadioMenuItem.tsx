/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { ComponentProps, forwardRef, useCallback, useId } from "react";
import { MenuItem } from "./MenuItem";
import { RadioInput } from "../Form";

export type RadioMenuItemProps = Pick<
  ComponentProps<typeof MenuItem>,
  "className" | "label" | "onSelect" | "disabled"
> & Pick<React.HTMLAttributes<HTMLDivElement>, "onFocus" | "onBlur"> & {
  /**
   * Whether the radio is checked.
   */
  checked: boolean;
};

/**
 * A menu item with a radio control.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree
 * and generally should be used within a RadioMenuGroup which implements the ARIA
 * behaviours for the 'menuitemradio' role.
 */
export const RadioMenuItem = forwardRef<HTMLInputElement, RadioMenuItemProps>(
  function RadioMenuItem(
    { className, label, onSelect, onFocus, onBlur, checked, disabled },
    ref,
  ) {
    const toggleId = useId();
    // The radio is controlled and we intend to ignore its events. We do need
    // to at least set onChange though to make React happy.
    const onChange = useCallback(() => {}, []);

    // <label> elements are not allowed to have a role like menuitemradio, so
    // we must instead use a plain <div> for the menu item and use aria-checked
    // etc. to communicate its state.
    return (
      <MenuItem
        as="div"
        role="menuitemradio"
        aria-checked={checked}
        className={className}
        label={label}
        onSelect={onSelect}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        tabIndex={0}
        Icon={
          <RadioInput
            id={toggleId}
            ref={ref}
            // This is purely cosmetic; really the whole MenuItem is the toggle.
            aria-hidden
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            style={{pointerEvents: "none"}}
            tabIndex={-1}
          />
        }
      ></MenuItem>
    );
  },
);
