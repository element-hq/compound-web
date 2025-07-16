/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type HTMLProps } from "react";
import styles from "./UnreadCounter.module.css";

interface UnreadCounterProps extends HTMLProps<HTMLDivElement> {
  /**
   * The number to display.
   * If `null`, the counter will be empty.
   */
  count: string | number | null;
}

export function UnreadCounter({ count, ...props }: UnreadCounterProps) {
  if (count === null)
    return <div {...props} className={styles["unread-counter"]} />;

  return (
    <span {...props} className={styles["unread-counter"]}>
      {count}
    </span>
  );
}
