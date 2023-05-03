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

import { Alert as AlertComponent } from "./Alert";

export default {
  title: "Alert",
  component: AlertComponent,
  argTypes: {
    type: {
      options: ["success", "critical", "info"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    onClose: () => {
      console.log("Clicked!");
    },
  },
} as Meta<typeof AlertComponent>;

const Template: StoryFn<typeof AlertComponent> = (args) => (
  <AlertComponent {...args} title="Title">
    Description
  </AlertComponent>
);

export const Success = Template.bind({});
Success.args = {
  type: "success",
};

export const Critical = Template.bind({});
Critical.args = {
  type: "critical",
};

export const Info = Template.bind({});
Info.args = {
  type: "info",
};
