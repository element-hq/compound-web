/*
Copyright (C) 2026 Element Creations Ltd
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

import React, { type ChangeEvent, useCallback } from "react";
import { Tooltip } from "../../index";
import classNames from "classnames";

import styles from "./Switch.module.css";

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

export const Switch = <
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
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value as LeftValue | RightValue),
    [onChange],
  );

  return (
    <form data-size={size} className={classNames(styles.toggle, className)}>
      <Tooltip label={left.label}>
        <input
          type="radio"
          name={left.value}
          value={left.value}
          checked={value === left.value}
          onChange={onInputChange}
        />
      </Tooltip>
      <left.Icon aria-hidden />
      <Tooltip label={right.label}>
        <input
          type="radio"
          name={right.value}
          value={right.value}
          checked={value === right.value}
          onChange={onInputChange}
        />
      </Tooltip>
      <right.Icon aria-hidden />
    </form>
  );
};
