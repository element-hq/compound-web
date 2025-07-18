/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type PropsWithChildren } from "react";
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
