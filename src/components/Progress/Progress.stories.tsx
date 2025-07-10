/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react-vite";

import { Progress as ProgressComponent } from "./Progress";

function getValueLabel(value: number) {
  if (value === 0) {
    return "Empty progress bar";
  } else if (value <= 25) {
    return "Quarter-full progress bar";
  } else if (value <= 50) {
    return "Half-full progress bar";
  } else if (value <= 75) {
    return "Three-quarters full progress bar";
  } else {
    return "Full progress bar";
  }
}

const meta = {
  title: "Progress",
  component: ProgressComponent,
  tags: ["autodocs"],
  argTypes: {
    max: {
      type: "number",
    },
    value: {
      type: "number",
    },
  },
  args: {
    getValueLabel,
    size: "sm",
    max: 100,
    value: 50,
  },
} satisfies Meta<typeof ProgressComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LargeHalf: Story = {
  args: {
    tint: "green",
    size: "lg",
    value: 50,
  },
};

export const SmallHalf: Story = {
  args: {
    tint: "green",
    size: "sm",
    value: 50,
  },
};

export const LargeFull: Story = {
  args: {
    tint: "green",
    size: "lg",
    value: 100,
  },
};

export const SmallFull: Story = {
  args: {
    tint: "green",
    size: "sm",
    value: 100,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};

export const Red = {
  args: {
    value: 25,
    tint: "red",
  },
};

export const Orange = {
  args: {
    value: 50,
    tint: "orange",
  },
};

export const Lime = {
  args: {
    value: 75,
    tint: "lime",
  },
};

export const Green = {
  args: {
    value: 100,
    tint: "green",
  },
};
