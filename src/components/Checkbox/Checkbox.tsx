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
import React, { PropsWithChildren } from "react";
import styles from "./Checkbox.module.css";
import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";

type CheckboxProps = {
  kind?: "primary" | "critical";
  className?: string;
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;

export const Checkbox: React.FC<PropsWithChildren<CheckboxProps>> = ({
  kind = "primary",
  className,
  onMouseDown,
  ...props
}) => {
  const classes = classnames(styles.checkbox, className);
  return (
    <div className={classes} data-kind={kind}>
      <input
        {...props}
        type="checkbox"
        onMouseDown={(e) => {
          // Prevents the `focus` event from being fired when clicked
          // but still reliably works when navigating via the keyboard
          e.preventDefault();
          onMouseDown?.(e);
        }}
      />
      <div className={styles["checkbox-ui"]}>
        <CheckIcon aria-hidden={true} className={styles["checkbox-check"]} />
      </div>
    </div>
  );
};
