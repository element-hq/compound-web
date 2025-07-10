/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";
import ChatProblemIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat-problem";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";

import { FloatingMenu as FloatingMenuComponent } from "./FloatingMenu";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";

type Props = Omit<
  React.ComponentProps<typeof FloatingMenuComponent>,
  "title" | "children"
>;

const Template: React.FC<Props> = (args) => (
  <FloatingMenuComponent {...args} title="Settings">
    <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
    {/* Extra long label to demonstrate word breaking */}
    <MenuItem
      Icon={NotificationsIcon}
      label="Notificationsnotificationsnotifications"
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
  </FloatingMenuComponent>
);

const meta = {
  title: "Menu/FloatingMenu",
  component: Template,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FloatingMenu: Story = { args: {} };
