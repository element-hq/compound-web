/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";

import { Badge as BadgeComponent } from "./Badge";

const meta = {
  title: "Badge",
  component: BadgeComponent,
  argTypes: {},
  args: {},
  render: () => (
    <div>
      <div>
        <BadgeComponent kind="green">Trusted</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="red">Not trusted</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="grey">Public room</BadgeComponent>
      </div>
      <br />
      <div>
        <BadgeComponent kind="default">Default</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="grey">Grey</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="on-solid">On Solid</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="blue">Blue</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="green">Green</BadgeComponent>
        &nbsp;
        <BadgeComponent kind="red">Red</BadgeComponent>
      </div>
    </div>
  ),
} satisfies Meta<typeof BadgeComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Badge: Story = { args: {} };
