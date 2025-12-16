/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type SVGAttributes, forwardRef } from "react";
import classNames from "classnames";
import styles from "./InlineSpinner.module.css";
import SpinnerIcon from "@vector-im/compound-design-tokens/assets/web/icons/spinner";

type InlineSpinnerProps = {
  size?: number;
} & SVGAttributes<SVGElement>;

export const InlineSpinner = forwardRef<SVGSVGElement, InlineSpinnerProps>(
  function InlineSpinner({ size = 20, className, ...props }, ref) {
    return (
      <SpinnerIcon
        ref={ref}
        className={classNames(styles.icon, className)}
        style={{ width: size, height: size }}
        {...props}
      />
    );
  },
);
