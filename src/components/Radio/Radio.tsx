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
import styles from "./Radio.module.css";

type RadioProps = {
  kind?: "primary" | "critical";
  className?: string;
} & React.ComponentPropsWithoutRef<"input">;

/**
 * Radio form control
 */
export const Radio = ({
  kind = "primary",
  className,
  ...props
}: PropsWithChildren<RadioProps>) => {
  const classes = classnames(styles.radio, className);
  return (
    <div className={classes} data-kind={kind}>
      <input {...props} type="radio" />
      <div className={styles["radio-ui"]} />
    </div>
  );
};
