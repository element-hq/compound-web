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

import React, { PropsWithChildren, forwardRef, ForwardedRef, Ref } from "react";

interface ButtonComponent {
  // With the explicit `as` prop
  <C extends React.ElementType>(
    props: { as: C } & UnstyledButtonPropsFor<C>,
  ): React.ReactElement;
  // Without the explicit `as` prop, defaulting to a <button>
  (props: UnstyledButtonPropsFor<"button">): React.ReactElement;
}

type UnstyledButtonProps = PropsWithChildren<{
  /**
   * Note that disabled attribute is not added to buttons, so that disabled buttons are discoverable by keyboard.
   * `aria-disabled` attribute is used to indicate button is disabled.
   * Event handlers are not passed to disabled buttons (onClick, onSubmit).
   */
  disabled?: boolean;
}>;

export type UnstyledButtonPropsFor<C extends React.ElementType> =
  UnstyledButtonProps &
    Omit<
      React.ComponentPropsWithoutRef<C>,
      keyof UnstyledButtonProps | "as"
    > & {
      ref?: React.Ref<React.ComponentRef<C>>;
    };

/**
 * Unstyled button component. Can be disabled and optionalally rendered as an anchor.
 * Intended to be wrapped with styles and exported as new button type - eg `IconButton` or `Button`.
 *
 * Not to be used externally.
 */
export const UnstyledButton = forwardRef(function UnstyledButton<
  C extends React.ElementType = "button",
>(
  {
    as,
    children,
    className,
    disabled,
    ...props
  }: UnstyledButtonPropsFor<C> & { as?: C },
  ref: ForwardedRef<C>,
): React.ReactElement {
  const Component = as || ("button" as const);

  const { onClick, onSubmit, ...restProps } = props;
  const eventHandlers = disabled
    ? {}
    : {
        onClick,
        onSubmit,
      };

  return (
    <Component
      {...restProps}
      ref={ref as Ref<C>}
      className={className}
      // All elements roles should be overriden at the exceptions of anchors
      // We want them to behave like links but look like buttons
      role={as === "a" ? "link" : "button"}
      tabIndex={0}
      {...eventHandlers}
      aria-disabled={disabled}
    >
      {children}
    </Component>
  );
}) as ButtonComponent;
