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

import React, { PropsWithChildren, forwardRef } from "react";
import classnames from "classnames";

import styles from "./IconButton.module.css";
import { UnstyledButton } from "../UnstyledButton";
import { UnstyledButtonPropsFor } from "../UnstyledButton";
import { IndicatorIcon } from "../../Icon/IndicatorIcon/IndicatorIcon";
import { Tooltip } from "../../Tooltip/Tooltip";

type IconButtonProps = UnstyledButtonPropsFor<"button"> & {
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
  subtleBackground?: boolean;
  label?: string;
};

/**
 * Display an icon as a button. Can render an indicator
 */
export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IconButtonProps>
>(function IconButton(
  {
    children,
    className,
    indicator,
    size = "32px",
    style,
    disabled,
    destructive,
    tooltip,
    subtleBackground,
    ...props
  },
  ref,
) {
  const classes = classnames(styles["icon-button"], className, {
    [styles.destructive]: destructive,
    [styles["subtle-bg"]]: subtleBackground,
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
