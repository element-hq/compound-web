/*
Copyright 2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import { Meta, StoryFn } from "@storybook/react";

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

export const Destructive = Template.bind({});
Destructive.args = {
  destructive: true,
};

export const Success = Template.bind({});
Success.args = {
  success: true,
};
