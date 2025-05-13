/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";
import ChatProblemIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat-problem";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";

import { ContextMenu as ContextMenuComponent } from "./ContextMenu";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";

type Props = Omit<
  React.ComponentProps<typeof ContextMenuComponent>,
  "trigger" | "title" | "hasAccessibleAlternative" | "children"
>;

const Template: React.FC<Props> = (args) => {
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

const meta = {
  title: "Menu/ContextMenu",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ContextMenu: Story = { args: {} };
export const ContextMenuWithoutTitle: Story = {
  args: {
    showTitle: false,
  },
};
