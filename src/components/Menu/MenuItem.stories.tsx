/*
Copyright 2023 New Vector Ltd

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

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import ExtensionsIcon from "@vector-im/compound-design-tokens/assets/web/icons/extensions";
import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";
import SettingsLabel from "@vector-im/compound-design-tokens/assets/web/icons/settings";

import { MenuItem as MenuItemComponent } from "./MenuItem";
import { Text } from "../Typography/Text";

const meta = {
  title: "Menu/MenuItem",
  component: MenuItemComponent,
  tags: ["autodocs"],
  args: {
    label: "Menu item",
    children: (
      <Text as="span" size="sm">
        99
      </Text>
    ),
    Icon: ChatIcon,
    onSelect: fn(),
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuItemComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <MenuItemComponent Icon={ChatIcon} label="First item" onSelect={() => {}}>
        <Text as="span" size="sm">
          99
        </Text>
      </MenuItemComponent>
      <MenuItemComponent
        Icon={ExtensionsIcon}
        label="Second item with a name that's quite long"
        onSelect={() => {}}
      />
      <MenuItemComponent Icon={SettingsLabel} label={null} onSelect={() => {}}>
        <Text as="span" size="sm">
          Third item without a label
        </Text>
      </MenuItemComponent>
    </div>
  ),
};

export const Primary: Story = {
  args: {
    kind: "primary",
  },
};

export const Critical: Story = {
  args: {
    kind: "critical",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const CriticalDisabled: Story = {
  args: {
    ...Critical.args,
    disabled: true,
  },
};

const SimpleComponent: React.FC<React.ComponentProps<"div">> = (props) => (
  <div style={{ height: 24, width: 48, backgroundColor: "teal" }} {...props} />
);

export const IconIsComponent: Story = {
  args: {
    ...Primary.args,
    // @ts-expect-error: For some reason, this isn't liking the type here
    Icon: <SimpleComponent />,
  },
};

export const WithoutLabel: Story = {
  args: {
    ...Primary.args,
    label: undefined,
  },
};

export const WithALongLabel: Story = {
  args: {
    ...Primary.args,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export const WithALongLabelAndChildren: Story = {
  args: {
    ...Primary.args,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, empor incididunt ut labore et dolore magna aliqua.",
    children: (
      <Text as="span" size="sm">
        Longer children too
      </Text>
    ),
  },
};
