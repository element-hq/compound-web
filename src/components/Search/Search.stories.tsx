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

import { Search as SearchComponent } from "./Search";
import { Form } from "@radix-ui/react-form";

export default {
  title: "Search",
  component: SearchComponent,
  argTypes: {},
  args: {},
} as Meta<typeof SearchComponent>;

const Template: StoryFn<typeof SearchComponent> = (args) => (
  <Form>
    <SearchComponent {...args} />
  </Form>
);

export const Search = Template.bind({});
Search.args = {};
