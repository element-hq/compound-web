/*
Copyright 2023-2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import classnames from "classnames";
import * as RadixSeparator from "@radix-ui/react-separator";
import React, {
  ComponentProps,
  PropsWithoutRef,
  Ref,
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
      spacing
        ? style?.setProperty(SPACING_CUSTOM_PROP, spacing)
        : style?.removeProperty(SPACING_CUSTOM_PROP);
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
