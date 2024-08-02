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
import { fn } from "@storybook/test";

import * as icons from "@vector-im/compound-design-tokens/assets/web/icons";

import { Button as ButtonComponent } from "./Button";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipProvider } from "../Tooltip/TooltipProvider";

const Template: React.FC<
  { label: string } & React.ComponentProps<typeof ButtonComponent>
> = ({ label, ...args }) => (
  <TooltipProvider>
    <Tooltip label={label}>
      <ButtonComponent iconOnly {...args} />
    </Tooltip>
  </TooltipProvider>
);

export default {
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
  controls: {
    exclude: ["children"],
  },
} as Meta<typeof Template>;

export const Settings = {
  args: {
    label: "Settings",
    kind: "secondary",
    Icon: icons.SettingsSolidIcon,
  },
};

export const ShareLink = {
  args: {
    label: "Copy link",
    kind: "secondary",
    Icon: icons.LinkIcon,
  },
};

export const VideoOn = {
  args: {
    label: "Turn video off",
    kind: "secondary",
    Icon: icons.VideoCallSolidIcon,
  },
};

export const VideoOff = {
  args: {
    label: "Turn video on",
    kind: "primary",
    Icon: icons.VideoCallOffSolidIcon,
  },
};

export const MicOn = {
  args: {
    label: "Turn mic off",
    kind: "secondary",
    Icon: icons.MicOnSolidIcon,
  },
};

export const MicOff = {
  args: {
    label: "Turn mic on",
    kind: "primary",
    Icon: icons.MicOffSolidIcon,
  },
};

export const ShareScreen = {
  args: {
    label: "Share screen",
    kind: "secondary",
    Icon: icons.ShareScreenSolidIcon,
  },
};

export const SharingScreen = {
  args: {
    label: "Stop sharing screen",
    kind: "primary",
    Icon: icons.ShareScreenSolidIcon,
  },
};

export const Fullscreen = {
  args: {
    label: "Full screen",
    kind: "secondary",
    Icon: icons.ExpandIcon,
  },
};

export const EndCall = {
  args: {
    label: "End call",
    kind: "primary",
    destructive: true,
    Icon: icons.EndCallIcon,
  },
};

export const Invite = {
  args: {
    label: "Invite",
    kind: "primary",
    size: "sm",
    Icon: icons.UserAddIcon,
  },
};

export const Edit = {
  args: {
    label: "Edit",
    kind: "primary",
    size: "sm",
    Icon: icons.EditIcon,
  },
};

export const Search = {
  args: {
    label: "Search",
    kind: "secondary",
    size: "sm",
    Icon: icons.SearchIcon,
  },
};

export const Save = {
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: icons.CheckIcon,
  },
};

export const SaveDisabled = {
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: icons.CheckIcon,
    disabled: true,
  },
};

export const Cancel = {
  args: {
    label: "Cancel",
    kind: "secondary",
    size: "sm",
    Icon: icons.CloseIcon,
  },
};

export const Close = {
  args: {
    label: "Close",
    kind: "secondary",
    size: "sm",
    Icon: icons.CloseIcon,
  },
};
