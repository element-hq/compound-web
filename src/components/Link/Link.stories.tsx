/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react";

import { Link as LinkComponent } from "./Link";

const meta = {
  title: "Link",
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    size: "medium",
    children: "Text link",
  },
} satisfies Meta<typeof LinkComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Round: Story = { args: {} };

export const Small: Story = { args: { size: "small" } };
