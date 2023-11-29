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

import React, { ComponentProps, forwardRef } from "react";
import { MenuItem } from "./MenuItem";
import { ToggleInput } from "../Form/Controls/Toggle";
import useId from "../../utils/useId";

type Props = Pick<
  ComponentProps<typeof MenuItem>,
  "className" | "Icon" | "label" | "onSelect"
> &
  Omit<ComponentProps<typeof ToggleInput>, "id" | "children">;

/**
 * A menu item with a toggle control. Clicking anywhere on the surface will
 * activate the toggle.
 */
export const ToggleMenuItem = forwardRef<HTMLInputElement, Props>(
  function ToggleMenuItem(
    { className, Icon, label, onSelect, ...toggleProps },
    ref,
  ) {
    const toggleId = useId();
    return (
      <MenuItem
        as="label"
        htmlFor={toggleId}
        role="menuitemcheckbox"
        className={className}
        Icon={Icon}
        label={label}
        onSelect={onSelect}
      >
        <ToggleInput id={toggleId} ref={ref} {...toggleProps} />
      </MenuItem>
    );
  },
);
