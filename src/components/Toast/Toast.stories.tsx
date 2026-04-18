/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import CheckIcon from "@vector-im/compound-design-tokens/assets/web/icons/check";

import { Toast as ToastComponent } from "./Toast";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { fn } from "storybook/test";

const meta = {
  title: "Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Would you like some toast?",
    onClose: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0",
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof ToastComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Icon: Story = {
  args: {
    Icon: CheckIcon,
  },
};

export const CloseAndIcon: Story = {
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
  },
};

export const Multiline: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    Icon: CheckIcon,
    children: "Would you like some toast on multiple multiple multiple lines?",
  },
};

export const MultilineAndClose: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
    children: "Would you like some toast on multiple multiple multiple lines?",
  },
};
