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

import { ContextMenu as ContextMenuComponent } from "./ContextMenu";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";

export default {
  title: "Menu/ContextMenu",
  component: ContextMenuComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof ContextMenuComponent>;

const Template: StoryFn<typeof ContextMenuComponent> = (args) => {
  return (
    <ContextMenuComponent
      {...args}
      title="Settings"
      trigger={
        <div
          style={{
            borderRadius: 24,
            background: "var(--cpd-color-bg-subtle-secondary)",
            inlineSize: 300,
            blockSize: 200,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 32,
            boxSizing: "border-box",
          }}
        >
          Right click or long press to open menu
        </div>
      }
      hasAccessibleAlternative={false}
    >
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem
        Icon={NotificationsIcon}
        label="Notifications"
        onSelect={() => {}}
      />
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem
        kind="critical"
        Icon={LeaveIcon}
        label="Sign out"
        onSelect={() => {}}
      />
    </ContextMenuComponent>
  );
};

export const ContextMenu = Template.bind({});
ContextMenu.args = {};
