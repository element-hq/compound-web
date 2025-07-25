/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";

import { RadioInput } from "./Radio";

type Props = React.ComponentProps<typeof RadioInput> & {
  invalid?: boolean;
};

const meta = {
  title: "Form/Controls/Radio",
  component: RadioInput,
  render: ({ invalid, ...props }) => (
    <RadioInput {...props} data-invalid={invalid || undefined} />
  ),
  tags: ["autodocs"],
  argTypes: {
    defaultChecked: {
      type: "boolean",
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
    defaultChecked: false,
    autoFocus: false,
    disabled: false,
    readOnly: false,
    invalid: false,
  },
} satisfies Meta<Props>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-312",
    },
  },
};

export const Checked: Story = {
  args: { defaultChecked: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-313",
    },
  },
};

export const DisabledUnchecked: Story = {
  args: { disabled: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-319",
    },
  },
};

export const DisabledChecked: Story = {
  args: { defaultChecked: true, disabled: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-320",
    },
  },
};

export const ReadonlyUnchecked: Story = {
  args: { readOnly: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2448-2090",
    },
  },
};

export const ReadonlyChecked: Story = {
  args: { defaultChecked: true, readOnly: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2448-2091",
    },
  },
};

export const InvalidUnchecked: Story = {
  args: { invalid: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-333",
    },
  },
};

export const InvalidChecked: Story = {
  args: { defaultChecked: true, invalid: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-334",
    },
  },
};

export const Focus: Story = {
  args: { autoFocus: true },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=119-322",
    },
  },
};
