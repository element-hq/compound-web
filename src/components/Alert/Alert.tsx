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
import React, { PropsWithChildren } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./Alert.module.css";

type AlertProps<C extends React.ElementType> = {
  as?: C;
  type: "success" | "critical" | "info";
  className?: string;
  onClose?: (e: React.MouseEvent) => void;
} & React.ComponentPropsWithoutRef<C>;

export const Alert = <C extends React.ElementType = "div">({
  as,
  type,
  children,
  className,
  onClose,
  ...props
}: PropsWithChildren<AlertProps<C>>): JSX.Element => {
  const Component = as || "div";
  const classes = classNames(styles.alert, className);

  return (
    <Component {...props} className={classes} data-type={type} tabIndex={0}>
      {/* TODO: Replace icon thread with the close icon */}
      <Icon icon="thread" size={40} />
      <div className={styles.content}>{children}</div>
      {/* TODO: Setup an i18n function for the aria label below */}
      {/* TODO: Replace icon thread with the close icon */}
      {onClose && (
        <Icon icon="thread" size={16} onClick={onClose} aria-label="Close" />
      )}
    </Component>
  );
};
