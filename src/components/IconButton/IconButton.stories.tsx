/*
Copyright 2023 New Vector Ltd

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

import { IconButton as IconButtonComponent } from "./IconButton";

import UserIcon from "@vector-im/compound-design-tokens/icons/user.svg";

export default {
  title: "IconButton",
  component: IconButtonComponent,
  argTypes: {},
  args: {},
} as Meta<typeof IconButtonComponent>;

const Template: StoryFn<typeof IconButtonComponent> = (args) => (
  <>
    <IconButtonComponent {...args} size="32px">
      <UserIcon />
    </IconButtonComponent>

    <IconButtonComponent {...args} size="48px">
      <UserIcon />
    </IconButtonComponent>

    <IconButtonComponent {...args} size="64px">
      <UserIcon />
    </IconButtonComponent>
  </>
);

export const Normal = Template.bind({});
Normal.args = {};

export const WithIndicator = Template.bind({});
WithIndicator.args = {
  indicator: "default",
};

export const WithHighlightIndicator = Template.bind({});
WithHighlightIndicator.args = {
  indicator: "highlight",
};
