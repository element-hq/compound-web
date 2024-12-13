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

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconButton as IconButtonComponent } from "./IconButton";

import UserIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import { TooltipProvider } from "../../Tooltip/TooltipProvider";

const meta = {
  title: "Button/IconButton",
  component: IconButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    disabled: { type: "boolean" },
    onClick: { action: "onClick" },
  },
  args: {
    size: "32px",
    disabled: false,
    children: <UserIcon />,
    onClick: fn(),
  },
} satisfies Meta<typeof IconButtonComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: (args: React.ComponentProps<typeof IconButtonComponent>) => (
    <>
      <IconButtonComponent {...args} size="32px">
        <UserIcon />
      </IconButtonComponent>

      <IconButtonComponent {...args} size="48px">
        <UserIcon />
      </IconButtonComponent>

      <IconButtonComponent {...args} size="64px">
        <UserIcon />
      </IconButtonComponent>
    </>
  ),
};

export const Default: Story = { args: {} };

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIndicator: Story = {
  args: {
    indicator: "default",
  },
};

export const WithIndicatorDisabled: Story = {
  args: {
    indicator: "default",
    disabled: true,
  },
};

export const WithSuccessIndicator: Story = {
  args: {
    indicator: "success",
  },
};

export const WithCriticalIndicator: Story = {
  args: {
    indicator: "critical",
  },
};

export const WithSubtleBackground: Story = {
  args: {
    subtleBackground: true,
  },
};

export const WithLabel: Story = {
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],

  args: {
    tooltip: "label",
  },
};

export const Destructive: Story = {
  args: {
    destructive: true,
  },
};
