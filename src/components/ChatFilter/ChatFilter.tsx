/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type ForwardedRef, forwardRef } from "react";
import {
  UnstyledButton,
  type UnstyledButtonPropsFor,
} from "../Button/UnstyledButton";
import styles from "./ChatFilter.module.css";

type ChatFilterProps = Omit<UnstyledButtonPropsFor<"button">, "disabled"> & {
  /**
   * Whether the filter is selected.
   */
  selected?: boolean;
};

/**
 * A chat filter button.
 */
export const ChatFilter = forwardRef(function ChatFilter(
  { children, selected, ...props }: ChatFilterProps,
  ref: ForwardedRef<HTMLButtonElement>,
): React.ReactElement {
  return (
    <UnstyledButton
      {...props}
      className={styles["chat-filter"]}
      aria-selected={selected}
      as="button"
      ref={ref}
      tabIndex={0}
    >
      {children}
    </UnstyledButton>
  );
});
