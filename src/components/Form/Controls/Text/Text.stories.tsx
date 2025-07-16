/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

import { type Meta, type StoryObj } from "@storybook/react-vite";

import { TextInput } from "./";

type Props = { invalid?: boolean } & React.ComponentProps<typeof TextInput>;

const meta = {
  title: "Form/Controls/Text",
  component: TextInput,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "defaultValue",
        "placeholder",
        "disabled",
        "autoFocus",
        "readOnly",
        "dataInvalid",
        "enableLigatures",
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
    enableLigatures: {
      type: "boolean",
    },
  },
  render: ({ invalid, ...restArgs }) => (
    <TextInput data-invalid={invalid || undefined} {...restArgs} />
  ),
  args: {
    placeholder: "",
    autoFocus: false,
    disabled: false,
    readOnly: false,
    invalid: false,
    enableLigatures: undefined,
  },
} satisfies Meta<Props>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2689",
    },
  },
};

export const Filled: Story = {
  args: {
    /**
     * Use this text to check ligatures are not displayed in inputs
     * Once visual testing is reinstated
     */
    defaultValue: "-> 1x2x3",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2724",
    },
  },
};

export const WithLigatures: Story = {
  args: {
    /**
     * Use this text to check ligatures are enabled by enableLigatures
     * Once visual testing is reinstated
     */
    defaultValue: "-> 1x2x3",
    enableLigatures: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2724",
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
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2717",
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
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=2126-21865",
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
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=792-2710",
    },
  },
};
