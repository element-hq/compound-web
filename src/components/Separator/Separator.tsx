/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import * as RadixSeparator from "@radix-ui/react-separator";
import React, {
  type ComponentProps,
  type PropsWithoutRef,
  type Ref,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import styles from "./Separator.module.css";
import { useMergeRefs } from "@floating-ui/react";

type SeparatorProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The spacing on either side of the separator.
   * @default var(--cpd-space-2x)
   */
  spacing?: string;
  /**
   * The style of separator.
   * @default primary
   */
  kind?: "primary" | "secondary" | "section";
} & ComponentProps<typeof RadixSeparator.Root>;

const SPACING_CUSTOM_PROP = "--cpd-separator-spacing";

/**
 * A separator component.
 */
export const Separator = forwardRef(
  (
    {
      className,
      spacing, // Default provided via global.css
      kind = "primary",
      ...props
    }: PropsWithoutRef<SeparatorProps>,
    theirRef?: Ref<HTMLDivElement>,
  ) => {
    const classes = classnames(styles.separator, className);
    const ourRef = useRef<HTMLDivElement | null>(null);
    const ref = useMergeRefs([ourRef, theirRef]);

    useEffect(() => {
      const style = ourRef.current?.style;
      if (spacing) {
        style?.setProperty(SPACING_CUSTOM_PROP, spacing);
      } else {
        style?.removeProperty(SPACING_CUSTOM_PROP);
      }
    }, [spacing]);

    return (
      <RadixSeparator.Root
        {...props}
        className={classes}
        ref={ref}
        data-kind={kind}
      />
    );
  },
);

Separator.displayName = "Separator";
