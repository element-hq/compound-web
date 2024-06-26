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

import { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button as ButtonComponent } from "./Button";

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

export default {
  title: "Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
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
    iconOnly: { type: "boolean" },
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
    size: "lg",
    as: undefined,
    destructive: false,
    disabled: false,
    children: "Click me!",
    onClick: fn(),
  },
} as Meta<typeof ButtonComponent>;

export const Default = {
  args: {
    // test component defaults
    kind: undefined,
    size: undefined,
  },
};

export const Small = {
  args: {
    // test component defaults
    kind: undefined,
    size: "sm",
  },
};

export const Primary = {
  args: {
    kind: "primary",
  },
};

export const PrimaryDestructive = {
  args: {
    kind: "primary",
    destructive: true,
  },
};

export const Secondary = {
  args: {
    kind: "secondary",
  },
};

export const SecondaryDestructive = {
  args: {
    kind: "secondary",
    destructive: true,
  },
};

export const Tertiary = {
  args: {
    kind: "tertiary",
  },
};

export const TertiaryDestructive = {
  args: {
    kind: "tertiary",
    destructive: true,
  },
};

export const WithIcon = {
  args: {
    ...Primary.args,
    Icon: VisibilityOnIcon,
  },
};

export const SmallWithIcon = {
  args: {
    ...Primary.args,
    size: "sm",
    Icon: VisibilityOnIcon,
  },
};

export const Disabled = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Link = {
  args: {
    ...Primary.args,
    as: "a",
    href: "https://example.org",
  },
};

export const LinkDisabled = {
  args: {
    ...Link.args,
    disabled: true,
  },
};
