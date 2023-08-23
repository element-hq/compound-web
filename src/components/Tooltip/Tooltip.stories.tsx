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

import { Tooltip as TooltipComponent } from "./Tooltip";
import { IconButton } from "../IconButton/IconButton";

import UserIcon from "@vector-im/compound-design-tokens/icons/user.svg";

export default {
  title: "Tooltip",
  component: TooltipComponent,
  argTypes: {},
  args: {},
} as Meta<typeof TooltipComponent>;

const Template: StoryFn<typeof TooltipComponent> = () => (
  <div
    style={{
      display: "flex",
      gap: "50px",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <TooltipComponent open={true} side="top" text="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="right" text="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="bottom" text="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="left" text="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
  </div>
);

export const Tooltip = Template.bind({});
Tooltip.args = {};
