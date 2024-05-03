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

import { Placement as PlacementType } from "@floating-ui/react";
import { Tooltip as TooltipComponent } from "./Tooltip";
import { IconButton } from "../Button";
import UserIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";
import { Meta, StoryFn } from "@storybook/react";
import React, { FC, ReactNode } from "react";

export default {
  title: "Tooltip",
  component: TooltipComponent,
  tags: ["autodocs"],
  controls: {
    include: ["placement", "open", "label", "caption", "isTriggerInteractive"],
  },
  argTypes: {
    placement: {
      control: "inline-radio",
      options: ["top", "right", "left", "bottom"],
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
    placement: "left",
    label: "@bob:example.org",
    // needed, to prevent the tooltip to be in controlled mode
    onOpenChange: undefined,
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

const TemplatePlacement: StoryFn<typeof TooltipComponent> = () => (
  <Layout>
    {(
      [
        "top",
        "top-start",
        "right",
        "right-end",
        "bottom",
        "bottom-end",
        "left",
        "left-start",
      ] as Array<PlacementType>
    ).map((placement) => (
      <TooltipComponent
        key={placement}
        open={true}
        placement={placement}
        label="@bob:example.org"
      >
        <IconButton>
          <UserIcon />
        </IconButton>
      </TooltipComponent>
    ))}
  </Layout>
);

export const Placement = TemplatePlacement.bind({});
Placement.args = {};

export const Default = {
  args: {
    // unset to test defaults
    placement: undefined,
  },
};

export const WithStringCaption = {
  args: {
    ...Default.args,
    label: "I can have a caption",
    caption: "My beautiful caption",
  },
};

export const WithComponentCaption = {
  args: {
    ...Default.args,
    label: "Copy",
    caption: (
      <div>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </div>
    ),
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
