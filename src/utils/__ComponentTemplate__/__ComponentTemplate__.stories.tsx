/*
Copyright %YEAR% %COPYRIGHT_HOLDER%

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type Meta, type StoryObj } from "@storybook/react-vite";

import { __ComponentTemplate__ as __ComponentTemplate__Component } from "./__ComponentTemplate__";

const meta = {
  title: "__ComponentTemplate__",
  component: __ComponentTemplate__Component,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof __ComponentTemplate__Component>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {},
};
