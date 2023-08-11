/*
Copyright 2023  New Vector Ltd

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

import React, { forwardRef, PropsWithChildren } from "react";
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
