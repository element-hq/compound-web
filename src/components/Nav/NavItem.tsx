/*
Copyright 2023 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type MouseEventHandler,
  forwardRef,
} from "react";

import styles from "./Nav.module.css";

type NavItemProps = {
  active?: boolean;
  "aria-controls"?: string;
};

type NavItemLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "style" | "className"
> & {
  href: string;
} & NavItemProps;

type NavItemButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "style" | "className"
> & {
  onClick: MouseEventHandler<HTMLButtonElement>;
} & NavItemProps;

const NavItemLink = forwardRef(function NavItemLink(
  {
    children,
    href,
    onClick,
    ...rest
  }: React.PropsWithChildren<NavItemLinkProps>,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={styles["nav-item"]}
      {...rest}
      ref={ref}
    >
      {children}
    </a>
  );
});

const NavItemButton = forwardRef(function NavItemButton(
  {
    children,
    disabled,
    onClick,
    ...rest
  }: React.PropsWithChildren<NavItemButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      onClick={onClick}
      className={styles["nav-item"]}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

const renderAsLink = (
  props: React.PropsWithChildren<NavItemLinkProps | NavItemButtonProps>,
): props is React.PropsWithChildren<NavItemLinkProps> =>
  "href" in props && !!props.href;

/**
 * A navigation item component to be used with a navigation bar.
 * Will render an anchor when href is provided, otherwise a button element.
 */
export const NavItem = forwardRef(function NavItem(
  props: React.PropsWithChildren<NavItemLinkProps | NavItemButtonProps>,
  ref:
    | ForwardedRef<HTMLButtonElement | null>
    | ForwardedRef<HTMLAnchorElement | null>,
) {
  /**
   * For accessibility rules related to tabs,
   * see https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-ariaroles,states,andproperties
   *
   * For accessibility rules related to navigation,
   * see https://www.digitala11y.com/navigation-role/
   */
  const ariaControls = props["aria-controls"];
  const isUsedAsTabs = !!ariaControls;
  const a11yAttributes = isUsedAsTabs
    ? {
        // when used as tabs
        "aria-controls": ariaControls,
        role: "tab",
        "aria-selected": props.active,
      }
    : {
        // when used as navigation elements
        "aria-current": props.active ? true : undefined,
      };

  // All the attributes except `active` can be passed to the button/a element.
  const propsForChild = { ...props };
  delete propsForChild["active"];

  // Depending on whether `href` is in props, we render link/button
  let navItem: React.ReactNode;
  if (renderAsLink(propsForChild)) {
    const buttonRef = ref as ForwardedRef<HTMLAnchorElement | null>;
    navItem = (
      <NavItemLink {...propsForChild} {...a11yAttributes} ref={buttonRef} />
    );
  } else {
    const buttonRef = ref as ForwardedRef<HTMLButtonElement | null>;
    navItem = (
      <NavItemButton {...propsForChild} {...a11yAttributes} ref={buttonRef} />
    );
  }

  return (
    <li
      className={styles["nav-tab"]}
      data-current={props.active ? true : undefined}
      role="presentation"
    >
      {navItem}
    </li>
  );
});
