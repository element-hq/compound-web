/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import ChevronDown from "@vector-im/compound-design-tokens/assets/web/icons/chevron-down";
import Check from "@vector-im/compound-design-tokens/assets/web/icons/check";
import Error from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";

import React, {
  type Dispatch,
  forwardRef,
  type HTMLProps,
  memo,
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
  role: "combobox";
  "aria-haspopup": "listbox";
  "aria-labelledby"?: string;
  "aria-controls": string;
  "aria-expanded": boolean;
  onClick: () => void;
  onKeyDown: (e: KeyboardEvent<Element>) => void;
};

type DropdownProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The controlled value of the dropdown.
   */
  value?: string;
  /**
   * The default value of the dropdown, used when uncontrolled.
   */
  defaultValue?: string;
  /**
   * The values of the dropdown.
   * [value, text]
   */
  values: [string, string][];
  /**
   * The placeholder text.
   * Required because it's unusual not to set this unless making a custom dropdown with a custom trigger,
   * in which case you may explicitly pass null.
   */
  placeholder: string | null;
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
  onValueChange?: (value: string) => void;
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
};

/**
 * The dropdown content.
 */
export const Dropdown = forwardRef<HTMLButtonElement, DropdownProps>(
  function Dropdown(
    {
      className,
      label,
      placeholder,
      helpLabel,
      onValueChange,
      error,
      value: controlledValue,
      defaultValue,
      values,
      trigger,
      ...props
    },
    ref,
  ) {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const value = controlledValue ?? uncontrolledValue;
    const text = useMemo(
      () =>
        value === undefined
          ? placeholder
          : (values.find(([v]) => v === value)?.[1] ?? placeholder),
      [value, values, placeholder],
    );

    const setValue = useCallback(
      (value: string) => {
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
      if (value !== undefined) buttonRef.current?.focus();
    }, [value]);

    const hasPlaceholder = text === placeholder;
    const buttonClasses = classNames({
      [styles["trigger-button"]]: true,
      [styles.placeholder]: hasPlaceholder,
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
            {text}
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
            {values.map(([v, text]) => (
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
                {text}
              </DropdownItem>
            ))}
          </ul>
        </div>
        {!error && helpLabel && (
          <span className={styles.help}>{helpLabel}</span>
        )}
        {error && (
          <span className={styles.error}>
            <Error width="20" height="20" />
            {error}
          </span>
        )}
      </div>
    );
  },
);

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
   * The text to display in the dropdown item.
   */
  children: string;
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
      {children} {isSelected && <Check width="20" height="20" />}
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
function useKeyboardShortcut(
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setValue: (value: string) => void,
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
    (evt: KeyboardEvent, value: string) => {
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
