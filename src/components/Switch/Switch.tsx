/*
Copyright 2026 Element Creations Ltd.
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

import React, { type ChangeEvent, useCallback } from "react";
import { Tooltip } from "../../index";
import classNames from "classnames";

import styles from "./Switch.module.css";
import type { Size } from "../../utils/size";

type Icon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref" | "children"> &
    React.RefAttributes<SVGSVGElement>
>;

interface SwitchProps<LeftValue extends string, RightValue extends string> {
  name: string;
  leftIcon: Icon;
  leftLabel: string;
  leftValue: LeftValue;
  rightIcon: Icon;
  rightLabel: string;
  rightValue: RightValue;
  value: LeftValue | RightValue;
  onChange: (value: LeftValue | RightValue) => void;
  size?: Size & ("lg" | "md");
}

export const Switch = <
  LeftValue extends string = string,
  RightValue extends string = string,
>({
  name,
  leftIcon: LeftIcon,
  leftLabel,
  leftValue,
  rightIcon: RightIcon,
  rightLabel,
  rightValue,
  value,
  className,
  onChange,
  size = "lg",
  ...fieldSetProps
}: SwitchProps<LeftValue, RightValue> &
  Omit<
    React.HTMLAttributes<HTMLFieldSetElement>,
    "onChange"
  >): React.ReactElement => {
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value as LeftValue | RightValue),
    [onChange],
  );

  return (
    <fieldset
      data-size={size}
      className={classNames(styles.toggle, className)}
      {...fieldSetProps}
    >
      <Tooltip label={leftLabel}>
        <input
          type="radio"
          name={name}
          value={leftValue}
          checked={value === leftValue}
          onChange={onInputChange}
        />
      </Tooltip>
      <LeftIcon aria-hidden />
      <Tooltip label={rightLabel}>
        <input
          type="radio"
          name={name}
          value={rightValue}
          checked={value === rightValue}
          onChange={onInputChange}
        />
      </Tooltip>
      <RightIcon aria-hidden />
    </fieldset>
  );
};
