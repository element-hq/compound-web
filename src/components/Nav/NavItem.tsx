// Copyright 2022 The Matrix.org Foundation C.I.C.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import type { XOR } from "ts-xor";

import styles from "./Nav.module.css";
import { Link } from "../Link/Link";

type NavItemProps = {
  active?: boolean;
};

type NavItemLinkProps = {
  href: string;
} & NavItemProps;

type NavItemButtonProps = {
  onClick: (e: React.MouseEvent) => void;
} & NavItemProps;

/**
 * A navigation item component to be used with a navigation bar
 */
export const NavItem = ({
  children,
  active = false,
  href,
  onClick,
}: React.PropsWithChildren<XOR<NavItemLinkProps, NavItemButtonProps>>) => {
  return (
    <li className={styles["nav-tab"]} data-current={active ? true : undefined}>
      <Link
        as={href ? "a" : "button"}
        href={href}
        onClick={onClick}
        className={styles["nav-item"]}
        aria-current={active ? "page" : undefined}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
