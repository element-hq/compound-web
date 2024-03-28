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
import { Meta } from "@storybook/react";
import { Item } from "./Accordion";

import { Root as AccordionComponent } from "./Accordion";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default {
  title: "Accordion",
  component: AccordionComponent,
  tags: ["autodocs"],
  argTypes: {
    onValueChange: { action: "onValueChange" },
  },
  args: {
    collapsible: true,
    children: (
      <>
        <Item trigger="Item 1" value="item1">
          {LOREM_IPSUM}
        </Item>
        <Item trigger="Item 2" value="item2">
          {LOREM_IPSUM}
        </Item>
        <Item trigger="Item 3" value="item3">
          {LOREM_IPSUM}
        </Item>
      </>
    ),
  },
} as Meta<typeof AccordionComponent>;

export const Default = {
  args: {},
  parameters: {},
};

export const Single = {
  args: {
    type: "single",
  },
  parameters: {},
};

export const Multiple = {
  args: {
    type: "multiple",
  },
  parameters: {},
};

export const SingleControlled = {
  args: {
    value: "item1",
    type: "single",
  },
  parameters: {},
};

export const MultipleControlled = {
  args: {
    value: ["item1", "item2"],
    type: "multiple",
  },
  parameters: {},
};
