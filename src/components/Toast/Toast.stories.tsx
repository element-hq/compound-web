/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type Meta, type StoryObj } from "@storybook/react-vite";

import { Toast as ToastComponent } from "./Toast";

const meta = {
  title: "Toast",
  component: ToastComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Would you like some toast?",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0",
    },
  },
} satisfies Meta<typeof ToastComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {},
};
