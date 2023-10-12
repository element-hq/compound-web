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

import UserIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";

export default {
  title: "Tooltip",
  component: TooltipComponent,
  argTypes: {},
  args: {},
} as Meta<typeof TooltipComponent>;

const TemplateSide: StoryFn<typeof TooltipComponent> = () => (
  <div
    style={{
      display: "flex",
      gap: "50px",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <TooltipComponent open={true} side="top" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="right" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="bottom" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent open={true} side="left" label="@bob:example.org">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
  </div>
);

export const Side = TemplateSide.bind({});
Side.args = {};

const TemplateAlign: StoryFn<typeof TooltipComponent> = () => (
  <div
    style={{
      display: "flex",
      gap: "50px",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <TooltipComponent open={true} align="center" label="Copy" sublabel="⌘ + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent
      open={true}
      align="start"
      label="@bob:example.org"
      sublabel="⌘ + C"
    >
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent
      open={true}
      align="end"
      label="@bob:example.org"
      sublabel="⌘ + C"
    >
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
  </div>
);

export const Align = TemplateAlign.bind({});
Align.args = {};
