/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";

import { IndicatorIcon as IndicatorIconComponent } from "./IndicatorIcon";

import ThreadIcon from "@vector-im/compound-design-tokens/assets/web/icons/threads";

const meta = {
  title: "Icon/IndicatorIcon",
  component: IndicatorIconComponent,
  tags: ["autodocs"],
  args: {
    size: "32px",
    children: <ThreadIcon />,
  },
} satisfies Meta<typeof IndicatorIconComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  render: (args) => (
    <>
      <IndicatorIconComponent {...args} size="32px">
        <ThreadIcon />
      </IndicatorIconComponent>

      <IndicatorIconComponent {...args} size="48px">
        <ThreadIcon />
      </IndicatorIconComponent>

      <IndicatorIconComponent {...args} size="64px">
        <ThreadIcon />
      </IndicatorIconComponent>

      <IndicatorIconComponent {...args} size="32px" indicator="default">
        <ThreadIcon />
      </IndicatorIconComponent>

      <IndicatorIconComponent {...args} size="48px" indicator="default">
        <ThreadIcon />
      </IndicatorIconComponent>

      <IndicatorIconComponent {...args} size="64px" indicator="default">
        <ThreadIcon />
      </IndicatorIconComponent>
    </>
  ),
};

export const Default: Story = { args: {} };

export const WithIndicator: Story = {
  args: {
    indicator: "default",
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
