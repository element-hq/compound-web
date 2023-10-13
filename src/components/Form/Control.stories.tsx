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
import { within } from "@storybook/testing-library";

import * as Form from "./index";
import { userEvent } from "@storybook/testing-library";

type Props = React.ComponentProps<typeof Form.Control> & {
  label: string;
};

export default {
  title: "Control",
  component: Form.Control,
  render: ({ label, ...props }) => (
    <Form.Root>
      <Form.Field name="story">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...props} />
        <Form.ValidityState>
          {(validity) =>
            (!validity || validity.valid) && (
              <Form.Message kind="help">Help text.</Form.Message>
            )
          }
        </Form.ValidityState>
        <Form.Message kind="error" match="patternMismatch">
          Error text.
        </Form.Message>
      </Form.Field>
    </Form.Root>
  ),
  parameters: {
    controls: {
      include: [
        "defaultValue",
        "placeholder",
        "disabled",
        "autoFocus",
        "readOnly",
        "label",
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
    label: {
      type: "string",
    },
  },
  args: {
    placeholder: "",
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
    defaultValue: "Filled",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    value: "Disabled",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read only",
    value: "Read only",
    readOnly: true,
  },
};

export const Focus: Story = {
  args: {
    label: "Focus",
    autoFocus: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Invalid",
    // Invalid pattern so that the browser shows the error message
    pattern: "[0-9]+",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("textbox"), "Invalid");
    await userEvent.keyboard("{tab}");
  },
};
