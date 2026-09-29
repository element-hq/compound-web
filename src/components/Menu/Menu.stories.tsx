/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
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
  tags: ["autodocs", "axe-exclude"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Menu: Story = { args: { title: "Today's Menu" } };

export const WithoutTitle = {
  args: { title: "Untitled Menu", showTitle: false },
};

const manyItems = Array.from({ length: 30 }, (_, i) => (
  <MenuItem
    key={i}
    Icon={NotificationsIcon}
    label={`Item ${i + 1}`}
    onSelect={() => {}}
  />
));

const LongTemplate: React.FC<Props> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <MenuComponent
      {...args}
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Open menu</Button>}
      align="start"
    >
      {manyItems}
    </MenuComponent>
  );
};

export const WithManyItems: StoryObj<typeof LongTemplate> = {
  render: (args) => <LongTemplate {...args} />,
  args: { title: "A long menu" },
};

const BoundaryTemplate: React.FC<Props> = (args) => {
  const [open, setOpen] = useState(true);
  const [boundary, setBoundary] = useState<HTMLDivElement | null>(null);
  return (
    <div
      ref={setBoundary}
      style={{
        blockSize: 320,
        inlineSize: 280,
        outline: "1px dashed var(--cpd-color-border-interactive-primary)",
      }}
    >
      <MenuComponent
        {...args}
        open={open}
        onOpenChange={setOpen}
        trigger={<Button>Open menu</Button>}
        align="start"
        collisionBoundary={boundary}
        collisionPadding={8}
      >
        {manyItems}
      </MenuComponent>
    </div>
  );
};

/** As in an app embedded in a page: the menu scrolls within the box. */
export const WithinABoundary: StoryObj<typeof BoundaryTemplate> = {
  render: (args) => <BoundaryTemplate {...args} />,
  args: { title: "A bounded menu" },
};
