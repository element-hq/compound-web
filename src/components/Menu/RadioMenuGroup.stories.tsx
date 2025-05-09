/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Meta, StoryObj } from "@storybook/react";
import { RadioMenuGroup } from "./RadioMenuGroup";
import React, { useState } from "react";

const Template: React.FC = () => {
  const [selected, setSelected] = useState<string>("1");

  return (
    <RadioMenuGroup
      items={[
        { label: "First item", name: "1" },
        { label: "Second item", name: "2" },
        { label: "Third item with a name that's quite long", name: "3" },
        { label: "Disabled item", name: "4", disabled: true },
      ]}
      selected={selected}
      onChange={setSelected}
      onFinished={() => {}}
    />
  );
};

const meta = {
  title: "Menu/RadioMenuGroup",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: {} };
