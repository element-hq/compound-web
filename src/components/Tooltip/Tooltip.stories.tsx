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

import React, { FC, ReactNode } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Tooltip as TooltipComponent } from "./Tooltip";
import { IconButton } from "../Button";

import UserIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";
import { TooltipProvider } from "./TooltipProvider";

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
      <TooltipProvider>
        <div style={{ padding: 100 }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} as Meta<typeof TooltipComponent>;

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: "50px",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {children}
  </div>
);

const TemplateSide: StoryFn<typeof TooltipComponent> = () => (
  <Layout>
    {(["top", "right", "bottom", "left"] as const).map((side) => (
      <TooltipComponent key={side} open side={side} label="@bob:example.org">
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>
    ))}
  </Layout>
);

export const Side = TemplateSide.bind({});
Side.args = {};

const TemplateAlign: StoryFn<typeof TooltipComponent> = () => (
  <Layout>
    <TooltipComponent open={true} align="center" label="Copy" caption="Ctrl + C">
      <IconButton>
        <UserIcon />
      </IconButton>
    </TooltipComponent>
    {(["start", "end"] as const).map((align) => (
      <TooltipComponent
        key={align}
        open
        align={align}
        label="@bob:example.org"
        caption="Ctrl + C"
      >
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>
    ))}
  </Layout>
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
    caption: "Ctrl + C",
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
    children: <span>No tooltip to see here</span>,
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
      <IconButton data-testid="testbutton" disabled>
        <UserIcon />
      </IconButton>
    ),
  },
};
