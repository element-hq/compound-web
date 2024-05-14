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
        "value",
        "valueIsChanged",
        "error",
        "savedLabel",
        "saveButtonLabel",
        "cancelButtonLabel",
      ],
    },
  },
  argTypes: {
    label: {
      type: "string",
    },
    value: {
      type: "string",
    },
    valueIsChanged: {
      type: "boolean",
    },
    onChange: {
      action: "changed",
    },
    onSave: {
      action: "saved",
    },
    onCancel: {
      action: "cancelled",
    },
    error: {
      type: "string",
    },
    savedLabel: {
      type: "string",
    },
    saveButtonLabel: {
      type: "string",
    },
    cancelButtonLabel: {
      type: "string",
    },
  },
  render: ({ ...restArgs }) => <EditInPlace {...restArgs} />,
  args: {
    label: "Label",
    value: "",
    saveButtonLabel: "Save",
    cancelButtonLabel: "Cancel",
  },
} satisfies Meta<Props>;

type Story = StoryObj<Props>;

export const Empty: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=4335-2016&mode=design&t=BvxRca0YDRaq20IR-0",
    },
  },
};
