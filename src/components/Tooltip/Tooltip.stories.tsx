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
import { Text } from "../Typography/Text";

export default {
  title: "Tooltip",
  component: TooltipComponent,
  tags: ["autodocs"],
  controls: {
    include: [
      "side",
      "align",
      "open",
      "label",
      "caption",
      "isTriggerInteractive",
    ],
  },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["left", "right", "top", "bottom"],
    },
    align: {
      control: "inline-radio",
      options: ["center", "start", "end"],
    },
    open: {
      control: "boolean",
    },
    isTriggerInteractive: {
      control: "boolean",
    },
    label: {
      control: "string",
    },
    caption: {
      control: "string",
    },
  },
  args: {
    side: "left",
    align: "center",
    open: undefined,
    label: "@bob:example.org",
    caption: undefined,
    children: (
      <IconButton data-testid="testbutton">
        <UserIcon />
      </IconButton>
    ),
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
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
    <TooltipComponent open={true} align="center" label="Copy" caption="⌘ + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent
      open={true}
      align="start"
      label="@bob:example.org"
      caption="⌘ + C"
    >
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    <TooltipComponent
      open={true}
      align="end"
      label="@bob:example.org"
      caption="⌘ + C"
    >
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
  </div>
);

export const Align = TemplateAlign.bind({});
Align.args = {};

export const Default = {
  args: {
    // unset to test defaults
    side: undefined,
    align: undefined,
  },
};

export const WithCaption = {
  args: {
    ...Default.args,
    label: "Copy",
    caption: "⌘ + C",
  },
};

export const ForcedOpen = {
  args: {
    ...Default.args,
    open: true,
    label: "I'm always open",
  },
};

export const ForcedClose = {
  args: {
    ...Default.args,
    open: false,
    label: "You can't see me",
    children: <Text>No tooltip to see here</Text>,
  },
};

export const InteractiveTrigger = {
  args: {
    ...Default.args,
    isTriggerInteractive: true,
    label: "Shown with delay",
  },
};

export const NonInteractiveTrigger = {
  args: {
    ...Default.args,
    isTriggerInteractive: false,
    label: "Shown without delay",
    children: (
      <span>
        <IconButton data-testid="testbutton" disabled>
          <UserIcon />
        </IconButton>
      </span>
    ),
  },
};
