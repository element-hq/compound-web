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

import { Avatar as AvatarComponent } from "./Avatar";

export default {
  title: "Avatar",
  component: AvatarComponent,
  argTypes: {},
} as Meta<typeof AvatarComponent>;

const Template: StoryFn<typeof AvatarComponent> = (args) => (
  <>
    <AvatarComponent size="16px" name="Alice" id="@alice:example.org" />
    <AvatarComponent
      size="32px"
      name="Bob"
      id="@bob:example.org"
      src="https://placekitten.com/600/150"
    />
    <AvatarComponent size="64px" name="Charlie" id="@charlie:example.org" />
    <AvatarComponent
      size="128px"
      name="Dan"
      id="@dan:example.org"
      src="https://placekitten.com/200/300"
    />
    <AvatarComponent size="256px" name="Elena" id="@elena:example.org" />
  </>
);

export const Avatar = Template.bind({});
Avatar.args = {
  name: "Bob",
  id: "@bob:example.org",
};
