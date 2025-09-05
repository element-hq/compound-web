/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { ReleaseAnnouncement as ReleaseAnnouncementComponent } from "./ReleaseAnnouncement";

type Props = Omit<
  React.ComponentProps<typeof ReleaseAnnouncementComponent>,
  "open" | "onClick"
>;

const Template: React.FC<Props> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        style={{ display: "block" }}
        onClick={() => setOpen((open) => !open)}
      >
        {open ? "Close" : "Open"}
      </button>
      <ReleaseAnnouncementComponent
        {...args}
        open={open}
        onClick={() => setOpen(false)}
      >
        {args.children}
      </ReleaseAnnouncementComponent>
    </>
  );
};

const meta = {
  title: "Release Announcement",
  component: Template,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    header: "Notifications have moved",
    description: "From now on, click the icon here to view your notifications.",
    placement: "right",
    closeLabel: "Ok",
    children: <Button>A button</Button>,
  },
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const MultiLinesContent: Story = {
  args: {
    header: "A multi line header which is taking multiple lines",
    description:
      "A multi line description which is taking multiple lines. The OK button should be vertically centred.",
  },
};

export const BottomPlacement: Story = {
  args: {
    placement: "bottom",
  },
};

export const NoArrow: Story = {
  args: {
    displayArrow: false,
  },
};

export const OnDivElement: Story = {
  args: {
    children: <div style={{ display: "inline-block" }}>Here is some text</div>,
  },
};
