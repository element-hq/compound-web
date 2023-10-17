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

import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof Checkbox>;

export const Primary: StoryObj = {
  args: {},
};

export const Critical: StoryObj = {
  args: {
    kind: "critical",
  },
};

export const Disabled: StoryObj = {
  args: {
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: StoryObj = {
  args: {
    disabled: true,
    checked: true,
  },
};
