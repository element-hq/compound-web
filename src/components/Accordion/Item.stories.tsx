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

import { Text } from "../Typography/Text";
import { Root, Item } from "./Accordion";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default {
  title: "Accordion/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    trigger: (
      <Text as="span" size="md">
        Click me!
      </Text>
    ),
    children: <Text>{LOREM_IPSUM}</Text>,
    value: "item1",
  },
  decorators: [
    (Story: StoryFn) => (
      <Root collapsible>
        <Story />
      </Root>
    ),
  ],
} as Meta<typeof Item>;

export const Default = {
  args: {},
};

export const LongTrigger = {
  args: {
    trigger: (
      <Text as="span" size="md">
        Charles &quot;Charlie&quot; Brown is the principal character of the
        comic strip Peanuts, syndicated in daily and Sunday newspapers in
        numerous countries all over the world.
      </Text>
    ),
  },
};
