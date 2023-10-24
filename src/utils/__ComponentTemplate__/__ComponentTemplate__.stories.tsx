/*
Copyright %YEAR% %COPYRIGHT_HOLDER%

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

import { __ComponentTemplate__ as __ComponentTemplate__Component } from "./__ComponentTemplate__";

export default {
  title: "__ComponentTemplate__",
  component: __ComponentTemplate__Component,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof __ComponentTemplate__Component>;

export const Default = {
  args: {},
  parameters: {},
};
