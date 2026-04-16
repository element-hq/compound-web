/*
* Copyright (C) 2026 Element Creations Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type ComponentProps } from "react";
import { type Meta, type StoryFn } from "@storybook/react-vite";

import { ToggleButton } from "./ToggleButton";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { fn } from "storybook/test";
import {
  PlaySolidIcon,
  StopSolidIcon,
} from "@vector-im/compound-design-tokens/assets/web/icons";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    value: "play",
    left: {
      Icon: PlaySolidIcon,
      label: "Play",
      value: "play",
    },
    right: {
      Icon: StopSolidIcon,
      label: "Stop",
      value: "stop",
    },
    onChange: fn(),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/NKjLzSlbD8JnldYQ5sFpce/Element-Call-Updates---Q1-2025?node-id=358-65788&t=JAOxO4b7eVCo2u9Z-0",
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof ToggleButton>;
export default meta;

const Template: StoryFn<typeof ToggleButton> = (
  args: ComponentProps<typeof ToggleButton>,
) => {
  // Make it interactive
  const [value, setValue] = useState(args.value);
  return (
    <ToggleButton
      {...args}
      value={value}
      onChange={(v) => {
        setValue(v);
        args.onChange(v);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Smaller = Template.bind({});
Smaller.args = {
  size: "24px",
};
