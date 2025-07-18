/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
  type ComponentProps,
  type ComponentRef,
  forwardRef,
  type PropsWithChildren,
  useId,
} from "react";
import { ToggleInput } from "../Toggle";
import { Label } from "../../Label";
import { HelpMessage } from "../../Message";
import { InlineField } from "../../InlineField";
import React from "react";
import { Control } from "@radix-ui/react-form";

type SettingsToggleProps = {
  /**
   * The CSS class name for the containing field.
   */
  className?: string;
  /**
   * The field name.
   */
  name: string;
  label: string;
  /**
   * Optional help text to display below the setting.
   */
  helpMessage?: string;
  /**
   * Optional help text to display below the setting.
   */
  disabledMessage?: string;
} & Omit<ComponentProps<typeof ToggleInput>, "type">;

/**
 * A toggle component.
 */
export const SettingsToggleInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<SettingsToggleProps>
>(function Toggle(
  { className, label, helpMessage, disabledMessage, name, ...props },
  ref,
) {
  const generatedId = useId();
  const id = props.id ?? generatedId;
  const content = (
    <InlineField
      className={className}
      name={name}
      control={<ToggleInput id={id} ref={ref} {...props} />}
    >
      <Label htmlFor={id}>{label}</Label>
      {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
      {disabledMessage && props.disabled && (
        <HelpMessage>{disabledMessage}</HelpMessage>
      )}
    </InlineField>
  );
  return content;
});

/**
 * A styled checkbox input wrapped in a `Control` component, for use in Radix forms.
 */
export const SettingsToggleControl = forwardRef<
  ComponentRef<typeof SettingsToggleInput>,
  ComponentProps<typeof SettingsToggleInput>
>(function ToggleControl(props, ref) {
  return (
    <Control asChild>
      <SettingsToggleInput ref={ref} {...props} />
    </Control>
  );
});
