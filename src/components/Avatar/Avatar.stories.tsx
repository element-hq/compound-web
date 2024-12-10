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
import { Meta, StoryObj } from "@storybook/react";

import { Avatar as AvatarComponent } from "./Avatar";

const meta = {
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
} satisfies Meta<typeof AvatarComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Round: Story = {
  args: {
    type: "round",
  },
};

export const Square: Story = {
  args: {
    type: "square",
  },
};

export const Button: Story = {
  args: {
    type: "round",
    onClick: () => console.log("clicked!"),
  },
};

export const NoImageFallback: Story = {
  args: {
    src: "",
  },
};

export const LargeNoImageFallback: Story = {
  args: {
    src: "",
    size: "128px",
  },
};

export const AllAvatars: Story = {
  args: {
    src: "",
    size: "36px",
  },
  render: (args: React.ComponentProps<typeof AvatarComponent>) => (
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
    </>
  ),
};
