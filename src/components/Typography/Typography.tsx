/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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

import React, { PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Typography.module.css";

type TypographyProps<C extends React.ElementType> = {
  /**
   * The HTML tag.
   * @default "p"
   */
  as?: C;
  /**
   * The type of content.
   */
  type?: "body" | "heading";
  /**
   * The font weight.
   */
  weight?: "regular" | "semibold" | "medium" | "bold";
  /**
   * The t-shirt size of the content.
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const Typography = <C extends React.ElementType = "p">({
  as,
  children,
  type = "body",
  weight = "regular",
  size = "md",
  className,
  ...restProps
}: PropsWithChildren<TypographyProps<C>>): React.ReactElement => {
  const Component = as || "p";

  return (
    <Component
      {...restProps}
      className={classNames(
        styles.typography,
        styles[`font-${type}-${size}-${weight}`],
        className,
      )}
    >
      {children}
    </Component>
  );
};
