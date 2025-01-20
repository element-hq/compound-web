/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, useId } from "react";
import classNames from "classnames";

import styles from "./Progress.module.css";

import { Root, Indicator } from "@radix-ui/react-progress";

type ProgressProps = {
  /** The size variant of the progress bar */
  size: "sm" | "lg";

  /**
   * The colour variant to use for the progress bar indicator
   * If not set, the progress bar will be rendered with a gray tone, which should only be used when the progress bar is empty
   */
  tint?: "red" | "orange" | "lime" | "green";

  /** The CSS class name forwarded to the root element */
  className?: string;

  /** The value of the progress bar. Defaults to max if not provided */
  value?: number | null;

  /** The maximum value of the progress bar. Defaults to 1 if not provided */
  max?: number;

  /**
   * A function to get the text label to display in the progress bar.
   * If set, it will display a label on top of the progress bar
   */
  getValueLabel?: (value: number, max: number) => string;
} & Omit<React.ComponentProps<"div">, "children">;

/**
 * Displays an indicator showing the completion progress of a task, optionally with a label
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(
    {
      size,
      tint,
      className,
      value: valueProp,
      max: maxProp,
      getValueLabel,
      ...props
    },
    ref,
  ) {
    const max = maxProp ?? 1;
    const value = valueProp ?? max;
    const labelId = useId();
    const label = getValueLabel ? getValueLabel(value, max) : null;

    return (
      <div
        className={classNames(styles["progress-bar-container"], className)}
        data-tint={tint}
        {...props}
      >
        {label && (
          <div id={labelId} className={styles["progress-bar-label"]}>
            {label}
          </div>
        )}

        <Root
          className={styles["progress-bar"]}
          data-size={size}
          max={max}
          value={value}
          ref={ref}
          aria-labelledby={label ? labelId : undefined}
          getValueLabel={getValueLabel}
        >
          <Indicator
            className={styles["progress-bar-indicator"]}
            style={{
              transform: `translateX(-${100 - (value / max) * 100}%)`,
            }}
          />
        </Root>
      </div>
    );
  },
);
