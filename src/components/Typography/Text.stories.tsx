/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react";

import { Text as TextComponent } from "./Text";

const meta = {
  title: "Typography",
  component: TextComponent,
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: { type: "inline-radio" },
    },
    weight: {
      options: ["regular", "medium", "semibold"],
      control: { type: "inline-radio" },
    },
    children: {
      type: "string",
    },
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "md",
    weight: "regular",
  },
} satisfies Meta<typeof TextComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};
export const Ligatures: Story = {
  args: {
    children: "-> 1x2x3",
  },
};
