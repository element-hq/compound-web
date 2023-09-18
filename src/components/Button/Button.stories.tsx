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

import { Button as ButtonComponent } from "./Button";
import VisibilityOnIcon from "@vector-im/compound-design-tokens/icons/visibility-on.svg";

type Props = {
  kind?: "primary" | "secondary" | "tertiary" | "destructive";
  size?: "sm" | "lg";
};

export default {
  title: "Button",
  component: ButtonComponent,
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    size: "sm",
  },
} as Meta<typeof ButtonComponent>;

const Template: StoryFn<typeof ButtonComponent> = ({ kind, size }: Props) => (
  <div style={{ display: "flex", gap: 8 }}>
    <ButtonComponent kind={kind} size={size}>
      Click me!
    </ButtonComponent>
    <ButtonComponent Icon={VisibilityOnIcon} kind={kind} size={size}>
      Click me!
    </ButtonComponent>
    <ButtonComponent as="a" href="#" kind={kind} size={size}>
      Click me!
    </ButtonComponent>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/HUysJAhv6cK6p1Pc81Fxaa/Matrix-Authentication-Service-(MAS)?node-id=101%3A16968&t=gc1qRwZLEob0m7OM-1",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/HUysJAhv6cK6p1Pc81Fxaa/Matrix-Authentication-Service-(MAS)?node-id=101%3A16968&t=gc1qRwZLEob0m7OM-1",
  },
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: "tertiary",
};

export const Destructive = Template.bind({});
Destructive.args = {
  kind: "destructive",
};

Destructive.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/HUysJAhv6cK6p1Pc81Fxaa/Matrix-Authentication-Service-(MAS)?node-id=101%3A16968&t=gc1qRwZLEob0m7OM-1",
  },
};
