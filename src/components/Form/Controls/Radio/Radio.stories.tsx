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

import { RadioInput } from "./Radio";

type Props = React.ComponentProps<typeof RadioInput> & {
  invalid?: boolean;
};

export default {
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

type Story = StoryObj<Props>;

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
