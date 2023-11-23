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
import { Meta, StoryFn } from "@storybook/react";
import ExtensionsIcon from "@vector-im/compound-design-tokens/icons/extensions.svg";
import ChatIcon from "@vector-im/compound-design-tokens/icons/chat.svg";
import SettingsLabel from "@vector-im/compound-design-tokens/icons/settings.svg";

import { MenuItem as MenuItemComponent } from "./MenuItem";
import { Text } from "../Typography/Text";

export default {
  title: "Menu/MenuItem",
  component: MenuItemComponent,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked!" },
  },
  args: {
    label: "Menu item",
    children: (
      <Text as="span" size="sm">
        99
      </Text>
    ),
    Icon: ChatIcon,
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof MenuItemComponent>;

export const Example = {
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

export const Primary = {
  args: {
    kind: "primary",
  },
};

export const Critical = {
  args: {
    kind: "critical",
  },
};

export const PrimaryDisabled = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const CriticalDisabled = {
  args: {
    ...Critical.args,
    disabled: true,
  },
};

export const WithoutLabel = {
  args: {
    ...Primary.args,
    label: undefined,
  },
};

export const WithALongLabel = {
  args: {
    ...Primary.args,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export const WithALongLabelAndChildren = {
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
