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
import { Meta, StoryFn } from "@storybook/react";

import { Toggle as ToggleComponent } from "./Toggle";

export default {
  title: "Toggle",
  component: ToggleComponent,
  argTypes: {},
  args: {},
} as Meta<typeof ToggleComponent>;

const Template: StoryFn<typeof ToggleComponent> = (args) => (
  <ToggleComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&t=thoPRKw7ujYGFc8X-1",
  },
};
