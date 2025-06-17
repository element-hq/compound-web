/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react";

import { SettingsToggleInput } from "./SettingsToggle";
import { Form } from "@radix-ui/react-form";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";
import React from "react";

const meta = {
  title: "Form/Controls/SettingsToggle",
  component: SettingsToggleInput,
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Form>
          <Story />
        </Form>
      </TooltipProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {},
  args: {
    label: "Setting name",
    helpMessage: "This is some help text to explain what this setting does.",
  },
} satisfies Meta<typeof SettingsToggleInput>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: {
    defaultChecked: false,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874",
    },
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=97-15874",
    },
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    disabledMessage: "This feature isn't available to you right now.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574",
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    disabledMessage: "This feature cannot be disabled.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/qTWRfItpO3RdCjnTKPu4mL/Settings?node-id=149-38574",
    },
  },
};