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
import { UnstyledButton, UnstyledButtonPropsFor } from "./UnstyledButton";

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
  UnstyledButtonPropsFor<C>;

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
    disabled,
    ...props
  }: ButtonPropsFor<C> & { as?: C },
  ref: ForwardedRef<C>,
): React.ReactElement {
  const classes = classNames(styles.button, className, {
    [styles["has-icon"]]: Icon,
  });

  return (
    <UnstyledButton
      {...props}
      as={as || ("button" as const)}
      ref={ref as Ref<C>}
      className={classes}
      data-size={size}
      data-kind={kind}
      tabIndex={0}
      disabled={disabled}
    >
      {Icon && (
        <Icon
          width={20}
          height={20}
          className={styles.icon}
          aria-hidden={true}
        />
      )}
      {children}
    </UnstyledButton>
  );
}) as ButtonComponent;
