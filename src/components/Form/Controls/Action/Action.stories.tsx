/*
Copyright 2023 The Matrix.org Foundation C.I.C.
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

import { Meta, StoryObj } from "@storybook/react";

// TODO: make all the icons available & refactor this somewhere else
import ChatIcon from "@vector-im/compound-design-tokens/icons/chat.svg";
import CheckIcon from "@vector-im/compound-design-tokens/icons/check.svg";
import CloseIcon from "@vector-im/compound-design-tokens/icons/close.svg";

const icons = {
  chat: ChatIcon,
  check: CheckIcon,
  close: CloseIcon,
};

import { ActionInput } from "./";

type Props = { invalid?: boolean } & React.ComponentProps<typeof ActionInput>;

export default {
  title: "Form/Controls/Action",
  component: ActionInput,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "onActionClick",
        "defaultValue",
        "placeholder",
        "disabled",
        "autoFocus",
        "readOnly",
        "invalid",
        "actionLabel",
        "Icon",
      ],
    },
  },
  argTypes: {
    onActionClick: {
      action: "clicked",
    },
    defaultValue: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    autoFocus: {
      type: "boolean",
    },
    readOnly: {
      type: "boolean",
    },
    invalid: {
      type: "boolean",
    },
    actionLabel: {
      type: "string",
    },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      defaultValue: "check",
      control: {
        type: "select",
      },
    },
  },
  render: ({ invalid, ...restArgs }) => (
    <ActionInput data-invalid={invalid || undefined} {...restArgs} />
  ),
  args: {
    placeholder: "",
    autoFocus: false,
    disabled: false,
    readOnly: false,
    invalid: false,
    actionLabel: "Action",
    Icon: CheckIcon,
  },
} satisfies Meta<Props>;

type Story = StoryObj<Props>;

export const Empty: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4477",
    },
  },
};

export const Filled: Story = {
  args: {
    defaultValue: "Filled",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536",
    },
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Disabled",
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4530",
    },
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: "Read only",
    readOnly: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21984",
    },
  },
};

export const Focused: Story = {
  args: {
    autoFocus: true,
  },
};

export const Invalid: Story = {
  args: {
    defaultValue: "Invalid",
    invalid: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4514",
    },
  },
};
