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

import React, { SVGAttributes } from "react";
import styles from "./InlineSpinner.module.css";
import SpinnerIcon from "@vector-im/compound-design-tokens/assets/web/icons/spinner";

type InlineSpinnerProps = {
  size?: number;
} & SVGAttributes<SVGElement>;

export function InlineSpinner({ size = 20, ...props }: InlineSpinnerProps) {
  return (
    <SpinnerIcon
      className={styles.icon}
      style={{ width: size, height: size }}
      {...props}
    />
  );
}
