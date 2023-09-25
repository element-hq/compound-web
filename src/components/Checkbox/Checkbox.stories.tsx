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

import { Checkbox as CheckboxComponent } from "./Checkbox";

export default {
  title: "Checkbox",
  component: CheckboxComponent,
  argTypes: {},
  args: {},
} as Meta<typeof CheckboxComponent>;

const Template: StoryFn<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {};

export const Critical = Template.bind({});
Critical.args = {
  kind: "critical",
};
Critical.parameters = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  checked: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  checked: true,
};
