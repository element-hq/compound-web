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

import { Radio as RadioComponent } from "./Radio";

export default {
  title: "Radio",
  component: RadioComponent,
  tags: ["autodocs"],
  args: {
    checked: false,
    disabled: false,
    kind: "primary",
  },
} as Meta<typeof RadioComponent>;

export const Primary = {};

export const Checked = {
  ...Primary,
  args: {
    checked: true,
  },
};

export const CheckedDisabled = {
  ...Checked,
  args: {
    ...Checked.args,
    disabled: true,
  },
};

export const Critical = {
  args: {
    kind: "critical",
  },
};

export const CriticalChecked = {
  ...Critical,
  args: {
    ...Critical.args,
    checked: true,
  },
};

export const CriticalCheckedDisabled = {
  ...CriticalChecked,
  args: {
    ...CriticalChecked.args,
    disabled: true,
  },
};
