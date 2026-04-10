/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";
import ChatProblemIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat-problem";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";

import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { SubMenu } from "./SubMenu";
import { Separator } from "../Separator/Separator";
import { Button } from "../Button/Button";

const Template: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Menu
      title="Menu with SubMenu"
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Open menu</Button>}
      align="start"
    >
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <SubMenu
        trigger={
          <MenuItem
            Icon={NotificationsIcon}
            label="Notifications"
            onSelect={null}
          />
        }
      >
        <MenuItem label="All notifications" onSelect={() => {}} />
        <MenuItem label="Mentions only" onSelect={() => {}} />
        <MenuItem label="Mute" onSelect={() => {}} />
      </SubMenu>
      <MenuItem Icon={ChatProblemIcon} label="Feedback" onSelect={() => {}} />
      <Separator />
      <MenuItem
        kind="critical"
        Icon={LeaveIcon}
        label="Sign out"
        onSelect={() => {}}
      />
    </Menu>
  );
};

const meta = {
  title: "Menu/SubMenu",
  component: Template,
  tags: ["autodocs", "axe-exclude"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
