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

import { Meta } from "@storybook/react";

import { Toggle as ToggleComponent } from "./Toggle";

export default {
  title: "Toggle",
  component: ToggleComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof ToggleComponent>;

export const Active = {
  args: {
    checked: false,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked = {
  args: {
    disabled: true,
    checked: true,
  },
};
