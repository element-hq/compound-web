/*
Copyright 2023 New Vector Ltd

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
} from "react";
import styles from "./Separator.module.css";

type SeparatorProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The spacing on either side of the separator
   */
  spacing?: string;
} & ComponentProps<typeof RadixSeparator.Root>;

const SPACING_CUSTOM_PROP = "--cpd-separator-spacing";

/**
 * A separator component
 * Note: Only supports `React.RefObject`
 */
export const Separator = forwardRef(
  (
    {
      className,
      spacing = "var(--cpd-space-2x)",
      ...props
    }: PropsWithoutRef<SeparatorProps>,
    ref?: Ref<HTMLDivElement>,
  ) => {
    const classes = classnames(styles.separator, className);

    useEffect(() => {
      // Casting to `RefObject` as everything here should use this type.
      // Functions refs are not something we wish to support and string refs
      // are already unsupported with `forwardRef`.
      const style = (ref as React.RefObject<HTMLDivElement>)?.current?.style;
      if (spacing) {
        style?.setProperty(SPACING_CUSTOM_PROP, spacing);
      } else {
        style?.removeProperty(SPACING_CUSTOM_PROP);
      }
    }, [spacing]);

    return <RadixSeparator.Root {...props} className={classes} ref={ref} />;
  },
);

Separator.displayName = "Separator";
