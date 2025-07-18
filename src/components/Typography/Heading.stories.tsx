/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type Meta, type StoryObj } from "@storybook/react-vite";

import { Heading as HeadingComponent } from "./Heading";

const meta = {
  title: "Typography",
  component: HeadingComponent,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
    weight: {
      options: ["regular", "medium", "semibold"],
      control: { type: "inline-radio" },
    },
  },
} satisfies Meta<typeof HeadingComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "md",
    weight: "regular",
  },
};
