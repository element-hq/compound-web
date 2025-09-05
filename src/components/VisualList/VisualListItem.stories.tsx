/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { VisualListItem as VisualListItemComponent } from "./VisualListItem";
import { type Meta, type StoryFn } from "@storybook/react-vite";
import React, { type ComponentProps } from "react";
import InfoIcon from "@vector-im/compound-design-tokens/assets/web/icons/info";

export default {
  title: "VisualList/VisualListItem",
  component: VisualListItemComponent,
  tags: ["autodocs", "axe-exclude"],
  argTypes: {},
  args: {
    Icon: InfoIcon,
    children: "List item description",
  },
} as Meta<typeof VisualListItemComponent>;

const Template: StoryFn<typeof VisualListItemComponent> = (
  args: ComponentProps<typeof VisualListItemComponent>,
) => {
  return <VisualListItemComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
  success: true,
};

export const Destructive = Template.bind({});
Destructive.args = {
  destructive: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  children:
    "List item with a looooooooooong very looooooooooong loooooooooooooong description",
  style: { alignItems: "start" },
};
