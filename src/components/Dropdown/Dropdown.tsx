/*
Copyright 2024 New Vector Ltd

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

import ChevronDown from "@vector-im/compound-design-tokens/assets/web/icons/chevron-down";
import Check from "@vector-im/compound-design-tokens/assets/web/icons/check";
import Error from "@vector-im/compound-design-tokens/assets/web/icons/error";

import React, {
  Dispatch,
  forwardRef,
  HTMLProps,
  memo,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";

import classNames from "classnames";

import styles from "./Dropdown.module.css";
import { useId } from "@floating-ui/react";

type DropdownProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The default value of the dropdown.
   */
  defaultValue?: string;
  /**
   * The values of the dropdown.
   * [value, text]
   */
  values: [string, string][];
  /**
   * The placeholder text.
   */
  placeholder: string;
  /**
   * The label to display at the top of the dropdown
   */
  label: string;
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
      defaultValue,
      values,
      ...props
    },
    ref,
  ) {
    const [state, setState] = useInitialState(
      values,
      placeholder,
      defaultValue,
    );
    const [open, setOpen, dropdownRef] = useOpen();
    const { listRef, onComboboxKeyDown, onOptionKeyDown } = useKeyboardShortcut(
      open,
      setOpen,
      setState,
    );

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
      // Focus the button when the value is set
      // Test if the value is undefined to avoid focusing on the first render
      if (state.value !== undefined) {
        buttonRef.current?.focus();
      }
    }, [state]);

    const hasPlaceholder = state.text === placeholder;
    const buttonClasses = classNames({
      [styles.placeholder]: hasPlaceholder,
    });
    const borderClasses = classNames(styles.border, {
      [styles.open]: open,
    });
    const contentClasses = classNames(styles.content, {
      [styles.open]: open,
    });

    /**
     * Ids for accessibility.
     */
    const labelId = useId();
    const contentId = useId();

    return (
      <div
        ref={dropdownRef}
        className={classNames(className, styles.container)}
        aria-invalid={Boolean(error)}
      >
        <label id={labelId}>{label}</label>
        <button
          className={buttonClasses}
          role="combobox"
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-controls={contentId}
          aria-expanded={open}
          ref={(element) => {
            // Private ref to focus the button
            buttonRef.current = element;
            // Handle forwarded ref
            if (typeof ref === "function") {
              ref(element);
            } else if (ref) {
              ref.current = element;
            }
          }}
          onClick={() => setOpen((_open) => !_open)}
          onKeyDown={onComboboxKeyDown}
          {...props}
        >
          {state.text}
          <ChevronDown width="24" height="24" />
        </button>
        <div className={borderClasses} />
        <div className={contentClasses}>
          <ul
            ref={listRef}
            id={contentId}
            role="listbox"
            className={styles.content}
          >
            {values.map(([value, text]) => (
              <DropdownItem
                key={value}
                isDisplayed={open}
                isSelected={state.value === value}
                onClick={() => {
                  setOpen(false);
                  setState({ value, text });
                  onValueChange?.(value);
                }}
                onKeyDown={(e) => onOptionKeyDown(e, value, text)}
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
      ref?.current?.focus();
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
  RefObject<HTMLDivElement>,
] {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
 * A hook to manage the initial state of the dropdown.
 * @param values - The values of the dropdown.
 * @param placeholder - The placeholder text.
 * @param defaultValue - The default value of the dropdown.
 */
function useInitialState(
  values: [string, string][],
  placeholder: string,
  defaultValue?: string,
) {
  return useState(() => {
    const defaultTuple = {
      value: undefined,
      text: placeholder,
    };
    if (!defaultValue) return defaultTuple;

    const foundTuple = values.find(([value]) => value === defaultValue);
    return foundTuple
      ? { value: foundTuple[0], text: foundTuple[1] }
      : defaultTuple;
  });
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
  setValue: ({ text, value }: { text: string; value: string }) => void,
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
    (evt: KeyboardEvent, value: string, text: string) => {
      const { key, altKey } = evt;
      evt.stopPropagation();
      evt.preventDefault();

      switch (key) {
        case "Enter":
        case " ": {
          setValue({ text, value });
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
            setValue({ text, value });
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
