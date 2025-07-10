/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Pill as PillComponent } from "./Pill.tsx";
import { Meta, StoryFn } from "@storybook/react-vite";
import React, { ComponentProps } from "react";

export default {
  title: "ActivityMarker/Pill",
  component: PillComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Live",
  },
} as Meta<typeof PillComponent>;

const Template: StoryFn<typeof PillComponent> = (
  args: ComponentProps<typeof PillComponent>,
) => {
  return <PillComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
