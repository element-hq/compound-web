/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef } from "react";
import styles from "./TextButton.module.css";
import classNames from "classnames";
import type { Size } from "../../../utils/size";
import { UnstyledButton, type UnstyledButtonPropsFor } from "../UnstyledButton";

type TextButtonProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The color variant of the text button.
   * @default "primary"
   */
  kind?: "primary" | "critical";
  /**
   * The t-shirt size of the text button.
   * @default "md"
   */
  size?: Size & ("sm" | "md");
} & Omit<UnstyledButtonPropsFor<"button">, "ref">;

/**
 * A button that looks like a link.
 */
export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  function TextButton(
    { children, className, kind = "primary", size = "md", ...props },
    ref,
  ) {
    return (
      <UnstyledButton
        ref={ref}
        type="button"
        {...props}
        className={classNames(styles["text-button"], className)}
        data-kind={kind}
        data-size={size}
      >
        {children}
      </UnstyledButton>
    );
  },
);
