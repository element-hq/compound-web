/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { type ComponentProps, forwardRef, useId } from "react";
import styles from "./Search.module.css";
import { Field, Label } from "../Form";

import SearchIcon from "@vector-im/compound-design-tokens/assets/web/icons/search";

type SearchProps = {
  /**
   * The CSS class name
   */
  className?: string;
  /**
   * The input placeholder.
   * @default "Search…"
   */
  placeholder?: string;
  /**
   * The field name.
   */
  name: React.ComponentProps<typeof Field>["name"];
} & Omit<ComponentProps<"input">, "id" | "type">;

/**
 * A standalone search component
 */
export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  {
    className,
    onChange,
    // TODO: i18n needs to be setup
    placeholder = "Search…",
    name,
    ...props
  }: SearchProps,
  ref,
) {
  const classes = classnames(styles.search, className);
  const id = useId();
  return (
    <Field name={name} asChild>
      <Label className={classes} htmlFor={id}>
        <SearchIcon className={styles.icon} width={20} height={20} />
        <input
          ref={ref}
          {...props}
          id={id}
          name={name}
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          className={styles.input}
        />
      </Label>
    </Field>
  );
});
