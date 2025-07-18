/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, {
  type ComponentProps,
  forwardRef,
  useCallback,
  useId,
} from "react";
import { MenuItem } from "./MenuItem";
import { CheckboxInput } from "../Form";

type Props = Pick<
  ComponentProps<typeof MenuItem>,
  "className" | "label" | "onSelect" | "disabled"
> & {
  /**
   * Whether the checkbox is checked.
   */
  checked: boolean;
};

/**
 * A menu item with a checkbox control.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export const CheckboxMenuItem = forwardRef<HTMLInputElement, Props>(
  function CheckboxMenuItem(
    { className, label, onSelect, checked, disabled },
    ref,
  ) {
    const toggleId = useId();
    // The checkbox is controlled and we intend to ignore its events. We do need
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
        label={label}
        onSelect={onSelect}
        disabled={disabled}
        Icon={
          <CheckboxInput
            id={toggleId}
            ref={ref}
            // This is purely cosmetic; really the whole MenuItem is the toggle.
            aria-hidden
            checked={checked}
            disabled={disabled}
            onChange={onChange}
          />
        }
      />
    );
  },
);
