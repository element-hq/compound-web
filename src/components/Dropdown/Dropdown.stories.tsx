/*
 *
 * Copyright 2024 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * /
 */
import { Dropdown } from "./Dropdown";
import { fn } from "@storybook/test";
import { Meta } from "@storybook/react";
import { ComponentProps } from "react";

export default {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["defaultValue", "placeholder", "error"],
    },
  },
  argTypes: {
    label: {
      type: "string",
    },
    error: {
      type: "string",
    },
    placeholder: {
      type: "string",
    },
    values: {
      type: "string",
    },
  },
  args: {
    label: "Label",
    placeholder: "Select an option",
    onValueChange: fn(),
    values: [
      ["Option1", "Option 1"],
      ["Option2", "Option 2"],
    ],
  },
} satisfies Meta<ComponentProps<typeof Dropdown>>;

export const Default = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};
export const WithHelpLabel = {
  args: {
    helpLabel: "Optional help text.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};
export const WithError = {
  args: {
    error: "Select an option",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};
export const WithDefaultValue = {
  args: {
    defaultValue: "Option2",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};
