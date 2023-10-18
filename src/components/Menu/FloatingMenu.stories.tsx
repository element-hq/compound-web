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
import UserProfileIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";
import NotificationsIcon from "@vector-im/compound-design-tokens/icons/notifications.svg";
import ChatProblemIcon from "@vector-im/compound-design-tokens/icons/chat-problem.svg";
import LeaveIcon from "@vector-im/compound-design-tokens/icons/leave.svg";

import { FloatingMenu as FloatingMenuComponent } from "./FloatingMenu";
import { MenuItem } from "../MenuItem/MenuItem";
import { MenuDivider } from "../MenuItem/MenuDivider";

export default {
  title: "FloatingMenu",
  component: FloatingMenuComponent,
  argTypes: {},
  args: {},
} as Meta<typeof FloatingMenuComponent>;

const Template: StoryFn<typeof FloatingMenuComponent> = (args) => (
  <FloatingMenuComponent {...args} title="Settings">
    <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
    {/* Extra long label to demonstrate word breaking */}
    <MenuItem
      Icon={NotificationsIcon}
      label="Notificationsnotificationsnotifications"
      onSelect={() => {}}
    />
    <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
    <MenuDivider />
    <MenuItem
      kind="critical"
      Icon={LeaveIcon}
      label="Sign out"
      onSelect={() => {}}
    />
  </FloatingMenuComponent>
);

export const FloatingMenu = Template.bind({});
FloatingMenu.args = {};
