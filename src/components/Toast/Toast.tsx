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
import { IconButton } from "../Button";
import CloseIcon from "@vector-im/compound-design-tokens/assets/web/icons/close";

type CommonProps = {
  className?: string;
  /**
   * An icon to display within the toast.
   */
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
};

/**
 * Props for the default, non-interactive toast. It renders as a `div` and can
 * optionally show a close button via `onClose`.
 */
type ClosableToastProps = CommonProps & {
  /**
   * Handler called when the close button is clicked. If provided, a close
   * button is shown on the right side of the toast.
   *
   * Mutually exclusive with `onClick`.
   */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The tooltip to show on the close button. This is only used if `onClose` is
   * provided.
   */
  tooltip?: string;
  onClick?: never;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onClick">;

/**
 * Props for a clickable toast. The whole toast renders as a `button` and
 * invokes `onClick` when activated.
 */
type ClickableToastProps = CommonProps & {
  /**
   * Handler called when the toast is clicked. If provided, the whole toast
   * becomes a button.
   *
   * Mutually exclusive with `onClose`: as the toast is itself a button, it
   * cannot contain a nested close button.
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
  onClose?: never;
  tooltip?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

/**
 * A toast is either non-interactive (and optionally dismissable via a close
 * button), or clickable as a whole — but never both.
 */
type ToastProps = ClosableToastProps | ClickableToastProps;

export const Toast = forwardRef<HTMLButtonElement | HTMLDivElement, ToastProps>(
  function Toast(
    {
      children,
      className,
      Icon,
      onClick,
      onClose,
      tooltip,
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

    // Clickable mode: the whole toast is a button. As interactive elements
    // cannot be nested, this mode cannot also offer a close button.
    if (onClick) {
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
        >
          {content}
        </button>
      );
    }

    // Default mode: a non-interactive container, optionally dismissable via a
    // close button.
    const hasCloseButton = Boolean(onClose);
    return (
      <div
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
        ref={ref as Ref<HTMLDivElement>}
        className={classnames(styles["toast-container"], className, {
          [styles["has-close"]]: hasCloseButton,
        })}
      >
        {content}
        {hasCloseButton && (
          <IconButton
            size="24px"
            kind="secondary"
            noBackground={true}
            tooltip={tooltip}
            tooltipPlacement="right"
            className={styles.close}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>
    );
  },
);
