/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";

import { AvatarStack as AvatarStackComponent } from "./AvatarStack";
import { Avatar } from "./Avatar";

const meta = {
  title: "Avatar/StackedAvatar",
  component: AvatarStackComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: (
      <>
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
      </>
    ),
  },
} satisfies Meta<typeof AvatarStackComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarStack: Story = { args: {} };
