/*
Copyright 2022 The Matrix.org Foundation C.I.C.
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

import { NavItem } from "./NavItem";
import { NavBar } from ".";
import { StoryFn } from "@storybook/react";

export default {
  title: "Nav/Nav Item",
  component: NavItem,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <NavBar aria-label="Testing">
        <Story />
      </NavBar>
    ),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0",
    },
  },
};

export const Default = {
  args: {
    children: "Sessions",
  },
};

export const Disabled = {
  args: {
    children: "Sessions",
    disabled: true,
  },
};

export const Link = {
  args: {
    children: "Sessions",
    href: "https://example.org",
  },
};

export const Active = {
  args: {
    children: "Sessions",
    active: true,
  },
};

export const ActiveLink = {
  args: {
    ...Link.args,
    active: true,
  },
};

export const ActiveDisabled = {
  args: {
    children: "Sessions",
    active: true,
    disabled: true,
  },
};
