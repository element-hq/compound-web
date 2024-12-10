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

import { Meta, StoryObj } from "@storybook/react";

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
