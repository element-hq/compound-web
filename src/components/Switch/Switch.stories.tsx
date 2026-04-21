/*
* Copyright (C) 2026 Element Creations Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type ComponentProps } from "react";
import { type Meta, type StoryFn } from "@storybook/react-vite";

import { Switch } from "./Switch";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { fn } from "storybook/test";
import {
  PlaySolidIcon,
  StopSolidIcon,
} from "@vector-im/compound-design-tokens/assets/web/icons";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["lg", "md"],
      control: { type: "inline-radio" },
    },
  },
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
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=12554-2698&t=G1RVhzCxMki0lMZs-4",
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Switch>;
export default meta;

const Template: StoryFn<typeof Switch> = (
  args: ComponentProps<typeof Switch>,
) => {
  // Make it interactive
  const [value, setValue] = useState(args.value);
  return (
    <Switch
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

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};
