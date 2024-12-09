/*
Copyright 2024 New Vector Ltd

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

import React, { JSX, PropsWithChildren } from "react";
import styles from "./BigIcon.module.css";
import classNames from "classnames";

interface BigIconProps {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The size of the icon.
   * @default "large"
   */
  size?: "small" | "medium" | "large";
  /**
   * Whether this button triggers a destructive action.
   * @default false
   */
  destructive?: boolean;
  /**
   * Whether this button triggers a success action.
   * @default false
   */
  success?: boolean;
}

export function BigIcon({
  className,
  size = "large",
  destructive = false,
  success = false,
  children,
}: PropsWithChildren<BigIconProps>): JSX.Element {
  return (
    <div
      className={classNames(styles.content, className, {
        [styles.destructive]: destructive,
        [styles.success]: success,
      })}
      data-size={size}
    >
      {React.Children.only(children)}
    </div>
  );
}
