/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type PropsWithChildren,
  forwardRef,
  type ForwardedRef,
  type Ref,
} from "react";

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
   * Event handlers are not passed to disabled buttons (onClick, onSubmit, etc.)
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
 * Unstyled button component. Can be disabled and optionally rendered as an anchor.
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

  const {
    onClick,
    onSubmit,
    onPointerDown,
    onPointerUp,
    onKeyDown,
    onKeyUp,
    onKeyPress,
    ...restProps
  } = props;
  const eventHandlers = disabled
    ? {}
    : {
        onClick,
        onSubmit,
        onPointerDown,
        onPointerUp,
        onKeyDown,
        onKeyUp,
        onKeyPress,
      };

  return (
    <Component
      ref={ref as Ref<C>}
      className={className}
      // The elements roles should be set to button default, or link in the case of anchors.
      // This should be overridable by props, say for example if you want to use a button as an option within a listbox.
      // Hence it taking precedence over restProps.
      role={as === "a" ? "link" : "button"}
      tabIndex={0}
      aria-disabled={disabled}
      {...restProps}
      {...eventHandlers}
    >
      {children}
    </Component>
  );
}) as ButtonComponent;
