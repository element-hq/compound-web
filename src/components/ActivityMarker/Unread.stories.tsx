/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Unread as UnreadComponent } from "./Unread.tsx";
import { type Meta, type StoryFn } from "@storybook/react-vite";
import React, { type ComponentProps } from "react";

export default {
  title: "ActivityMarker/Unread",
  component: UnreadComponent,
  tags: ["autodocs"],
} as Meta<typeof UnreadComponent>;

const Template: StoryFn<typeof UnreadComponent> = (
  args: ComponentProps<typeof UnreadComponent>,
) => {
  return <UnreadComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
