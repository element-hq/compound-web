/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";

import styles from "./IconButton.module.css";
import { UnstyledButton, type UnstyledButtonPropsFor } from "../UnstyledButton";
import { IndicatorIcon } from "../../Icon/IndicatorIcon/IndicatorIcon";
import { Tooltip } from "../../Tooltip/Tooltip";

type IconButtonProps = UnstyledButtonPropsFor<"button"> & {
  /**
   * The type of button.
   * @default "primary"
   */
  kind?: "primary" | "secondary";
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The size of the button in CSS units, e.g. `"24px"`.
   * Note that this is the size of the *button* itself: the icon will be 0.75 * this size
   * @default 32px
   */
  size?: CSSStyleDeclaration["height"];
  /**
   * The icon button indicator dot displayed on the top right
   * As in IndicatorIcon
   */
  indicator?: "default" | "success" | "critical";
  /**
   * Whether the button is interactable
   */
  disabled?: boolean;
  /**
   * Whether this button triggers a destructive action.
   * @default false
   */
  destructive?: boolean;
  /**
   * Optional tooltip for the button
   */
  tooltip?: string;
  /**
   * Hide the background when the button is not active or hovered.
   * @default false
   */
  noBackground?: boolean;
};

/**
 * Display an icon as a button. Can render an indicator
 */
export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IconButtonProps>
>(function IconButton(
  {
    kind = "primary",
    children,
    className,
    indicator,
    size = "32px",
    style,
    disabled,
    destructive,
    tooltip,
    noBackground = false,
    ...props
  },
  ref,
) {
  const classes = classnames(styles["icon-button"], className, {
    [styles.destructive]: destructive,
    [styles["no-background"]]: noBackground,
  });

  const button = (
    <UnstyledButton
      as="button"
      ref={ref}
      className={classes}
      style={
        {
          "--cpd-icon-button-size": size,
          ...style,
        } as React.CSSProperties
      }
      disabled={disabled}
      {...props}
      data-indicator={indicator}
      data-kind={kind}
    >
      <IndicatorIcon
        indicator={indicator}
        colour={disabled ? "var(--cpd-color-icon-disabled)" : undefined}
      >
        {React.Children.only(children)}
      </IndicatorIcon>
    </UnstyledButton>
  );

  return tooltip ? <Tooltip label={tooltip}>{button}</Tooltip> : button;
});
