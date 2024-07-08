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

import { DropdownContext, useDropdownContext } from "./DropdownContext";

import React, {
  Dispatch,
  forwardRef,
  memo,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useEffect,
  useMemo,
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
 * A dropdown component.
 * Should be used with {@link DropdownItem} components.
 */
export const Dropdown = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<DropdownProps>
>(function Dropdown(props, ref) {
  const [state, setState] = useState({
    text: props.placeholder,
  });
  const newState = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <DropdownContext.Provider value={newState}>
      <DropdownContent {...props} ref={ref} />
    </DropdownContext.Provider>
  );
});

/**
 * The dropdown content.
 */
const DropdownContent = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<DropdownProps>
>(function Dropdown(
  {
    className,
    label,
    placeholder,
    helpLabel,
    onValueChange,
    error,
    children,
    ...props
  },
  ref,
) {
  const {
    state: { text, value },
  } = useDropdownContext();

  useEffect(() => {
    if (value) onValueChange?.(value);
  }, [value]);

  const [open, setOpen, listRef] = useOpen();

  const hasPlaceholder = text === placeholder;
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
      ref={listRef}
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
        {text}
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
                if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
                  setOpen(false);
                }
              }}
            >
              {children}
            </ul>
          </div>
        </>
      )}
      {!error && helpLabel && <span className={styles.help}>{helpLabel}</span>}
      {error && (
        <span className={styles.error}>
          <Error width="20" height="20" />
          {error}
        </span>
      )}
    </div>
  );
});

type DropdownItemProps = {
  /**
   * The value of the dropdown item.
   */
  value: string;
  /**
   * The text to display in the dropdown item.
   */
  children: string;
};

/**
 * A dropdown item component.
 * Should use under a {@link Dropdown} component.
 */
export const DropdownItem = memo(
  forwardRef<HTMLLIElement, DropdownItemProps>(function MemoDropdownItem(
    // TODO
    // eslint-disable-next-line react/prop-types
    { value, children, ...props }: DropdownItemProps,
    ref,
  ) {
    const {
      state: { value: currentValue },
      setState,
    } = useDropdownContext();

    const isSelected = currentValue === value;

    return (
      <li
        tabIndex={0}
        role="option"
        ref={ref}
        aria-selected={isSelected}
        onClick={() => setState({ value, text: children })}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setState({ value, text: children });
          }
        }}
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
