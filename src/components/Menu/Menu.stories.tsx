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

import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import UserProfileIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";
import NotificationsIcon from "@vector-im/compound-design-tokens/icons/notifications.svg";
import ChatProblemIcon from "@vector-im/compound-design-tokens/icons/chat-problem.svg";
import LeaveIcon from "@vector-im/compound-design-tokens/icons/leave.svg";

import { Menu as MenuComponent } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";
import { Button } from "../Button/Button";

export default {
  title: "Menu",
  component: MenuComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof MenuComponent>;

const Template: StoryFn<typeof MenuComponent> = (args) => {
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

export const Menu = Template.bind({});
Menu.args = {
  title: "Today's Menu",
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  title: "Untitled Menu",
  showTitle: false,
};
