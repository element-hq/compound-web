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
import { fn } from "@storybook/test";

import { IconButton as IconButtonComponent } from "./IconButton";

import UserIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";

export default {
  title: "Button/IconButton",
  component: IconButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    control: { type: "boolean" },
    onClick: { action: "onClick" },
  },
  args: {
    size: "32px",
    disabled: false,
    children: <UserIcon />,
    onClick: fn(),
  },
} as Meta<typeof IconButtonComponent>;

const Template: StoryFn<typeof IconButtonComponent> = (args) => (
  <>
    <IconButtonComponent {...args} size="32px">
      <UserIcon />
    </IconButtonComponent>

    <IconButtonComponent {...args} size="48px">
      <UserIcon />
    </IconButtonComponent>

    <IconButtonComponent {...args} size="64px">
      <UserIcon />
    </IconButtonComponent>
  </>
);

export const Demo = Template.bind({});

export const Default = { args: {} };
export const DefaultDisabled = {
  args: {
    disabled: true,
  },
};
export const WithIndicator = {
  args: {
    indicator: "default",
  },
};
export const WithIndicatorDisabled = {
  args: {
    indicator: "default",
    disabled: true,
  },
};
export const WithSuccessIndicator = {
  args: {
    indicator: "success",
  },
};
export const WithCriticalIndicator = {
  args: {
    indicator: "critical",
  },
};
export const WithSubtleBackground = {
  args: {
    subtleBackground: true,
  },
};

export const WithLabel = {
  args: {
    label: "label",
  },
};

export const Destructive = {
  args: {
    destructive: "true",
  },
};
