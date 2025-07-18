/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";
import ChatProblemIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat-problem";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";

import { DrawerMenu as DrawerMenuComponent } from "./DrawerMenu";
import drawerStyles from "./DrawerMenu.module.css";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";

type Props = Omit<
  React.ComponentProps<typeof DrawerMenuComponent>,
  "title" | "children"
>;

const Template: React.FC<Props> = (args) => (
  <>
    <div className={drawerStyles.bg} />
    <DrawerMenuComponent {...args} title="Settings">
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
    </DrawerMenuComponent>
  </>
);

const meta = {
  title: "Menu/DrawerMenu",
  component: Template,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const DrawerMenu: Story = { args: {} };
