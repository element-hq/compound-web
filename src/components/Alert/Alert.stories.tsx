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
import { Button } from "../Button/Button";

import { Alert as AlertComponent } from "./Alert";

export default {
  title: "Alert",
  component: AlertComponent,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["success", "critical", "info"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    title: "Title",
    children: "Description",
    onClose: () => {
      console.log("Clicked!");
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=795-7802&mode=design&t=g71gv6nZdJA7QSGB-0",
    },
  },
} as Meta<typeof AlertComponent>;

export const Success = {
  args: {
    type: "success",
  },
};

export const Critical = {
  args: {
    type: "critical",
  },
};

export const Info = {
  args: {
    type: "info",
  },
};

export const WithActions = {
  args: {
    type: "info",
    title:
      "Long title. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    children:
      "Actions are vertically centered against alert content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    actions: (
      <>
        <Button>Yes</Button>
        <Button>No</Button>
      </>
    ),
  },
};

export const WithoutClose = {
  ...Success,
  args: {
    ...Success.args,
    onClose: undefined,
  },
};
