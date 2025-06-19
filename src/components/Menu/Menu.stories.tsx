/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";
import ChatProblemIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat-problem";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";

import { Menu as MenuComponent } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";
import { Button } from "../Button/Button";
import { MenuTitle } from "./MenuTitle.tsx";

type Props = Omit<
  React.ComponentProps<typeof MenuComponent>,
  "open" | "onOpenChange" | "trigger" | "align" | "children"
>;

const Template: React.FC<Props> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <MenuComponent
      {...args}
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Open menu</Button>}
      align="start"
    >
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem
        Icon={NotificationsIcon}
        label="Notifications"
        onSelect={() => {}}
      />
      <MenuTitle title="Other section" />
      <MenuItem
        Icon={NotificationsIcon}
        label="Other Notifications"
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
    </MenuComponent>
  );
};

const meta = {
  title: "Menu",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Menu: Story = { args: { title: "Today's Menu" } };

export const WithoutTitle = {
  args: { title: "Untitled Menu", showTitle: false },
};
