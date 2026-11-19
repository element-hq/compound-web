/*
 * Copyright 2024 New Vector Ltd.
 * Copyright 2026 Element Creations Ltd.
 *
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import ChevronDown from "@vector-im/compound-design-tokens/assets/web/icons/chevron-down";
import Check from "@vector-im/compound-design-tokens/assets/web/icons/check";
import Error from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";

import React, {
  type Dispatch,
  type HTMLProps,
  memo,
  type Ref,
  type RefCallback,
  type RefObject,
  type SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  useMemo,
  useId,
} from "react";

import classNames from "classnames";

import styles from "./Dropdown.module.css";
import {
  AnchoredMenu,
  type AnchoredMenuProps,
  type MenuAnchor,
} from "../Menu/AnchoredMenu";
import { MenuContext } from "../Menu/MenuContext";
import { MenuItem } from "../Menu/MenuItem";

// The arrow key, pressed on the trigger, that opens the menu on each side
const OPEN_KEY_FOR_SIDE: Record<string, string | undefined> = {
  right: "ArrowRight",
  left: "ArrowLeft",
  bottom: "ArrowDown",
  top: "ArrowUp",
};

/**
 * Props injected into the trigger render function.
 */
export type DropdownTriggerProps = {
  /**
   * Set in the "listbox" variant. Absent in the "menu" variant, where the
   * trigger keeps its own role (eg. button).
   */
  role?: "combobox";
  "aria-haspopup"?: "listbox" | "menu";
  "aria-labelledby"?: string;
  "aria-controls"?: string;
  "aria-expanded"?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<Element>) => void;
  /**
   * Set in the "menu" variant, where the trigger element is used to position
   * the menu when there is no parent menu or `anchor`.
   */
  ref?: RefCallback<HTMLElement>;
};

/**
 * Props only used by the "menu" variant of the dropdown.
 */
type DropdownMenuVariantProps = {
  /**
   * The accessible name of the menu. Defaults to `label` if set.
   */
  menuTitle?: string;
  /**
   * What the menu is positioned against. By default, inside a Menu, the menu
   * goes beside the parent menu, level with the trigger, as a submenu would.
   * Elsewhere, it goes beside the trigger.
   */
  anchor?: MenuAnchor;
  /**
   * The side of the anchor on which to place the menu.
   * @default right
   */
  side?: AnchoredMenuProps["side"];
  /**
   * The edge along which the menu and anchor are aligned.
   * @default start
   */
  align?: AnchoredMenuProps["align"];
  /**
   * Whether the rest of the page is inert while the menu is open.
   * @default true
   */
  modal?: boolean;
  /**
   * Event handler called when focus moves back out of the menu after it
   * closes. Call event.preventDefault to handle focus yourself, eg. if the
   * trigger is replaced once a value is selected.
   */
  onCloseAutoFocus?: (e: Event) => void;
};

type DropdownProps<K = string> = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The controlled value of the dropdown.
   */
  value?: K;
  /**
   * The default value of the dropdown, used when uncontrolled.
   */
  defaultValue?: K;
  /**
   * The values of the items presented in the dropdown, in order.
   * These are the values provided back to onValueChange and the values provided
   * to renderItem, if provided.
   */
  values: K[];
  /**
   * The label to display at the top of the dropdown
   * Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
   * in which case you may explicitly pass null.
   */
  label: string | null;
  /**
   * The help label to display at the bottom of the dropdown
   */
  helpLabel?: string;
  /**
   * Callback for when the value changes.
   * @param value
   */
  onValueChange?: (value: K) => void;
  /**
   * The error message to display.
   */
  error?: string;
  /**
   * The trigger element used to open the menu.
   * Receives the props to apply to the trigger.
   * Default: a button with the selected value or the placeholder text and a chevron down icon.
   */
  trigger?: (props: DropdownTriggerProps) => React.ReactNode;
  /**
   * A function render the node that represent a given item, given the value of that item.
   * To render the placeholder, null is passed.
   */
  renderItem: (value: K | null) => React.ReactNode;
  /**
   * A ref to the default trigger button.
   * Unused if a custom `trigger` is provided.
   */
  ref?: Ref<HTMLButtonElement>;
  /**
   * True to make the dropdown disabled and non-interactive.
   * Default: false.
   */
  disabled?: boolean;
  /**
   * How the values are presented.
   * - `"listbox"`: a list attached below the trigger, as in a form.
   * - `"menu"`: a floating menu of items positioned beside the parent
   *   menu (when inside a Menu) or the trigger, which only opens and closes on
   *   click or keyboard. Use this inside menus. In a menu shown as a drawer
   *   (on mobile), the items are shown in the drawer itself instead.
   * @default "listbox"
   */
  variant?: "listbox" | "menu";
} & DropdownMenuVariantProps;

/**
 * A dropdown that lets the user select one of a set of values.
 * The type parameter `K` represents the set of values.
 */
export function Dropdown<K extends string | number = string>({
  variant = "listbox",
  ...props
}: DropdownProps<K>) {
  if (variant === "menu") return <MenuDropdown<K> {...props} />;

  // Don't pass the menu variant's props on to the listbox's trigger button
  const listboxProps = { ...props };
  for (const key of MENU_VARIANT_PROP_NAMES) delete listboxProps[key];
  return <ListboxDropdown<K> {...listboxProps} />;
}

const MENU_VARIANT_PROP_NAMES = [
  "menuTitle",
  "anchor",
  "side",
  "align",
  "modal",
  "onCloseAutoFocus",
] as const satisfies (keyof DropdownMenuVariantProps)[];

function ListboxDropdown<K extends string | number>({
  className,
  label,
  helpLabel,
  onValueChange,
  error,
  value: controlledValue,
  defaultValue,
  values,
  renderItem,
  trigger,
  ref,
  disabled = false,
  ...props
}: Omit<DropdownProps<K>, "variant" | keyof DropdownMenuVariantProps>) {
  const [uncontrolledValue, setUncontrolledValue] = useState<K | undefined>(
    defaultValue,
  );
  const value = controlledValue ?? uncontrolledValue ?? null;
  const currentContent = useMemo(() => renderItem(value), [value, renderItem]);

  const setValue = useCallback(
    (value: K) => {
      setUncontrolledValue(value);
      onValueChange?.(value);
    },
    [setUncontrolledValue, onValueChange],
  );

  const [open, setOpen, dropdownRef] = useOpen();
  const { listRef, onComboboxKeyDown, onOptionKeyDown } = useKeyboardShortcut(
    open,
    setOpen,
    setValue,
  );

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    // Focus the button when the value is set
    // Test if the value is undefined to avoid focusing on the first render
    if (value !== null) buttonRef.current?.focus();
  }, [value]);

  const buttonClasses = classNames({
    [styles["trigger-button"]]: true,
    [styles.placeholder]: value === null,
    [styles["open-trigger"]]: open,
    [styles["disabled-trigger"]]: disabled,
  });
  const contentClasses = classNames(styles.content, {
    [styles.open]: open,
    [styles.seamless]: !trigger,
  });

  /**
   * Ids for accessibility.
   */
  const labelId = useId();
  const contentId = useId();

  const combinedRef = (element: HTMLButtonElement | null) => {
    buttonRef.current = element;
    if (typeof ref === "function") {
      ref(element);
    } else if (ref) {
      ref.current = element;
    }
  };

  const onClick = useCallback(() => {
    if (disabled) return;

    setOpen((_open) => !_open);
  }, [setOpen, disabled]);

  const triggerProps: DropdownTriggerProps = {
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-controls": contentId,
    "aria-expanded": open,
    onClick: onClick,
    onKeyDown: onComboboxKeyDown,
  };

  if (label) triggerProps["aria-labelledby"] = labelId;

  return (
    <div
      ref={dropdownRef}
      className={classNames(className, styles.container)}
      aria-invalid={Boolean(error)}
    >
      {label && (
        <label
          id={labelId}
          className={classNames({ [styles.disabled]: disabled })}
        >
          {label}
        </label>
      )}
      {trigger ? (
        trigger(triggerProps)
      ) : (
        <button
          className={buttonClasses}
          {...triggerProps}
          ref={combinedRef}
          {...props}
          disabled={disabled}
        >
          {currentContent}
          <ChevronDown className={styles.chevron} width="24" height="24" />
        </button>
      )}
      <div className={contentClasses}>
        <ul
          ref={listRef}
          id={contentId}
          role="listbox"
          className={styles.content}
        >
          {values.map((v) => (
            <DropdownItem
              key={v}
              isDisplayed={open}
              isSelected={value === v}
              onClick={() => {
                setOpen(false);
                setValue(v);
              }}
              onKeyDown={(e) => onOptionKeyDown(e, v)}
            >
              {renderItem(v)}
            </DropdownItem>
          ))}
        </ul>
      </div>
      {!error && helpLabel && <span className={styles.help}>{helpLabel}</span>}
      {error && (
        <span className={styles.error}>
          <Error width="20" height="20" />
          {error}
        </span>
      )}
    </div>
  );
}

function MenuDropdown<K extends string | number>({
  className,
  label,
  helpLabel,
  onValueChange,
  error,
  value: controlledValue,
  defaultValue,
  values,
  renderItem,
  trigger,
  ref,
  disabled = false,
  menuTitle,
  anchor: anchorProp,
  side = "right",
  align = "start",
  modal = true,
  onCloseAutoFocus,
  ...props
}: Omit<DropdownProps<K>, "variant">) {
  const [uncontrolledValue, setUncontrolledValue] = useState<K | undefined>(
    defaultValue,
  );
  const value = controlledValue ?? uncontrolledValue ?? null;
  const currentContent = useMemo(() => renderItem(value), [value, renderItem]);

  const setValue = useCallback(
    (value: K) => {
      setUncontrolledValue(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  const [open, setOpen] = useState(false);
  const parentContext = useContext(MenuContext);
  const labelId = useId();
  const contentId = useId();

  const triggerRef = useRef<HTMLElement | null>(null);
  const setTriggerRef = useCallback(
    (element: HTMLElement | null) => {
      triggerRef.current = element;
      if (typeof ref === "function") {
        ref(element as HTMLButtonElement | null);
      } else if (ref) {
        ref.current = element as HTMLButtonElement | null;
      }
    },
    [ref],
  );

  // Inside a menu, span the parent menu horizontally and the trigger
  // vertically, so the menu goes beside the parent menu level with the
  // trigger, like a submenu.
  const defaultAnchor = useCallback((): DOMRect => {
    const triggerRect =
      triggerRef.current?.getBoundingClientRect() ?? new DOMRect();
    const parentRect =
      parentContext?.contentRef?.current?.getBoundingClientRect();
    if (!parentRect) return triggerRect;
    return new DOMRect(
      parentRect.x,
      triggerRect.y,
      parentRect.width,
      triggerRect.height,
    );
  }, [parentContext]);
  const anchor = anchorProp ?? defaultAnchor;

  const onClick = useCallback(() => {
    if (disabled) return;
    setOpen((open) => !open);
  }, [disabled]);

  // Enter and Space are handled by the trigger being a button. The arrow key
  // pointing at the menu opens it too, as it would a submenu. Other arrow keys
  // are left to the parent menu's keyboard navigation.
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.key === OPEN_KEY_FOR_SIDE[side]) {
        e.preventDefault();
        setOpen(true);
      }
    },
    [disabled, side],
  );

  // Plain items, without radios: the current value isn't shown in the menu.
  // An option to use radio items could be added if needed.
  const items = values.map((v) => (
    <MenuItem
      key={v}
      label={renderItem(v)}
      onSelect={() => setValue(v)}
      hideChevron
    />
  ));

  // In a menu shown as a drawer, show the items in the drawer itself, as
  // SubMenu does.
  if (parentContext && parentContext.MenuItemWrapper == null) {
    return (
      <div role="group" aria-label={menuTitle ?? label ?? undefined}>
        {items}
      </div>
    );
  }

  const triggerProps: DropdownTriggerProps = {
    "aria-haspopup": "menu",
    "aria-controls": open ? contentId : undefined,
    "aria-expanded": open,
    onClick,
    onKeyDown,
    ref: setTriggerRef,
  };
  if (label) triggerProps["aria-labelledby"] = labelId;

  const buttonClasses = classNames({
    [styles["trigger-button"]]: true,
    [styles.placeholder]: value === null,
    [styles["open-trigger"]]: open,
    [styles["disabled-trigger"]]: disabled,
  });

  return (
    <div
      className={classNames(className, styles.container)}
      aria-invalid={Boolean(error)}
    >
      {label && (
        <label
          id={labelId}
          className={classNames({ [styles.disabled]: disabled })}
        >
          {label}
        </label>
      )}
      {trigger ? (
        trigger(triggerProps)
      ) : (
        <button
          type="button"
          className={buttonClasses}
          {...triggerProps}
          {...props}
          disabled={disabled}
        >
          {currentContent}
          <ChevronDown className={styles.chevron} width="24" height="24" />
        </button>
      )}
      <AnchoredMenu
        id={contentId}
        title={menuTitle ?? label ?? ""}
        showTitle={false}
        open={open}
        onOpenChange={setOpen}
        anchor={anchor}
        side={side}
        align={align}
        modal={modal}
        onCloseAutoFocus={onCloseAutoFocus}
      >
        {items}
      </AnchoredMenu>
      {!error && helpLabel && <span className={styles.help}>{helpLabel}</span>}
      {error && (
        <span className={styles.error}>
          <Error width="20" height="20" />
          {error}
        </span>
      )}
    </div>
  );
}

type DropdownItemProps = HTMLProps<HTMLLIElement> & {
  /**
   * Whether the dropdown item is selected.
   */
  isSelected: boolean;
  /**
   * Whether the dropdown item is displayed.
   */
  isDisplayed: boolean;
  /**
   * The content to display in the dropdown item.
   */
  children: React.ReactNode;
};

/**
 * A dropdown item component.
 */
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
      <span>{children}</span> {isSelected && <Check width="20" height="20" />}
    </li>
  );
});

/**
 * A hook to manage the open state of the dropdown.
 */
function useOpen(): [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  RefObject<HTMLDivElement | null>,
] {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // If the user clicks outside the dropdown, close it
  useEffect(() => {
    const closeIfOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", closeIfOutside);
    return () => document.removeEventListener("click", closeIfOutside);
  }, [setOpen]);

  return [open, setOpen, ref];
}

/**
 * A hook to manage the keyboard shortcuts of the dropdown.
 * @param open - the dropdown open state.
 * @param setOpen - the dropdown open state setter.
 * @param setValue - set the selected value and text
 */
function useKeyboardShortcut<K extends string | number>(
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setValue: (value: K) => void,
) {
  const listRef = useRef<HTMLUListElement>(null);
  const onComboboxKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      switch (key) {
        // Enter and Space already managed because it's a button
        case "Escape":
          setOpen(false);
          break;
        case "ArrowDown":
          setOpen(true);
          // If open, focus the first element
          if (open) {
            (listRef.current?.firstElementChild as HTMLElement)?.focus();
          }
          break;
        case "ArrowUp":
          setOpen(true);
          break;
        case "Home": {
          setOpen(true);
          // Wait for the dropdown to be opened
          Promise.resolve().then(() => {
            (listRef.current?.firstElementChild as HTMLElement)?.focus();
          });
          break;
        }
        case "End": {
          setOpen(true);
          // Wait for the dropdown to be opened
          Promise.resolve().then(() => {
            (listRef.current?.lastElementChild as HTMLElement)?.focus();
          });
          break;
        }
      }
    },
    [listRef, open, setOpen],
  );

  const onOptionKeyDown = useCallback(
    (evt: KeyboardEvent, value: K) => {
      const { key, altKey } = evt;
      evt.stopPropagation();
      evt.preventDefault();

      switch (key) {
        case "Enter":
        case " ": {
          setValue(value);
          setOpen(false);
          break;
        }
        case "Tab":
        case "Escape":
          setOpen(false);
          break;
        case "ArrowDown": {
          const currentFocus = document.activeElement;
          if (listRef.current?.contains(currentFocus) && currentFocus) {
            (currentFocus.nextElementSibling as HTMLElement)?.focus();
          }
          break;
        }
        case "ArrowUp": {
          if (altKey) {
            setValue(value);
            setOpen(false);
          } else {
            const currentFocus = document.activeElement;
            if (listRef.current?.contains(currentFocus) && currentFocus) {
              (currentFocus.previousElementSibling as HTMLElement)?.focus();
            }
          }
          break;
        }
        case "Home": {
          (listRef.current?.firstElementChild as HTMLElement)?.focus();
          break;
        }
        case "End": {
          (listRef.current?.lastElementChild as HTMLElement)?.focus();
          break;
        }
      }
    },
    [listRef, setValue, setOpen],
  );

  return { listRef, onComboboxKeyDown, onOptionKeyDown };
}
