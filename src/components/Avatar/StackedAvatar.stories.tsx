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

import { StackedAvatars as StackedAvatarsComponent } from "./StackedAvatars";

export default {
  title: "StackedAvatar",
  component: StackedAvatarsComponent,
  argTypes: {},
  args: {
    size: "64px",
    avatars: [
      {
        name: "Alice",
        id: "@alice:example.org",
        src: "/images/__test__/kitten.jpg",
      },
      {
        name: "Bob",
        id: "@bob:example.org",
        src: "/images/__test__/kitten2.jpg",
      },
    ],
  },
} as Meta<typeof StackedAvatarsComponent>;

const Template: StoryFn<typeof StackedAvatarsComponent> = (args) => (
  <StackedAvatarsComponent {...args} />
);

export const StackedAvatars = Template.bind({});
StackedAvatars.args = {};
