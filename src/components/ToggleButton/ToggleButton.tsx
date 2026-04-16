/*
Copyright (C) 2026 Element Creations Ltd
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

import React, { type ChangeEvent, useCallback, useId } from "react";
import { Tooltip } from "../../index";
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
  size?: number;
}

export const ToggleButton = <
  LeftValue extends string = string,
  RightValue extends string = string,
>({
  left,
  right,
  value,
  className,
  onChange: propOnChange,
  size: requestedSize,
}: Props<LeftValue, RightValue>): React.ReactElement => {
  const id = useId();
  const size = requestedSize ?? 24;
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      propOnChange(e.target.value as LeftValue | RightValue);
    },
    [propOnChange],
  );

  const { Icon: LeftIcon, label: leftLabel, value: leftValue } = left;
  const { Icon: RightIcon, label: rightLabel, value: rightValue } = right;

  return (
    <div className={classNames(styles.toggle, className)}>
      <Tooltip label={leftLabel}>
        <input
          type="radio"
          name={id}
          aria-label={leftLabel}
          value={leftValue}
          checked={value === leftValue}
          onChange={onChange}
        />
      </Tooltip>
      <LeftIcon aria-hidden width={size} height={size} />
      <Tooltip label={rightLabel}>
        <input
          type="radio"
          aria-label={rightLabel}
          name={id}
          value={rightValue}
          checked={value === rightValue}
          onChange={onChange}
        />
      </Tooltip>
      <RightIcon aria-hidden width={size} height={size} />
    </div>
  );
};
