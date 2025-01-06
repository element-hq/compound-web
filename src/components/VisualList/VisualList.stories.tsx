/*
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
 */

import { VisualList as VisualListComponent } from "./VisualList";
import { Meta, StoryFn } from "@storybook/react";
import React, { ComponentProps } from "react";
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
