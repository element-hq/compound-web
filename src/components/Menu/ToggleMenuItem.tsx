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
import styles from "./MenuItem.module.css";
import { Text } from "../Typography/Text";

type Props = Pick<
  ComponentProps<typeof MenuItem>,
  "className" | "Icon" | "label" | "onSelect"
> &
  Omit<ComponentProps<typeof ToggleInput>, "id" | "children" | "onSelect">;

/**
 * A menu item with a toggle control. Clicking anywhere on the surface will
 * activate the toggle.
 * Must be used within a compound Menu or other `menu` or `menubar` aria role subtree.
 */
export const ToggleMenuItem = forwardRef<HTMLInputElement, Props>(
  function ToggleMenuItem(
    { className, Icon, label, onSelect, ...toggleProps },
    ref,
  ) {
    const toggleId = useId();
    // We render the label ourselves as a `label` element cannot have role `menuitemcheckbox`
    return (
      <MenuItem
        role="menuitemcheckbox"
        className={className}
        Icon={Icon}
        label={null}
        onSelect={onSelect}
        aria-checked={toggleProps.checked}
      >
        <Text
          className={styles.label}
          size="md"
          weight="medium"
          as="label"
          htmlFor={toggleId}
        >
          {label}
        </Text>
        <ToggleInput id={toggleId} ref={ref} {...toggleProps} />
      </MenuItem>
    );
  },
);
