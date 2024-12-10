/*
Copyright 2023-2024 New Vector Ltd

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

import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ExtensionsIcon from "@vector-im/compound-design-tokens/assets/web/icons/extensions";
import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";

import { ToggleMenuItem as ToggleMenuItemComponent } from "./ToggleMenuItem";

type Props = Omit<
  React.ComponentProps<typeof ToggleMenuItemComponent>,
  "Icon" | "label" | "checked" | "onSelect"
>;

const Template: React.FC<Props> = (props: Props) => {
  const [firstChecked, setFirstChecked] = useState(false);
  return (
    <div style={{ width: 300 }}>
      <ToggleMenuItemComponent
        {...props}
        Icon={ChatIcon}
        label="First item"
        checked={firstChecked}
        onSelect={(e) => {
          e.preventDefault();
          setFirstChecked((c) => !c);
        }}
      />
      <ToggleMenuItemComponent
        {...props}
        Icon={ExtensionsIcon}
        label="Second item with a name that's quite long"
        checked
        disabled
        onSelect={() => {}}
      />
    </div>
  );
};

const meta = {
  title: "Menu/ToggleMenuItem",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
