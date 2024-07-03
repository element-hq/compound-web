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
import { Dropdown, DropdownItem } from "./Dropdown";
import React from "react";

export default {
  title: "Form/Controls/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    invalid: {
      type: "boolean",
    },
    placeholder: {
      type: "string",
    },
  },
  render: ({ ...restArgs }) => (
    <Dropdown label="Label" placeholder="Select an option" {...restArgs} />
  ),
  args: {
    placeholder: "Select an option",
    children: (
      <>
        <DropdownItem value="Option1">Option 1</DropdownItem>
        <DropdownItem value="Option2">Option 2</DropdownItem>
      </>
    ),
  },
};

export const Default = {};
export const WithHelpLabel = {
  args: {
    helpLabel: "Optional help text.",
  },
};
export const WithError = {
  args: {
    error: "Select an option",
  },
};
