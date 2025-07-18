/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type HTMLProps, type JSX } from "react";
import styles from "./Pill.module.css";

export function Pill({
  children,
  ...props
}: HTMLProps<HTMLSpanElement>): JSX.Element {
  return (
    <span {...props} className={styles.pill}>
      {children}
    </span>
  );
}
