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
    label: "Example setting",
    helpMessage: "Optional help message",
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
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-249",
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
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-252",
    },
  },
};

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
    label: "Enable Threads 2.0",
    helpMessage: "This changes the way threads work in your client.",
    disabledMessage: "Sorry, your homeserver does not support this feature.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-261",
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-264",
    },
  },
};

export const ReadonlyUnchecked: Story = {
  args: {
    readOnly: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2457-26212",
    },
  },
};

export const ReadonlyChecked: Story = {
  args: {
    readOnly: true,
    defaultChecked: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2457-26215",
    },
  },
};

export const Focused: Story = {
  args: {
    autoFocus: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-267",
    },
  },
};
