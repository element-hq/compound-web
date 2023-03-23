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

import { StandaloneActionControl as StandaloneActionControl } from "./ActionControl";
import { Field, Root } from "../Form";
import ThreadIcon from "../Icon/icons/thread.svg";

export default {
  title: "ActionControl",
  component: StandaloneActionControl,
  argTypes: {},
  args: {
    Icon: ThreadIcon,
  },
} as Meta<typeof StandaloneActionControl>;

const Template: StoryFn<typeof StandaloneActionControl> = (args) => (
  <Root>
    <Field name="action">
      <StandaloneActionControl {...args} />
    </Field>
  </Root>
);

export const Round = Template.bind({});
Round.args = {};
