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

import * as Form from "../../";
import { MFAControl } from "./MFA";
import { within } from "@storybook/testing-library";
import { userEvent } from "@storybook/testing-library";

type Props = React.ComponentProps<typeof MFAControl> & {
  label?: string;
};

export default {
  title: "MFA",
  component: MFAControl,
  render: ({ label, ...props }) => {
    return (
      <Form.Root>
        <Form.Field name="story">
          {label && <Form.Label>{label}</Form.Label>}
          <MFAControl {...props} />
          <Form.ValidityState>
            {(validity) =>
              (!validity || validity.valid) && (
                <Form.Message kind="help">Enter your code</Form.Message>
              )
            }
          </Form.ValidityState>
          <Form.Message kind="error" match="patternMismatch">
            Invalid code
          </Form.Message>
        </Form.Field>
      </Form.Root>
    );
  },
  parameters: {
    controls: {
      include: ["defaultValue", "disabled", "readOnly", "label"],
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
    label: {
      type: "string",
    },
  },
  args: {
    defaultValue: "",
    autoFocus: false,
    disabled: false,
    readOnly: false,
  },
} satisfies Meta<Props>;

type Story = StoryObj<Props>;

export const Empty: Story = {
  args: {
    label: "Empty",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled",
    defaultValue: "012345",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    defaultValue: "012345",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read only",
    defaultValue: "012345",
    readOnly: true,
  },
};

export const Focus: Story = {
  args: {
    label: "Focus",
    defaultValue: "012",
    autoFocus: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Invalid",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Invalid"), "123");
    await userEvent.keyboard("{tab}");
  },
};
