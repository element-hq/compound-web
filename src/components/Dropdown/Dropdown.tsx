/*
Copyright 2024 The Matrix.org Foundation C.I.C.
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

import ChevronDown from "@vector-im/compound-design-tokens/icons/chevron-down.svg";
import Check from "@vector-im/compound-design-tokens/icons/check.svg";
import Error from "@vector-im/compound-design-tokens/icons/error.svg";

import React, {
  Dispatch,
  forwardRef,
  HTMLProps,
  memo,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
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

    const hasPlaceholder = state.text === placeholder;
    const buttonClasses = classNames({
      [styles.placeholder]: hasPlaceholder,
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
          ref={ref}
          onClick={() => setOpen((_open) => !_open)}
          {...props}
        >
          {state.text}
          <ChevronDown width="24" height="24" />
        </button>
        {open && (
          <>
            <div className={styles.border} />
            <div className={styles.content}>
              <ul
                id={contentId}
                role="listbox"
                className={styles.content}
                onClick={() => setOpen(false)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" ||
                    e.key === " " ||
                    e.key === "Escape"
                  ) {
                    setOpen(false);
                  }
                }}
              >
                {values.map(([value, text]) => (
                  <DropdownItem
                    key={value}
                    isSelected={state.value === value}
                    onClick={() => {
                      setState({ value, text });
                      onValueChange?.(value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setState({ value, text });
                        onValueChange?.(value);
                      }
                    }}
                    {...props}
                  >
                    {text}
                  </DropdownItem>
                ))}
              </ul>
            </div>
          </>
        )}
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
   * The text to display in the dropdown item.
   */
  children: string;
};

/**
 * A dropdown item component.
 */
const DropdownItem = memo(
  forwardRef<HTMLLIElement, DropdownItemProps>(function MemoDropdownItem(
    // TODO
    // eslint-disable-next-line react/prop-types
    { children, isSelected, ...props }: DropdownItemProps,
    ref,
  ) {
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
  }),
);

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
