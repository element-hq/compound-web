/*
Copyright 2023-2024 New Vector Ltd

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

import React, { ComponentProps, forwardRef, useCallback } from "react";
import { MenuItem } from "./MenuItem";
import { ToggleInput } from "../Form/Controls/Toggle";
import useId from "../../utils/useId";

type Props = Pick<
  ComponentProps<typeof MenuItem>,
  "className" | "Icon" | "label" | "onSelect" | "disabled"
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
    { className, Icon, label, onSelect, checked, disabled },
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
