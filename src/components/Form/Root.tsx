/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, type PropsWithChildren } from "react";
import { Root as RadixRoot } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";

type RootProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof RadixRoot>;

/**
 * Thin wrapper around Radix UI Root component
 * https://www.radix-ui.com/docs/primitives/components/form#root
 */
export const Root = forwardRef<HTMLFormElement, PropsWithChildren<RootProps>>(
  function Root({ children, ...props }, ref) {
    const classes = classNames(styles.root, props.className);
    return (
      <RadixRoot ref={ref} {...props} className={classes}>
        {children}
      </RadixRoot>
    );
  },
);
