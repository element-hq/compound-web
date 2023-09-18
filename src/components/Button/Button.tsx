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
import React, {
  ComponentType,
  PropsWithChildren,
  forwardRef,
  ForwardedRef,
  Ref,
} from "react";
import styles from "./Button.module.css";

interface ButtonComponent {
  // With the explicit `as` prop
  <C extends React.ElementType>(
    props: { as: C } & ButtonPropsFor<C>,
  ): React.ReactElement;
  // Without the explicit `as` prop, defaulting to a <button>
  (props: ButtonPropsFor<"button">): React.ReactElement;
}

type ButtonOwnProps = PropsWithChildren<{
  /**
   * The type of button.
   */
  kind?: "primary" | "secondary" | "tertiary" | "destructive"; // TODO: Refine the naming
  /**
   * The t-shirt size of the button.
   */
  size?: "sm" | "lg";
  /**
   * An icon to display within the button.
   */
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
}>;

type ButtonPropsFor<C extends React.ElementType> = ButtonOwnProps &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as"> & {
    ref?: React.Ref<C>;
  };

/**
 * A button component that can be transformed into a link, but keep the button
 * styling using the `as` property.
 */
export const Button = forwardRef(function Button<
  C extends React.ElementType = "button",
>(
  {
    as,
    kind = "primary",
    size = "lg",
    children,
    className,
    Icon,
    ...props
  }: ButtonPropsFor<C> & { as?: C },
  ref: ForwardedRef<C>,
): React.ReactElement {
  const Component = as || ("button" as const);
  const classes = classNames(styles.button, className, {
    [styles["has-icon"]]: Icon,
  });
  const iconSize = size === "lg" ? 24 : 20;

  return (
    <Component
      {...props}
      ref={ref as Ref<C>}
      className={classes}
      data-kind={kind}
      data-size={size}
      // All elements roles should be overriden at the exceptions of anchors
      // We want them to behave like links but look like buttons
      role={as === "a" ? "link" : "button"}
      tabIndex={0}
    >
      {Icon && (
        <Icon
          width={iconSize}
          height={iconSize}
          className={styles.icon}
          aria-hidden={true}
        />
      )}
      {children}
    </Component>
  );
}) as ButtonComponent;
