/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { ChatFilter as ChatFilterComponent } from "./ChatFilter";
import { Meta, StoryFn } from "@storybook/react";
import React, { ComponentProps } from "react";

export default {
  title: "ChatFilter",
  component: ChatFilterComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Filter",
  },
} as Meta<typeof ChatFilterComponent>;

const Template: StoryFn<typeof ChatFilterComponent> = (
  args: ComponentProps<typeof ChatFilterComponent>,
) => {
  return <ChatFilterComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
};
