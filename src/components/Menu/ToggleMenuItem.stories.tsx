/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
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
    <div style={{ width: 300 }} role="menu">
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
