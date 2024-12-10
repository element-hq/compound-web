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
