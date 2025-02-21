/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { useState } from "react";
import { RadioMenuItem as RadioMenuItemComponent } from "./RadioMenuItem.tsx";
import { Meta, StoryObj } from "@storybook/react";

type Props = Omit<
  React.ComponentProps<typeof RadioMenuItemComponent>,
  "Icon" | "label" | "checked" | "onSelect" | "name"
>;

const Template: React.FC<Props> = (props: Props) => {
  const [selected, setSelected] = useState<"first" | "second">("first");
  return (
    <div style={{ width: 300 }}>
      <RadioMenuItemComponent
        {...props}
        label="First item"
        checked={selected === "first"}
        onSelect={(e) => {
          e.preventDefault();
          setSelected("first");
        }}
      />
      <RadioMenuItemComponent
        {...props}
        label="Second item"
        checked={selected === "second"}
        onSelect={(e) => {
          e.preventDefault();
          setSelected("second");
        }}
      />
      <RadioMenuItemComponent
        {...props}
        label="Third item with a name that's quite long"
        checked
        disabled
        onSelect={() => {}}
      />
    </div>
  );
};

const meta = {
  title: "Menu/RadioMenuItem",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
