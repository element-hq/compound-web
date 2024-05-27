/*
Copyright 2024 New Vector Ltd

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

import { IndicatorIcon as IndicatorIconComponent } from "./IndicatorIcon";

import ThreadIcon from "@vector-im/compound-design-tokens/icons/threads-solid.svg";

export default {
  title: "Icon/IndicatorIcon",
  component: IndicatorIconComponent,
  tags: ["autodocs"],
  argTypes: {
    control: { type: "boolean" },
    onClick: { action: "onClick" },
  },
  args: {
    size: "32px",
    disabled: false,
    children: <ThreadIcon />,
    onClick: fn(),
  },
} as Meta<typeof IndicatorIconComponent>;

const Template: StoryFn<typeof IndicatorIconComponent> = (args) => (
  <>
    <IndicatorIconComponent {...args} size="32px">
      <ThreadIcon />
    </IndicatorIconComponent>

    <IndicatorIconComponent {...args} size="48px">
      <ThreadIcon />
    </IndicatorIconComponent>

    <IndicatorIconComponent {...args} size="64px">
      <ThreadIcon />
    </IndicatorIconComponent>

    <IndicatorIconComponent {...args} size="32px" indicator="default">
      <ThreadIcon />
    </IndicatorIconComponent>

    <IndicatorIconComponent {...args} size="48px" indicator="default">
      <ThreadIcon />
    </IndicatorIconComponent>

    <IndicatorIconComponent {...args} size="64px" indicator="default">
      <ThreadIcon />
    </IndicatorIconComponent>
  </>
);

export const Demo = Template.bind({});

export const Default = { args: {} };
export const WithIndicator = {
  args: {
    indicator: "default",
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
