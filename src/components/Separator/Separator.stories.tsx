/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react";

import { Separator as SeparatorComponent } from "./Separator";

const meta = {
  title: "Separator",
  component: SeparatorComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SeparatorComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { kind: "primary" } };

export const Secondary: Story = { args: { kind: "secondary" } };

export const Section: Story = { args: { kind: "section" } };
