/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { HTMLProps } from "react";
import styles from "./UnreadCounter.module.css";

interface UnreadCounterProps extends HTMLProps<HTMLSpanElement> {
  count: string | number;
}

export function UnreadCounter({ count, ...props }: UnreadCounterProps) {
  return (
    <span {...props} className={styles["unread-counter"]}>
      {count}
    </span>
  );
}
