/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import * as icons from "@vector-im/compound-design-tokens/assets/web/icons";

import { ActionInput } from "./";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";

type Props = { invalid?: boolean } & React.ComponentProps<typeof ActionInput>;

const meta = {
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
    <TooltipProvider>
      <ActionInput data-invalid={invalid || undefined} {...restArgs} />
    </TooltipProvider>
  ),
  args: {
    placeholder: "",
    autoFocus: false,
    disabled: false,
    readOnly: false,
    invalid: false,
    actionLabel: "Action",
    onActionClick: fn(),
    Icon: icons.CheckIcon,
  },
} satisfies Meta<Props>;
export default meta;

type Story = StoryObj<typeof meta>;

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
