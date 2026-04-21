/*
Copyright (C) 2026 Element Creations Ltd
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

import React, {
  type ChangeEvent,
  type KeyboardEventHandler,
  type MouseEventHandler,
  useCallback,
  useId,
} from "react";
import { IconButton } from "../../index";
import classNames from "classnames";

import styles from "./ToggleButton.module.css";

type Icon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref" | "children"> &
    React.RefAttributes<SVGSVGElement>
>;

type Button<Value = string> = {
  Icon: Icon;
  value: Value;
  label: string;
};

interface Props<LeftValue extends string, RightValue extends string> {
  left: Button<LeftValue>;
  right: Button<RightValue>;
  value: LeftValue | RightValue;
  className?: string;
  onChange: (value: LeftValue | RightValue) => void;
  size?: "lg" | "md";
}

const iconButtonSizes: Record<
  NonNullable<Props<string, string>["size"]>,
  `${number}px`
> = {
  lg: "44px",
  md: "32px",
};

const iconButtonMargins: Record<
  NonNullable<Props<string, string>["size"]>,
  `${number}px`
> = {
  lg: "4px",
  md: "2px",
};

export const ToggleButton = <
  LeftValue extends string = string,
  RightValue extends string = string,
>({
  left,
  right,
  value,
  className,
  onChange,
  size = "lg",
}: Props<LeftValue, RightValue>): React.ReactElement => {
  const { Icon: LeftIcon, label: leftLabel, value: leftValue } = left;
  const { Icon: RightIcon, label: rightLabel, value: rightValue } = right;

  // Note, this doesn't use input="radio" simply because trying to jam
  // in some icon buttons atop the radio components involved a whole lot
  // of css hacks. This solution is simpler and uses aria roles to hopefully
  // render nicely for screen readers.
  return (
    <div
      className={classNames(styles.toggle, className)}
      data-size={size}
      onKeyUp={onKeyUp}
      role="radiogroup"
    >
      <IconButton
        className={styles.button}
        tooltip={leftLabel}
        role="radio"
        data-active={value === leftValue}
        aria-pressed={value === leftValue}
        onClick={() => onChange(leftValue)}
        size={iconButtonSizes[size]}
        margin={iconButtonMargins[size]}
      >
        <LeftIcon />
      </IconButton>
      <IconButton
        className={styles.button}
        tooltip={rightLabel}
        role="radio"
        data-active={value === rightValue}
        aria-pressed={value === rightValue}
        onClick={() => onChange(rightValue)}
        size={iconButtonSizes[size]}
        margin={iconButtonMargins[size]}
      >
        <RightIcon />
      </IconButton>
    </div>
  );
};
