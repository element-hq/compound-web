/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  forwardRef,
  type ComponentRef,
  type ComponentProps,
  useId,
} from "react";
import styles from "./Action.module.css";
import { TextInput } from "../Text";

import { Control } from "@radix-ui/react-form";
import { Tooltip } from "../../../Tooltip/Tooltip";

type Props = {
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
} & React.ComponentProps<typeof TextInput>;

/**
 * A generic input with an action icon on the right hand side.
 * You should rarely use it directly,
 * but it is powering the likes of "copy to clipboard input", "password reveal", ...
 */
export const ActionInput = forwardRef<HTMLInputElement, Props>(
  function ActionControl(
    { Icon, className, actionLabel, onActionClick, ...props },
    ref,
  ) {
    const id = useId();
    const classes = classnames(styles.container, className);
    return (
      <div className={classes} id={id}>
        <TextInput ref={ref} {...props} className={styles.control} />

        <Tooltip label={actionLabel}>
          <button
            type="button"
            className={styles.action}
            onClick={onActionClick}
            aria-controls={id}
          >
            <Icon aria-hidden />
          </button>
        </Tooltip>
      </div>
    );
  },
);

/**
 * A styled text input wrapped in a `Control` component, for use in Radix forms.
 */
export const ActionControl = forwardRef<
  ComponentRef<typeof ActionInput>,
  ComponentProps<typeof ActionInput>
>(function ActionControl(props, ref) {
  return (
    <Control asChild>
      <ActionInput ref={ref} {...props} />
    </Control>
  );
});
