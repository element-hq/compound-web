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

import { Separator as SeparatorComponent } from "./Separator";

export default {
  title: "Separator",
  component: SeparatorComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof SeparatorComponent>;

export const Primary = { args: { kind: "primary" } };

export const Secondary = { args: { kind: "secondary" } };

export const Section = { args: { kind: "section" } };
