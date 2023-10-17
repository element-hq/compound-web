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

import { AvatarStack as AvatarStackComponent } from "./AvatarStack";
import { Avatar } from "./Avatar";

export default {
  title: "Avatar/StackedAvatar",
  component: AvatarStackComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    size: "64px",
  },
} as Meta<typeof AvatarStackComponent>;

const Template: StoryFn<typeof AvatarStackComponent> = (args) => (
  <AvatarStackComponent {...args}>
    <Avatar
      name="Alice"
      id="@alice:example.org"
      size="200px"
      src="/images/__test__/kitten.jpg"
    />
    <Avatar
      name="Bob"
      id="@bob:example.org"
      size="200px"
      src="/images/__test__/kitten2.jpg"
    />
  </AvatarStackComponent>
);

export const AvatarStack = Template.bind({});
AvatarStack.args = {};
