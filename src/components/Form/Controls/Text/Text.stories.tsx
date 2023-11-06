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

import { TextInput } from "./";

type Props = { invalid?: boolean } & React.ComponentProps<typeof TextInput>;

export default {
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
    <TextInput data-invalid={invalid || undefined} {...restArgs} />
  ),
  args: {
    placeholder: "",
    autoFocus: false,
    disabled: false,
    readOnly: false,
    invalid: false,
  },
} satisfies Meta<Props>;

type Story = StoryObj<Props>;

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
     * Use this text to check ligatures are disabled in inputs
     * Once visual testing is reinstated
     */
    defaultValue: "Difficult waffles",
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
