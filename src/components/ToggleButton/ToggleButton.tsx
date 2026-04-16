/*
Copyright (C) 2026 Element Creations Ltd
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

import React, {
  type ChangeEvent,
  type MouseEventHandler,
  useCallback,
  useId,
} from "react";
import { IconButton, Tooltip } from "../../index";
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
  size?: string;
}

export const ToggleButton = <
  LeftValue extends string = string,
  RightValue extends string = string,
>({
  left,
  right,
  value,
  className,
  onChange,
  size: requestedSize,
}: Props<LeftValue, RightValue>): React.ReactElement => {
  const size = requestedSize ?? "44px";

  const { Icon: LeftIcon, label: leftLabel, value: leftValue } = left;
  const { Icon: RightIcon, label: rightLabel, value: rightValue } = right;

  // Note, this doesn't use input="radio" simply because trying to jam
  // in some icon buttons atop the radio components involved a whole lot
  // of css hacks. This solution is simpler and uses aria roles to hopefully
  // render nicely for screen readers.
  return (
    <div className={classNames(styles.toggle, className)} role="radiogroup">
      <IconButton
        className={styles.button}
        tooltip={leftLabel}
        role="radio"
        data-active={value === leftValue}
        aria-pressed={value === leftValue}
        onClick={() => onChange(leftValue)}
        size={size}
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
        size={size}
      >
        <RightIcon />
      </IconButton>
    </div>
  );
};
