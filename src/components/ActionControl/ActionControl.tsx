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
import React, { PropsWithChildren, useId, forwardRef } from "react";
import styles from "./ActionControl.module.css";

import { Control, Field, Root } from "../Form";

type ActionControlProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The React component to display on the right hand side of the icon.
   */
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  /**
   * On click callback for the icon on the right hand side
   */
  onActionClick: (e: React.MouseEvent) => void;
  /**
   * The name of the action to perform (e.g. "Copy to clipboard")
   */
  actionLabel: string;
  disabled?: boolean;
} & React.ComponentProps<typeof Control>;

/**
 * A generic input with an action icon on the right hand side.
 * You should rarely use it directly,
 * but it is powering the likes of "copy to clipboard input", "password reveal", ...
 */
export const ActionControl = forwardRef<
  HTMLInputElement,
  PropsWithChildren<ActionControlProps>
>(function ActionControl(
  { children, Icon, className, actionLabel, onActionClick, ...props },
  ref,
) {
  const id = useId();
  const classes = classnames(styles.actioncontrol, className);
  return (
    <div className={classes}>
      <Control
        ref={ref}
        {...props}
        className={styles.input}
        id={id}
        autoComplete="off"
        autoCorrect="off"
      >
        {children}
      </Control>
      <Icon
        width={24}
        height={24}
        onClick={onActionClick}
        className={styles.icon}
        aria-label={actionLabel}
        aria-controls={id}
        role="button"
      />
    </div>
  );
});

export const StandaloneActionControl = forwardRef<
  HTMLInputElement,
  PropsWithChildren<ActionControlProps>
>(function StandaloneActionControl(props, ref) {
  return (
    <Root>
      <Field name="action">
        <ActionControl ref={ref} {...props} />
      </Field>
    </Root>
  );
});
