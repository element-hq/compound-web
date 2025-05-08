/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { JSX, KeyboardEvent, useCallback, useRef, useState } from "react";
import { RadioMenuItemProps, RadioMenuItem } from "./RadioMenuItem";

interface Props {
  // We don't use children here as we need to do specific things to each child,
  // for which case react recommends this: https://react.dev/reference/react/Children#accepting-an-array-of-objects-as-a-prop
  // We just take the props and construct the elements ourselves so we can pass callbacks in

  /**
   * The items to display in the menu.
   */
  items: (Omit<RadioMenuItemProps, "onSelect" | "checked"> & {
    name: string;
  })[];
  /**
   * Which item is currently selected
   */
  selected: string;
  /**
   * Called with the 'name' of the newly selected item when the selected item changes
   */
  onChange: (item: string) => void;
  /**
   * Called when the menu should be closed.
   */
  onFinished: () => void;
}

function focusItem(group: HTMLFieldSetElement, n: number) {
  const el = group.querySelector(
    `[role="menuitemradio"]:nth-of-type(${n + 1})`,
  );
  if (el) (el as HTMLElement).focus();
}

/**
 * A group of RadioMenuItems in a menu that behave as a single radio control
 * (ie. others de-selected when one is selected).
 * This is its own component because ARIA standards require specific behaviour for
 * the menuitemradio role that is different to normal radio buttons (arrows move the
 * focus but do NOT change the selected item) and browsers don't have anything that
 * implements this behaviour, so we have to do it ourself.
 */
export const RadioMenuGroup = ({
  items,
  selected,
  onChange,
  onFinished,
}: Props): JSX.Element => {
  const fieldSetRef = useRef<HTMLFieldSetElement>(null);

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const radioItems = items.map((props, i) => (
    <RadioMenuItem
      key={props.name}
      onFocus={() => {
        setFocusedIndex(i);
      }}
      onBlur={() => {
        setFocusedIndex(null);
      }}
      onSelect={() => {
        onChange(props.name);
      }}
      onClick={() => {
        // Needed because clicking on an item should cause the mnenu to close
        // (but it should nnot close if selected by keyboard, depending on which key)
        onFinished();
      }}
      checked={selected === props.name}
      {...props}
    />
  ));

  const onKeyUp = useCallback(
    (e: KeyboardEvent<HTMLFieldSetElement>) => {
      if (focusedIndex === null || fieldSetRef.current === null) return;

      if (e.key === "ArrowUp") {
        e.stopPropagation();
        const newFocusedIndex =
          focusedIndex === 0 ? items.length - 1 : focusedIndex - 1;
        focusItem(fieldSetRef.current, newFocusedIndex);
      } else if (e.key === "ArrowDown") {
        e.stopPropagation();
        const newFocusedIndex =
          focusedIndex === items.length - 1 ? 0 : focusedIndex + 1;
        focusItem(fieldSetRef.current, newFocusedIndex);
      } else if (e.key === " " || e.key === "Enter") {
        e.stopPropagation();
        if (focusedIndex !== null) {
          if (items[focusedIndex].disabled) return;

          onChange(items[focusedIndex].name);
          if (e.key === "Enter") {
            onFinished();
          }
        }
      }
    },
    [focusedIndex],
  );

  return (
    <fieldset ref={fieldSetRef} onKeyUp={onKeyUp}>
      {radioItems}
    </fieldset>
  );
};
