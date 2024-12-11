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
import UserIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import React, { FC, ReactNode } from "react";
import { TooltipProvider } from "./TooltipProvider";

const meta = {
  title: "Tooltip",
  component: TooltipComponent,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "placement",
        "open",
        "label",
        "caption",
        "isTriggerInteractive",
      ],
    },
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
      control: "text",
    },
    description: {
      control: "text",
    },
    caption: {
      control: "text",
    },
  },
  args: {
    // needed, to prevent the tooltip to be in controlled mode
    onOpenChange: undefined,
    open: undefined,
    description: "",
    label: "",
    children: (
      <IconButton>
        <UserIcon />
      </IconButton>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof TooltipComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

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

const TemplatePlacement: StoryFn<typeof meta> = () => (
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

export const Default: Story = {
  args: {
    label: "@bob:example.org",
  },
};

export const WithStringCaption: Story = {
  args: {
    label: "I can have a caption",
    caption: "My beautiful caption",
  },
};

export const WithComponentCaption: Story = {
  args: {
    label: "Copy",
    caption: (
      <>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
      </>
    ),
  },
};

export const ForcedOpen: Story = {
  args: {
    open: true,
    label: "I'm always open",
  },
};

export const ForcedClose: Story = {
  args: {
    open: false,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>,
  },
};

export const ForcedDisabled: Story = {
  args: {
    disabled: true,
    description: "You can't see me",
    children: <span>No tooltip to see here</span>,
  },
};

export const InteractiveTrigger: Story = {
  args: {
    isTriggerInteractive: true,
    description: "Shown with delay",
    children: <a href="https://example.org">Link</a>,
  },
};

export const NonInteractiveTrigger: Story = {
  args: {
    isTriggerInteractive: false,
    description: "Shown without delay",
    children: <span>Just some text</span>,
  },
};

export const Descriptive: Story = {
  args: {
    open: true,
    description: "Employer Identification Number",
    children: <span>EIN</span>,
  },
};
