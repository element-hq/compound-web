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

type IconButtonProps = UnstyledButtonPropsFor<"button"> &
  JSX.IntrinsicElements["button"] & {
    /**
     * The CSS class name.
     */
    className?: string;
    /**
     * The avatar size in CSS units, e.g. `"24px"`.
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
  };

/**
 * Display an icon as a button. Can render an indicator
 */
export const IconButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<IconButtonProps>
>(function IconButton(
  { children, className, indicator, size = "32px", style, disabled, ...props },
  ref,
) {
  const classes = classnames(styles["icon-button"], className);
  return (
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
        size="100%"
        colour={disabled ? "var(--cpd-color-icon-disabled)" : undefined}
      >
        {React.Children.only(children)}
      </IndicatorIcon>
    </UnstyledButton>
  );
});
