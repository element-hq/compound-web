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

import classnames from "classnames";
import React, { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import styles from "./FloatingMenu.module.css";
import useId from "../../utils/useId";
import { Text } from "../Typography/Text";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /**
   * The menu title.
   */
  title: string;
  /**
   * The CSS class.
   */
  className?: string;
  /**
   * The menu contents.
   */
  children: ReactNode;
}

/**
 * A menu in a floating box, as commonly seen on desktop.
 */
// This an internal component not intended for export! Consumers should use it
// via the Menu or ContextMenu components.
export const FloatingMenu = forwardRef<HTMLDivElement, Props>(
  ({ title, className, children, ...props }, ref) => {
    const titleId = useId();
    return (
      <div
        role="menu"
        ref={ref}
        aria-labelledby={titleId}
        className={classnames(className, styles.menu)}
        {...props}
      >
        <Text
          as="h3"
          id={titleId}
          className={styles.title}
          size="sm"
          weight="semibold"
        >
          {title}
        </Text>
        {children}
      </div>
    );
  },
);

FloatingMenu.displayName = "FloatingMenu";
