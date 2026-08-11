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
  type RefObject,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  useMemo,
  useId,
} from "react";

import classNames from "classnames";

import styles from "./Dropdown.module.css";

/**
 * Props injected into the trigger render function.
 */
export type DropdownTriggerProps = {
  role?: "combobox";
  "aria-haspopup"?: "listbox";
  "aria-labelledby"?: string;
  "aria-controls"?: string;
  "aria-expanded"?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: KeyboardEvent<Element>) => void;
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
};

/**
 * A dropdown that lets the user select one of a set of values.
 * The type parameter `K` represents the set of values.
 */
export function Dropdown<K extends string | number = string>({
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
  ...props
}: DropdownProps<K>) {
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

  const triggerProps: DropdownTriggerProps = {
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-controls": contentId,
    "aria-expanded": open,
    onClick: () => setOpen((_open) => !_open),
    onKeyDown: onComboboxKeyDown,
  };

  if (label) triggerProps["aria-labelledby"] = labelId;

  return (
    <div
      ref={dropdownRef}
      className={classNames(className, styles.container)}
      aria-invalid={Boolean(error)}
    >
      {label && <label id={labelId}>{label}</label>}
      {trigger ? (
        trigger(triggerProps)
      ) : (
        <button
          className={buttonClasses}
          {...triggerProps}
          ref={combinedRef}
          {...props}
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
