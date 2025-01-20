/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { PasswordInput } from "./";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";
import { screen } from "@storybook/test";
import { userEvent } from "@storybook/test";

type Props = { invalid?: boolean } & React.ComponentProps<typeof PasswordInput>;

const meta = {
  title: "Form/Controls/Password",
  component: PasswordInput,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "defaultValue",
        "placeholder",
        "disabled",
        "autoFocus",
        "readOnly",
        "invalid",
      ],
    },
  },
  argTypes: {
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
  },
  render: ({ invalid, ...restArgs }) => (
    <TooltipProvider>
      <PasswordInput data-invalid={invalid || undefined} {...restArgs} />
    </TooltipProvider>
  ),
  args: {
    placeholder: "",
    autoFocus: false,
    disabled: false,
    readOnly: false,
    invalid: false,
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

export const Visible: Story = {
  args: {
    defaultValue: "hunter2",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4536",
    },
  },
  play: async () => {
    // eslint-disable-next-line storybook/await-interactions
    const user = userEvent.setup();
    const toggle = screen.getByRole("button", { name: "Show" });
    await user.click(toggle);
  },
};
