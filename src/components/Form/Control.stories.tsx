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

type Props = React.ComponentProps<typeof Form.Control> & {
  label?: string;
  invalid?: boolean;
  message?: string;
};

export default {
  title: "Control",
  component: Form.Control,
  render: ({ label, invalid, message, ...props }) => (
    <Form.Root>
      <Form.Field name="story" serverInvalid={invalid}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control {...props} />
        {message && (
          <Form.Message kind={invalid ? "error" : "help"}>
            {message}
          </Form.Message>
        )}
      </Form.Field>
    </Form.Root>
  ),
  parameters: {
    controls: {
      include: [
        "value",
        "placeholder",
        "disabled",
        "readOnly",
        "label",
        "invalid",
        "message",
      ],
    },
  },
  argTypes: {
    value: {
      type: "string",
    },
    placeholder: {
      type: "string",
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
    invalid: {
      type: "boolean",
    },
    message: {
      type: "string",
    },
  },
  args: {
    placeholder: "",
    disabled: false,
    readOnly: false,
    invalid: false,
    message: "Help text.",
  },
} satisfies Meta<Props>;

type Story = StoryObj<Props>;

export const Basic: Story = {
  args: {
    label: "Basic",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    (canvas.getByRole("textbox") as HTMLInputElement).value = "Basic";
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await canvas.getByRole("textbox").focus();
  },
};

export const Invalid: Story = {
  args: {
    label: "Invalid",
    invalid: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox") as HTMLInputElement;
    input.value = "Invalid";

    // Wait for the next tick
    await new Promise((resolve) => setTimeout(resolve, 0));
    // radix-ui always focuses the input when invalid, which is not what we want for snapshots
    input.blur();
  },
};
