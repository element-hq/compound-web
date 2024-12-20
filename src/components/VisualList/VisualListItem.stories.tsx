/*
 * Copyright 2024 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { VisualListItem as VisualListItemComponent } from "./VisualListItem";
import { Meta, StoryFn } from "@storybook/react";
import React, { ComponentProps } from "react";
import InfoIcon from "@vector-im/compound-design-tokens/assets/web/icons/info";

export default {
  title: "VisualList/VisualListItem",
  component: VisualListItemComponent,
  tags: ["autodocs"],
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
};
