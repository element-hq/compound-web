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
import styles from "./Toggle.module.css";

type ToggleProps = {
  className?: string;
  onMouseDown?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
} & React.ComponentPropsWithoutRef<"input">;

/**
 * Toggle form control
 */
export const Toggle = ({
  className,
  onMouseDown,
  ...props
}: PropsWithChildren<ToggleProps>) => {
  const classes = classnames(styles.toggle, className);
  return (
    <div className={classes}>
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
      <div className={styles["toggle-ui"]} />
    </div>
  );
};
