/*
Copyright 2024 New Vector Ltd

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

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
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

export default {
  title: "Form/Password form",
  component: Root,
  tags: ["autodocs"],
  subcomponents: { Progress, PasswordControl, Label, Field },
  decorators: [
    (Story: StoryFn) => (
      <TooltipProvider>
        <div style={{ maxWidth: "378px" }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} as Meta<typeof Root>;

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

export const Empty: React.FC = () => {
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
