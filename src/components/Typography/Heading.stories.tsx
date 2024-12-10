/*
Copyright 2023 The Matrix.org Foundation C.I.C.
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

import { Heading as HeadingComponent } from "./Heading";

const meta = {
  title: "Typography",
  component: HeadingComponent,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
    weight: {
      options: ["regular", "medium", "semibold"],
      control: { type: "inline-radio" },
    },
  },
} satisfies Meta<typeof HeadingComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog",
    size: "md",
    weight: "regular",
  },
};
