/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { UnreadCounter as UnreadCounterComponent } from "./UnreadCounter.tsx";
import { Meta, StoryFn } from "@storybook/react";
import React, { ComponentProps } from "react";

export default {
  title: "ActivityMarker/UnreadCounter",
  component: UnreadCounterComponent,
  tags: ["autodocs"],
  argTypes: {
    count: {
      description: "The number to display",
      control: {
        type: "number",
      },
    },
  },
  args: {
    count: 4,
  },
} as Meta<typeof UnreadCounterComponent>;

const Template: StoryFn<typeof UnreadCounterComponent> = (
  args: ComponentProps<typeof UnreadCounterComponent>,
) => {
  return <UnreadCounterComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const DoubleDigit = Template.bind({});
DoubleDigit.args = {
  count: 12,
};

export const TripleDigit = Template.bind({});
TripleDigit.args = {
  count: 123,
};

export const NoCount = Template.bind({});
NoCount.args = {
  count: null,
};
