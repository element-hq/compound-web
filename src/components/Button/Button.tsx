/*
Copyright 2023  New Vector Ltd

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

import classNames from "classnames";
import React, { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  kind?: "primary" | "secondary" | "destructive"; // TODO: Refine the naming
  size?: "sm" | "lg";
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const Button = <C extends React.ElementType = "button">({
  as,
  kind = "primary",
  size = "lg",
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps<C>>): JSX.Element => {
  const Component = as || "button";
  const classes = classNames(styles.button, className);

  return (
    <Component
      {...props}
      className={classes}
      data-kind={kind}
      data-size={size}
      // All elements roles should be overriden at the exceptions of anchors
      // We want them to behave like links but look like buttons
      role={as === "a" ? "link" : "button"}
      tabIndex={0}
    >
      {children}
    </Component>
  );
};
