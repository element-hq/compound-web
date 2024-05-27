/*
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

import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import styles from "./DrawerMenu.module.css";
import { getPlatform } from "../../utils/platform";
import classNames from "classnames";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /**
   * The menu title.
   */
  title: string;
  /**
   * The menu contents.
   */
  children: ReactNode;
}

/**
 * A menu in a drawer, as commonly seen on mobile.
 */
// This an internal component not intended for export! Consumers should use it
// via the Menu or ContextMenu components.
export const DrawerMenu = forwardRef<HTMLDivElement, Props>(
  ({ title, children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames(className, styles.drawer)}
      aria-label={title}
      data-platform={getPlatform()}
      {...props}
      role="menu"
    >
      <div className={styles.body}>{children}</div>
    </div>
  ),
);

DrawerMenu.displayName = "DrawerMenu";
