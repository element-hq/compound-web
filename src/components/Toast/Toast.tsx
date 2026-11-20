/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  forwardRef,
  type ComponentType,
  type MouseEventHandler,
  type PropsWithChildren,
  type Ref,
} from "react";
import styles from "./Toast.module.css";
import { Text } from "../Typography/Text";
import {
  CloseIcon,
  ChevronRightIcon,
} from "@vector-im/compound-design-tokens/assets/web/icons";
import { Tooltip } from "../Tooltip/Tooltip";

type CommonProps = {
  className?: string;
  /**
   * An icon to display within the toast.
   */
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
};

type ActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Handler called when the toast is clicked. If provided, the whole toast
   * becomes a button.
   *
   * Mutually exclusive with `onClose`: as the toast is itself a button, it
   * cannot contain a nested close button.
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
  onClose?: undefined;
  tooltip?: undefined;
  "aria-haspopup"?: false;
};

type NoticeProps = React.HTMLAttributes<HTMLDivElement> & {
  onClick?: undefined;
  "aria-haspopup"?: false;
} & (
    | { onClose?: undefined; tooltip?: undefined }
    | {
        /**
         * Handler called when the close button is clicked. If provided, a close
         * button is shown on the right side of the toast.
         *
         * Mutually exclusive with `onClick`.
         */
        onClose: MouseEventHandler<HTMLButtonElement>;
        /**
         * The tooltip to show on the 'close' button.
         */
        tooltip: string;
      }
  );

type TriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  "aria-haspopup": true | "menu" | "listbox" | "tree" | "grid" | "dialog";
  /**
   * The tooltip to show on the 'more info' button.
   */
  tooltip: string;
  onClose?: undefined;
};

type ToastProps = CommonProps & (ActionProps | NoticeProps | TriggerProps);

/**
 * A temporary message appearing on top of other content.
 *
 * The message may:
 * - display a notice with an optional close button (by setting `onClose` and `tooltip`)
 * - offer a possible action (by setting `onClick`), or
 * - act as a trigger for a popover (by setting `aria-haspopup` and `tooltip`).
 */
export const Toast = forwardRef<HTMLButtonElement | HTMLDivElement, ToastProps>(
  function Toast(
    {
      children,
      className,
      Icon,
      onClick,
      onClose,
      tooltip,
      "aria-haspopup": isPopoverTrigger,
      ...props
    }: PropsWithChildren<ToastProps>,
    ref,
  ) {
    const content = (
      <Text as="div" size="sm" weight="medium" className={styles.content}>
        {Icon && (
          <Icon
            className={styles.icon}
            width={20}
            height={20}
            aria-hidden={true}
          />
        )}
        {children}
      </Text>
    );

    // Action or trigger toast: the whole toast is a button.
    if (onClick || isPopoverTrigger) {
      return (
        <button
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
          ref={ref as Ref<HTMLButtonElement>}
          type="button"
          onClick={onClick}
          className={classnames(
            styles["toast-container"],
            styles.clickable,
            className,
          )}
          aria-haspopup={isPopoverTrigger}
        >
          {content}
          {/* For popover trigger toasts, we add a purely cosmetic 'More info' hint. */}
          {isPopoverTrigger && (
            <Tooltip label={tooltip} placement="top">
              <div className={styles.button}>
                <ChevronRightIcon width={20} height={20} aria-hidden />
              </div>
            </Tooltip>
          )}
        </button>
      );
    }

    // Notice toast: a non-interactive container with an optional close button.
    return (
      <div
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
        ref={ref as Ref<HTMLDivElement>}
        className={classnames(styles["toast-container"], className)}
      >
        {content}
        {onClose && (
          <Tooltip label={tooltip} placement="top">
            <button className={styles.button} onClick={onClose}>
              <CloseIcon width={20} height={20} aria-hidden />
            </button>
          </Tooltip>
        )}
      </div>
    );
  },
);
