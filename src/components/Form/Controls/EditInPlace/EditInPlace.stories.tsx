/*
Copyright 2024 New Vector Ltd

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

import { EditInPlace } from "./";
import { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { ErrorMessage } from "../../Message";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";

type Props = { invalid?: boolean } & React.ComponentProps<typeof EditInPlace>;

export default {
  title: "Form/Controls/EditInPlace",
  component: EditInPlace,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: [
        "onChange",
        "onSave",
        "onCancel",
        "onClearServerErrors",
        "defaultValue",
        "error",
        "serverInvalid",
        "savedLabel",
        "saveButtonLabel",
        "cancelButtonLabel",
        "helpLabel",
        "disabled",
      ],
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0",
    },
  },
  argTypes: {
    label: {
      type: "string",
    },
    defaultValue: {
      type: "string",
    },
    onChange: {
      action: "changed",
    },
    onCancel: {
      action: "cancelled",
    },
    onClearServerErrors: {
      action: "cleared server errors",
    },
    serverInvalid: {
      type: "boolean",
    },
    helpLabel: {
      type: "string",
    },
    savedLabel: {
      type: "string",
    },
    saveButtonLabel: {
      type: "string",
    },
    savingLabel: {
      type: "string",
    },
    cancelButtonLabel: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
  },
  render: ({ ...restArgs }) => (
    <TooltipProvider>
      <EditInPlace {...restArgs} />
    </TooltipProvider>
  ),
  args: {
    label: "Label",
    onSave: () => new Promise((resolve) => setTimeout(resolve, 1000)),
    savedLabel: "Saved",
    saveButtonLabel: "Save",
    cancelButtonLabel: "Cancel",
    savingLabel: "Saving…",
  },
} satisfies Meta<Props>;

type Story = StoryObj<Props>;

export const Empty: Story = {};

export const WithText: Story = {
  args: {
    defaultValue: "Hello, Computer",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Hello, Computer");
  },
};

export const Saving: Story = {
  args: {
    defaultValue: "Hello",
    onSave: () => new Promise(() => {}),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Hello");
    const save = canvas.getByRole("button", { name: "Save" });
    await userEvent.click(save);
    await expect(canvas.getByText("Saving…")).toBeInTheDocument();
  },
};

export const WithError: Story = {
  args: {
    serverInvalid: true,
    children: <ErrorMessage>I am a teapot</ErrorMessage>,
  },
};

export const WithHelpText: Story = {
  args: {
    helpLabel: "Optional help text.",
  },
};
