/*
Copyright 2022 The Matrix.org Foundation C.I.C.
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
import { StoryObj, Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { NavItem } from "./NavItem";
import { NavBar } from ".";

const meta = {
  title: "Nav/Nav Item",
  component: NavItem,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
    href: undefined,
  },
  decorators: [
    (Story) => (
      <NavBar aria-label="Testing">
        <Story />
      </NavBar>
    ),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0",
    },
  },
} satisfies Meta<typeof NavItem>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Sessions",
  },
};

export const Disabled: Story = {
  args: {
    children: "Sessions",
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    children: "Sessions",
    href: "https://example.org",
  },
};

export const Active: Story = {
  args: {
    children: "Sessions",
    active: true,
  },
};

export const ActiveLink: Story = {
  args: {
    ...Link.args,
    active: true,
  },
};

export const ActiveDisabled: Story = {
  args: {
    children: "Sessions",
    active: true,
    disabled: true,
  },
};
