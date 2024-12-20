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

import classnames from "classnames";
import React, { ComponentProps, forwardRef, useId } from "react";
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
