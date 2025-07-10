/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react-vite";

import { InlineSpinner as InlineSpinnerComponent } from "./InlineSpinner";

const meta = {
  title: "InlineSpinner",
  component: InlineSpinnerComponent,
  tags: ["autodocs"],
  argTypes: {
    size: {
      type: "number",
    },
  },
  args: {},
} satisfies Meta<typeof InlineSpinnerComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {},
};
