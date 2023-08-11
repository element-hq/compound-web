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
import { Submit as RadixSubmit } from "@radix-ui/react-form";

import styles from "./form.module.css";
import classNames from "classnames";
import { Button } from "../Button/Button";

type SubmitProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The t-shirt size of the submit button.
   */
  size?: React.ComponentProps<typeof Button>["size"];
} & React.ComponentProps<typeof RadixSubmit>;

/**
 * Thin wrapper around Radix UI Submit component
 * https://www.radix-ui.com/docs/primitives/components/form#submit
 */
export const Submit: React.FC<PropsWithChildren<SubmitProps>> = ({
  children,
  size,
  ...props
}) => {
  const classes = classNames(styles.submit, props.className);
  return (
    <RadixSubmit {...props} asChild>
      <Button type="submit" size={size} className={classes}>
        {children}
      </Button>
    </RadixSubmit>
  );
};
