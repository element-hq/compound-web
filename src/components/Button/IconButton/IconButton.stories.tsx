/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
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
    kind: {
      type: "string",
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
  args: {
    size: "32px",
    disabled: false,
    children: <UserIcon />,
    onClick: fn(),
    kind: "primary",
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

export const WithSecondaryKind: Story = {
  args: {
    kind: "secondary",
  },
};

export const WithSecondaryKindAndNoBackground: Story = {
  args: {
    kind: "secondary",
    noBackground: true,
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
