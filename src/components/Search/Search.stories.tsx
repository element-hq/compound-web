/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { Form } from "@radix-ui/react-form";

import { Search as SearchComponent } from "./Search";

const meta = {
  title: "Search",
  component: SearchComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    name: "search",
  },
  decorators: [
    (Story) => (
      <Form>
        <Story />
      </Form>
    ),
  ],
} satisfies Meta<typeof SearchComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = { args: {} };
