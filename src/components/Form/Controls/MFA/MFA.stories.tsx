/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { MFAInput } from "./MFA";

type Props = React.ComponentProps<typeof MFAInput> & {
  invalid?: boolean;
};

const meta = {
  title: "Form/Controls/MFA",
  component: MFAInput,
  render: ({ invalid, ...props }) => (
    <MFAInput {...props} data-invalid={invalid || undefined} />
  ),
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["defaultValue", "disabled", "readOnly", "invalid"],
    },
  },
  argTypes: {
    defaultValue: {
      type: "string",
    },
    autoFocus: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    readOnly: {
      type: "boolean",
    },
  },
  args: {
    defaultValue: "",
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
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4786",
    },
  },
};

export const Filled: Story = {
  args: { defaultValue: "012345" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4827",
    },
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "012345",
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4821",
    },
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: "012345",
    readOnly: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21991",
    },
  },
};

export const Focus: Story = {
  args: {
    defaultValue: "012",
    autoFocus: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4805",
    },
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=793-4814",
    },
  },
};
