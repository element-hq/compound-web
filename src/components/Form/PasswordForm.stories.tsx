/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta } from "@storybook/react";
import WarningIcon from "@vector-im/compound-design-tokens/assets/web/icons/warning";

import {
  Root,
  PasswordControl,
  Field,
  Label,
  HelpMessage,
  SuccessMessage,
} from "./";
import { Progress } from "../Progress/Progress";
import { TooltipProvider } from "../Tooltip/TooltipProvider";

const meta = {
  title: "Form/Password form",
  component: Root,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ maxWidth: "378px" }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Root>;
export default meta;

const getValueLabel = (value: number) => {
  switch (value) {
    case 1:
      return "Very weak password";
    case 2:
      return "Weak password";
    case 3:
      return "Strong password";
    case 4:
      return "Very strong password";
    default:
      return "Password strength";
  }
};

export const Empty = () => {
  return (
    <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl />
        <Progress getValueLabel={getValueLabel} size="sm" value={0} max={4} />
      </Field>
    </Root>
  );
};

export const VeryWeak: React.FC = () => {
  return (
    <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="password" />
        <Progress
          getValueLabel={getValueLabel}
          size="sm"
          tint="red"
          value={1}
          max={4}
        />
        <HelpMessage>
          <WarningIcon />
          Guess time: a few seconds. Try adding a few more words.
        </HelpMessage>
      </Field>
    </Root>
  );
};

export const Weak: React.FC = () => {
  return (
    <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="hunter2" />
        <Progress
          getValueLabel={getValueLabel}
          size="sm"
          tint="orange"
          value={2}
          max={4}
        />
        <HelpMessage>
          <WarningIcon />
          Guess time: a few days. Try adding a few more words.
        </HelpMessage>
      </Field>
    </Root>
  );
};

export const Strong: React.FC = () => {
  return (
    <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a strong password" />
        <Progress
          getValueLabel={getValueLabel}
          size="sm"
          tint="lime"
          value={3}
          max={4}
        />
        <SuccessMessage>Guess time: years</SuccessMessage>
      </Field>
    </Root>
  );
};

export const VeryStrong: React.FC = () => {
  return (
    <Root>
      <Field name="password">
        <Label>Password</Label>
        <PasswordControl defaultValue="this is a very strong password" />
        <Progress
          getValueLabel={getValueLabel}
          size="sm"
          tint="green"
          value={4}
          max={4}
        />
        <SuccessMessage>Guess time: centruries</SuccessMessage>
      </Field>
    </Root>
  );
};
