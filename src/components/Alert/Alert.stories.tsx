/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { Button } from "../Button/Button";

import { Alert as AlertComponent } from "./Alert";

const meta = {
  title: "Alert",
  component: AlertComponent,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["success", "critical", "info"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    title: "Title",
    children: "Description",
    onClose: () => {
      console.log("Clicked!");
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0",
    },
  },
} satisfies Meta<typeof AlertComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
  },
};

export const Critical: Story = {
  args: {
    type: "critical",
  },
};

export const Info: Story = {
  args: {
    type: "info",
  },
};

export const WithActions: Story = {
  args: {
    type: "info",
    title:
      "Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children:
      "Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: (
      <>
        <Button>Yes</Button>
        <Button>No</Button>
      </>
    ),
  },
};

export const WithoutClose: Story = {
  ...Success,
  args: {
    ...Success.args,
    onClose: undefined,
  },
};
