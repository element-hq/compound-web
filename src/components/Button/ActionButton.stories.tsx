/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import * as icons from "@vector-im/compound-design-tokens/assets/web/icons";

import { Button as ButtonComponent } from "./Button";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipProvider } from "../Tooltip/TooltipProvider";

const Template: React.FC<
  { label: string; as: "button" | "a" } & React.ComponentProps<
    typeof ButtonComponent
  >
> = ({ label, ...args }) => (
  <TooltipProvider>
    <Tooltip label={label}>
      <ButtonComponent iconOnly {...args} />
    </Tooltip>
  </TooltipProvider>
);

const meta = {
  title: "Button/Actions",
  component: Template,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
    },
    kind: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "inline-radio" },
    },
    destructive: { type: "boolean" },
    disabled: {
      type: "boolean",
    },
    as: {
      options: ["a", "button"],
      control: { type: "inline-radio" },
    },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
    onClick: { action: "onClick" },
  },
  args: {
    label: "Action",
    size: "lg",
    as: "button",
    destructive: false,
    disabled: false,
    onClick: fn(),
  },
  parameters: {
    controls: {
      exclude: ["children"],
    },
  },
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Settings: Story = {
  args: {
    label: "Settings",
    kind: "secondary",
    Icon: icons.SettingsSolidIcon,
  },
};

export const ShareLink: Story = {
  args: {
    label: "Copy link",
    kind: "secondary",
    Icon: icons.LinkIcon,
  },
};

export const VideoOn: Story = {
  args: {
    label: "Turn video off",
    kind: "secondary",
    Icon: icons.VideoCallSolidIcon,
  },
};

export const VideoOff: Story = {
  args: {
    label: "Turn video on",
    kind: "primary",
    Icon: icons.VideoCallOffSolidIcon,
  },
};

export const MicOn: Story = {
  args: {
    label: "Turn mic off",
    kind: "secondary",
    Icon: icons.MicOnSolidIcon,
  },
};

export const MicOff: Story = {
  args: {
    label: "Turn mic on",
    kind: "primary",
    Icon: icons.MicOffSolidIcon,
  },
};

export const ShareScreen: Story = {
  args: {
    label: "Share screen",
    kind: "secondary",
    Icon: icons.ShareScreenSolidIcon,
  },
};

export const SharingScreen: Story = {
  args: {
    label: "Stop sharing screen",
    kind: "primary",
    Icon: icons.ShareScreenSolidIcon,
  },
};

export const Fullscreen: Story = {
  args: {
    label: "Full screen",
    kind: "secondary",
    Icon: icons.ExpandIcon,
  },
};

export const EndCall: Story = {
  args: {
    label: "End call",
    kind: "primary",
    destructive: true,
    Icon: icons.EndCallIcon,
  },
};

export const Invite: Story = {
  args: {
    label: "Invite",
    kind: "primary",
    size: "sm",
    Icon: icons.UserAddIcon,
  },
};

export const Edit: Story = {
  args: {
    label: "Edit",
    kind: "primary",
    size: "sm",
    Icon: icons.EditIcon,
  },
};

export const Search: Story = {
  args: {
    label: "Search",
    kind: "secondary",
    size: "sm",
    Icon: icons.SearchIcon,
  },
};

export const Save: Story = {
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: icons.CheckIcon,
  },
};

export const SaveDisabled: Story = {
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: icons.CheckIcon,
    disabled: true,
  },
};

export const Cancel: Story = {
  args: {
    label: "Cancel",
    kind: "secondary",
    size: "sm",
    Icon: icons.CloseIcon,
  },
};

export const Close: Story = {
  args: {
    label: "Close",
    kind: "secondary",
    size: "sm",
    Icon: icons.CloseIcon,
  },
};
