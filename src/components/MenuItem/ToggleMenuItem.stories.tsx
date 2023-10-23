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
import ExtensionsIcon from "@vector-im/compound-design-tokens/icons/extensions.svg";
import ChatIcon from "@vector-im/compound-design-tokens/icons/chat.svg";

import { ToggleMenuItem as ToggleMenuItemComponent } from "./ToggleMenuItem";

export default {
  title: "ToggleMenuItem",
  component: ToggleMenuItemComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof ToggleMenuItemComponent>;

const Template: StoryFn<typeof ToggleMenuItemComponent> = (args) => (
  <div style={{ width: 300 }}>
    <ToggleMenuItemComponent {...args} Icon={ChatIcon} label="First item" />
    <ToggleMenuItemComponent
      {...args}
      Icon={ExtensionsIcon}
      label="Second item with a name that's quite long"
    />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
