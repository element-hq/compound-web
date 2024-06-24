// Copyright 2023 The Matrix.org Foundation C.I.C.
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
import classNames from "classnames";

import styles from "./Nav.module.css";

type NavBarProps = {
  /**
   * The CSS class name
   */
  className?: string;

  /**
   * Require a label for navigation landmarks
   */
  "aria-label": string;

  /**
   * Accessibility role that defaults to navigation.
   *
   * If you pass tablist you must also pass `aria-controls` as prop to your NavItem and must
   * ensure that the conditions stated in https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#wai-ariaroles,states,andproperties
   * are met.
   */
  role?: "navigation" | "tablist";
};

/**
 * A navigation bar component
 */
export const NavBar = ({
  children,
  className,
  role,
  ...rest
}: React.PropsWithChildren<NavBarProps>) => {
  const classes = classNames(className, styles["nav-bar"]);
  return (
    <nav role={role ?? "navigation"} {...rest} className={classes}>
      <ul className={styles["nav-bar-items"]}>{children}</ul>
    </nav>
  );
};
