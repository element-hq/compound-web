/*
Copyright 2022 The Matrix.org Foundation C.I.C.
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

import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEventHandler,
} from "react";
import type { XOR } from "ts-xor";

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

const NavItemLink = ({
  children,
  active = false,
  href,
  onClick,
  ...rest
}: React.PropsWithChildren<NavItemLinkProps>) => (
  <a
    href={href}
    onClick={onClick}
    className={styles["nav-item"]}
    aria-current={active ? "page" : undefined}
    {...rest}
  >
    {children}
  </a>
);

const NavItemButton = ({
  children,
  active = false,
  disabled,
  onClick,
  ...rest
}: React.PropsWithChildren<NavItemButtonProps>) => (
  <button
    onClick={onClick}
    className={styles["nav-item"]}
    aria-current={active ? true : undefined}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);

const renderAsLink = (
  props: React.PropsWithChildren<XOR<NavItemLinkProps, NavItemButtonProps>>,
): props is React.PropsWithChildren<NavItemLinkProps> => !!props.href;

/**
 * A navigation item component to be used with a navigation bar.
 * Will render an anchor when href is provided, otherwise a button element.
 */
export const NavItem = (
  props: React.PropsWithChildren<XOR<NavItemLinkProps, NavItemButtonProps>>,
) => {
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current
  const a11yAttributes = props["aria-controls"]
    ? {
        "aria-controls": props["aria-controls"],
        role: "tab",
        "aria-selected": props.active,
      }
    : {
        "data-current": props.active ? true : undefined,
      };
  return (
    <li className={styles["nav-tab"]} {...a11yAttributes}>
      {renderAsLink(props) ? (
        <NavItemLink {...props} />
      ) : (
        <NavItemButton {...props} />
      )}
    </li>
  );
};
