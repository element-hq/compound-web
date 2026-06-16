/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import Check from "@vector-im/compound-design-tokens/assets/web/icons/check";

import React, {
  type HTMLProps,
  memo,
  type RefObject,
  useEffect,
  useRef,
  type KeyboardEvent,
} from "react";

import classNames from "classnames";

import styles from "./DropdownMenu.module.css";

type DropdownMenuProps = {
  /**
   * Whether the menu is open.
   */
  open: boolean;
  /**
   * The values to display in the menu.
   * [value, text]
   */
  values: [string, string][];
  /**
   * The currently selected value.
   */
  selectedValue: string | undefined;
  /**
   * The id for the listbox element (used for aria-controls on the trigger).
   */
  id: string;
  /**
   * Ref to the underlying ul element for keyboard navigation.
   */
  listRef: RefObject<HTMLUListElement | null>;
  /**
   * Keyboard event handler for individual options.
   */
  onOptionKeyDown: (e: KeyboardEvent<HTMLLIElement>, value: string) => void;
  /**
   * Called when the user selects an option.
   */
  onSelect: (value: string) => void;
};

/**
 * The popup listbox portion of a Dropdown: scrollable
 * list container, and option items.
 */
export function DropdownMenu({
  open,
  values,
  selectedValue,
  id,
  listRef,
  onOptionKeyDown,
  onSelect,
}: DropdownMenuProps) {
  return (
    <>
      <div className={classNames(styles.border, { [styles.open]: open })} />
      <div className={classNames(styles.content, { [styles.open]: open })}>
        <ul ref={listRef} id={id} role="listbox">
          {values.map(([v, text]) => (
            <DropdownItem
              key={v}
              isDisplayed={open}
              isSelected={selectedValue === v}
              onClick={() => onSelect(v)}
              onKeyDown={(e) => onOptionKeyDown(e, v)}
            >
              {text}
            </DropdownItem>
          ))}
        </ul>
      </div>
    </>
  );
}

type DropdownItemProps = HTMLProps<HTMLLIElement> & {
  /**
   * Whether the dropdown item is selected.
   */
  isSelected: boolean;
  /**
   * Whether the dropdown is open (used to auto-focus selected item).
   */
  isDisplayed: boolean;
  /**
   * The text to display in the dropdown item.
   */
  children: string;
};

const DropdownItem = memo(function DropdownItem({
  children,
  isSelected,
  isDisplayed,
  ...props
}: DropdownItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  // Focus the item if the dropdown is open and the item is already selected
  useEffect(() => {
    if (isSelected && isDisplayed) {
      ref.current?.focus();
    }
  }, [isSelected, isDisplayed]);

  return (
    <li
      tabIndex={0}
      role="option"
      ref={ref}
      aria-selected={isSelected}
      {...props}
    >
      {children} {isSelected && <Check width="20" height="20" />}
    </li>
  );
});
