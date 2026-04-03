/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryFn } from "@storybook/react-vite";

import { BigIcon as BigIconComponent } from "./BigIcon";
import KeyIcon from "@vector-im/compound-design-tokens/assets/web/icons/key";

export default {
  title: "Icon/BigIcon",
  component: BigIconComponent,
  tags: ["autodocs"],
  args: {
    children: <KeyIcon />,
  },
} as Meta<typeof BigIconComponent>;

const Template: StoryFn<typeof BigIconComponent> = (args) => (
  <BigIconComponent {...args} />
);

export const Default = Template.bind({});
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Critical = Template.bind({});
Critical.args = {
  kind: "critical",
};

export const Success = Template.bind({});
Success.args = {
  kind: "success",
};
