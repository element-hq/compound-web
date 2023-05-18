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

import React, { PropsWithChildren } from "react";
import { Message as RadixMessage } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";

type MessageProps = {
  className?: string;
} & React.ComponentProps<typeof RadixMessage>;

/**
 * Thin wrapper around Radix UI Message component
 * https://www.radix-ui.com/docs/primitives/components/form#message
 */
export function Message({
  children,
  ...props
}: PropsWithChildren<MessageProps>): React.JSX.Element {
  const classes = classNames(styles.message, props.className);
  return (
    <RadixMessage {...props} className={classes}>
      {/* Pending to be replaced by the alert component, see 
          https://github.com/vector-im/compound-web/pull/6 */}
      {children}
    </RadixMessage>
  );
}
