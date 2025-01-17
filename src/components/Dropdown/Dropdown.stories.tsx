/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/
import { Dropdown } from "./Dropdown";
import { fn } from "@storybook/test";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["defaultValue", "placeholder", "error"],
    },
  },
  argTypes: {
    label: {
      type: "string",
    },
    error: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
    values: {
      type: "string",
    },
  },
  args: {
    label: "Label",
    placeholder: "Select an option",
    onValueChange: fn(),
    values: [
      ["Option1", "Option 1"],
      ["Option2", "Option 2"],
      ["Option3", "Option 3"],
    ],
  },
} satisfies Meta<ComponentProps<typeof Dropdown>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithHelpLabel: Story = {
  args: {
    helpLabel: "Optional help text.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithError: Story = {
  args: {
    error: "Select an option",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "Option2",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};
