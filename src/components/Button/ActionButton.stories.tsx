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

import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";
import CloseIcon from "@vector-im/compound-design-tokens/icons/close.svg";
import EditIcon from "@vector-im/compound-design-tokens/icons/edit.svg";
import EndCallIcon from "@vector-im/compound-design-tokens/icons/end-call.svg";
import ExpandIcon from "@vector-im/compound-design-tokens/icons/expand.svg";
import LinkIcon from "@vector-im/compound-design-tokens/icons/link.svg";
import MicOnSolidIcon from "@vector-im/compound-design-tokens/icons/mic-on-solid.svg";
import MicOffSolidIcon from "@vector-im/compound-design-tokens/icons/mic-off-solid.svg";
import SearchIcon from "@vector-im/compound-design-tokens/icons/search.svg";
import SettingsSolidIcon from "@vector-im/compound-design-tokens/icons/settings-solid.svg";
import ShareScreenSolidIcon from "@vector-im/compound-design-tokens/icons/share-screen-solid.svg";
import UserAddIcon from "@vector-im/compound-design-tokens/icons/user-add.svg";
import VideoCallOffSolidIcon from "@vector-im/compound-design-tokens/icons/video-call-off-solid.svg";
import VideoCallSolidIcon from "@vector-im/compound-design-tokens/icons/video-call-solid.svg";
import VisibilityOnIcon from "@vector-im/compound-design-tokens/icons/visibility-on.svg";

import { Button as ButtonComponent } from "./Button";
import { Tooltip } from "../..";

const Template: React.FC<
  { label: string } & React.ComponentProps<typeof ButtonComponent>
> = ({ label, ...args }) => (
  <Tooltip label={label}>
    <ButtonComponent iconOnly {...args} />
  </Tooltip>
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
      options: [
        "CheckIcon",
        "CloseIcon",
        "EditIcon",
        "EndCallIcon",
        "ExpandIcon",
        "LinkIcon",
        "MicOnSolidIcon",
        "MicOffSolidIcon",
        "SearchIcon",
        "SettingsSolidIcon",
        "ShareScreenSolidIcon",
        "UserAddIcon",
        "VideoCallOffSolidIcon",
        "VideoCallSolidIcon",
        "VisibilityOnIcon",
      ],
      mapping: {
        CheckIcon,
        CloseIcon,
        EditIcon,
        EndCallIcon,
        ExpandIcon,
        LinkIcon,
        MicOnSolidIcon,
        MicOffSolidIcon,
        SearchIcon,
        SettingsSolidIcon,
        ShareScreenSolidIcon,
        UserAddIcon,
        VideoCallOffSolidIcon,
        VideoCallSolidIcon,
        VisibilityOnIcon,
      },
      control: { type: "inline-radio" },
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
    Icon: SettingsSolidIcon,
  },
};

export const ShareLink = {
  args: {
    label: "Copy link",
    kind: "secondary",
    Icon: LinkIcon,
  },
};

export const VideoOn = {
  args: {
    label: "Turn video off",
    kind: "secondary",
    Icon: VideoCallSolidIcon,
  },
};

export const VideoOff = {
  args: {
    label: "Turn video on",
    kind: "primary",
    Icon: VideoCallOffSolidIcon,
  },
};

export const MicOn = {
  args: {
    label: "Turn mic off",
    kind: "secondary",
    Icon: MicOnSolidIcon,
  },
};

export const MicOff = {
  args: {
    label: "Turn mic on",
    kind: "primary",
    Icon: MicOffSolidIcon,
  },
};

export const ShareScreen = {
  args: {
    label: "Share screen",
    kind: "secondary",
    Icon: ShareScreenSolidIcon,
  },
};

export const SharingScreen = {
  args: {
    label: "Stop sharing screen",
    kind: "primary",
    Icon: ShareScreenSolidIcon,
  },
};

export const Fullscreen = {
  args: {
    label: "Full screen",
    kind: "secondary",
    Icon: ExpandIcon,
  },
};

export const EndCall = {
  args: {
    label: "End call",
    kind: "primary",
    destructive: true,
    Icon: EndCallIcon,
  },
};

export const Invite = {
  args: {
    label: "Invite",
    kind: "primary",
    size: "sm",
    Icon: UserAddIcon,
  },
};

export const Edit = {
  args: {
    label: "Edit",
    kind: "primary",
    size: "sm",
    Icon: EditIcon,
  },
};

export const Search = {
  args: {
    label: "Search",
    kind: "secondary",
    size: "sm",
    Icon: SearchIcon,
  },
};

export const Save = {
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: CheckIcon,
  },
};

export const SaveDisabled = {
  args: {
    label: "Save",
    kind: "primary",
    size: "sm",
    Icon: CheckIcon,
    disabled: true,
  },
};

export const Cancel = {
  args: {
    label: "Cancel",
    kind: "secondary",
    size: "sm",
    Icon: CloseIcon,
  },
};

export const Close = {
  args: {
    label: "Close",
    kind: "secondary",
    size: "sm",
    Icon: CloseIcon,
  },
};
