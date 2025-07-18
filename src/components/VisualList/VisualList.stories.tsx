/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { VisualList as VisualListComponent } from "./VisualList";
import { type Meta, type StoryFn } from "@storybook/react-vite";
import React, { type ComponentProps } from "react";
import InfoIcon from "@vector-im/compound-design-tokens/assets/web/icons/info";
import { VisualListItem } from "./VisualListItem.tsx";

export default {
  title: "VisualList/VisualList",
  component: VisualListComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: (
      <>
        <VisualListItem Icon={InfoIcon}>First item</VisualListItem>
        <VisualListItem Icon={InfoIcon}>Second item</VisualListItem>
        <VisualListItem Icon={InfoIcon}>Third item</VisualListItem>
      </>
    ),
  },
} as Meta<typeof VisualListComponent>;

const Template: StoryFn<typeof VisualListComponent> = (
  args: ComponentProps<typeof VisualListComponent>,
) => {
  return <VisualListComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
