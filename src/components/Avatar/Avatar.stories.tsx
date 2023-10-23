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

import { Avatar as AvatarComponent } from "./Avatar";

export default {
  title: "Avatar",
  component: AvatarComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "Bob",
    size: "64px",
    id: "@bob:example.org",
    src: "/images/__test__/kitten.jpg",
    type: "round",
  },
} as Meta<typeof AvatarComponent>;

const Template: StoryFn<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
);

export const Round = Template.bind({});
Round.args = {
  type: "round",
};

export const Square = Template.bind({});
Square.args = {
  type: "square",
};

export const Button = Template.bind({});
Button.args = {
  type: "round",
  onClick: () => console.log("clicked!"),
};

export const NoImageFallback = Template.bind({});
NoImageFallback.args = {
  src: "",
};

export const LargeNoImageFallback = Template.bind({});
LargeNoImageFallback.args = {
  src: "",
  size: "128px",
};

const ImageLessCollection: StoryFn<typeof AvatarComponent> = (args) => (
  <>
    <AvatarComponent {...args} id="1" />
    &nbsp;
    <AvatarComponent {...args} id="2" />
    &nbsp;
    <AvatarComponent {...args} id="3" />
    &nbsp;
    <AvatarComponent {...args} id="4" />
    &nbsp;
    <AvatarComponent {...args} id="5" />
    &nbsp;
    <AvatarComponent {...args} id="6" />
    &nbsp;
    <AvatarComponent {...args} id="7" />
    &nbsp;
    <AvatarComponent {...args} id="8" />
    &nbsp;
  </>
);

export const AllAvatars = ImageLessCollection.bind({});
AllAvatars.args = {
  src: "",
  size: "36px",
};
