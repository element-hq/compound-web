/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";

import { EditInPlace } from "./";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { ErrorMessage } from "../../Message";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";

type Props = { invalid?: boolean } & React.ComponentProps<typeof EditInPlace>;

const meta = {
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
export default meta;

type Story = StoryObj<typeof meta>;

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
  tags: ["axe-exclude"],
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
