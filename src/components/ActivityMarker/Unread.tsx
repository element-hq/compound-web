/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type HTMLProps } from "react";
import styles from "./Unread.module.css";

export function Unread(props: HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={styles.unread}>
      <div />
    </div>
  );
}
