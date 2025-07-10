/*
Copyright 2023 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { StoryObj, Meta } from "@storybook/react-vite";
import { fn } from "storybook/test";

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
