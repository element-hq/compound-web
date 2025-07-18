/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { MenuTitle as MenuTitleComponent } from "./MenuTitle";
import { type Meta, type StoryFn } from "@storybook/react-vite";
import React, { type ComponentProps } from "react";

export default {
  title: "Menu/MenuTitle",
  component: MenuTitleComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    title: "Title",
  },
} as Meta<typeof MenuTitleComponent>;

const Template: StoryFn<typeof MenuTitleComponent> = (
  args: ComponentProps<typeof MenuTitleComponent>,
) => {
  return <MenuTitleComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
