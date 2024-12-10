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

import { Link as LinkComponent } from "./Link";

const meta = {
  title: "Link",
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    size: "medium",
    children: "Text link",
  },
} satisfies Meta<typeof LinkComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Round: Story = { args: {} };

export const Small: Story = { args: { size: "small" } };
