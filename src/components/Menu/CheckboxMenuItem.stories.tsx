/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { useState } from "react";
import { CheckboxMenuItem as CheckboxMenuItemComponent } from "./CheckboxMenuItem.tsx";
import { Meta, StoryObj } from "@storybook/react-vite";

type Props = Omit<
  React.ComponentProps<typeof CheckboxMenuItemComponent>,
  "label" | "checked" | "onSelect"
>;

const Template: React.FC<Props> = (props: Props) => {
  const [firstChecked, setFirstChecked] = useState(false);
  return (
    <div style={{ width: 300 }}>
      <CheckboxMenuItemComponent
        {...props}
        label="First item"
        checked={firstChecked}
        onSelect={(e) => {
          e.preventDefault();
          setFirstChecked((c) => !c);
        }}
      />
      <CheckboxMenuItemComponent
        {...props}
        label="Second item with a name that's quite long"
        checked
        disabled
        onSelect={() => {}}
      />
    </div>
  );
};

const meta = {
  title: "Menu/CheckboxMenuItem",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
