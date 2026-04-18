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
} from "react";
import styles from "./Toast.module.css";
import { Text } from "../Typography/Text";
import { IconButton } from "../Button";
import CloseIcon from "@vector-im/compound-design-tokens/assets/web/icons/close";

type ToastProps = {
  className?: string;
  /**
   * An icon to display within the button.
   */
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
  /**
   * Whether to show the action button. If true, an action button will be shown on the right side of the toast.
   */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The tooltip to show on the close button. This is only used if `onClose` is provided.
   */
  tooltip?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  {
    children,
    className,
    Icon,
    onClose,
    tooltip,
    ...props
  }: PropsWithChildren<ToastProps>,
  ref,
) {
  const hasCloseButton = Boolean(onClose);

  const classes = classnames(styles["toast-container"], className, {
    [styles["has-close"]]: hasCloseButton,
  });

  return (
    <Text
      {...props}
      as="div"
      size="sm"
      weight="medium"
      className={classes}
      ref={ref}
    >
      <div className={styles.content}>
        {Icon && (
          <Icon
            className={styles.icon}
            width={20}
            height={20}
            aria-hidden={true}
          />
        )}
        {children}
      </div>
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
    </Text>
  );
});
