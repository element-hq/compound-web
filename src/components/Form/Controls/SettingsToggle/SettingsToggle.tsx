/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
  ComponentProps,
  ComponentRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import { ToggleInput } from "../Toggle";
import { Label } from "../../Label";
import { HelpMessage } from "../../Message";
import { InlineField } from "../../InlineField";
import React from "react";
import { Control } from "@radix-ui/react-form";

type SettingsToggleProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  label?: string;
  helpMessage?: string;
  disabledMessage?: string;
} & Omit<ComponentProps<typeof ToggleInput>, "type">;

/**
 * A toggle component.
 */
export const SettingsToggleInput = forwardRef<
  HTMLInputElement,
  PropsWithChildren<SettingsToggleProps>
>(function Toggle(
  { className, label, helpMessage, disabledMessage, ...props },
  ref,
) {
  const content = (
    <InlineField
      className={className}
      name="foo"
      control={<ToggleInput ref={ref} {...props} />}
    >
      <Label>{label}</Label>
      {helpMessage && <HelpMessage>{helpMessage}</HelpMessage>}
      {disabledMessage && <HelpMessage>{disabledMessage}</HelpMessage>}
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
