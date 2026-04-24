/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useState, type ComponentProps } from "react";
import { type Meta, type StoryFn } from "@storybook/react-vite";

import { Switch } from "./Switch";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { fn } from "storybook/test";
import * as icons from "@vector-im/compound-design-tokens/assets/web/icons";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["lg", "md"],
      control: { type: "inline-radio" },
    },
    leftIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
    rightIcon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
  },
  args: {
    name: "controls",
    value: "list",
    leftIcon: icons.ListBulletedIcon,
    leftLabel: "List",
    leftValue: "list",
    rightIcon: icons.GridIcon,
    rightLabel: "Grid",
    rightValue: "grid",
    onChange: fn(),
    size: "lg",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=12554-2698&t=G1RVhzCxMki0lMZs-4",
    },
    controls: {
      exclude: ["leftValue", "rightValue", "onChange", "name", "className"],
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <form>
          <Story />
        </form>
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

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};
