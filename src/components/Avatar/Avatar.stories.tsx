/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
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
