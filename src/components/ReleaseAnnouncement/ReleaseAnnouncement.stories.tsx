/*
Copyright 2024 New Vector Ltd

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
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { ReleaseAnnouncement as ReleaseAnnouncementComponent } from "./ReleaseAnnouncement";

type Props = Omit<
  React.ComponentProps<typeof ReleaseAnnouncementComponent>,
  "open" | "children" | "onClick"
>;

const Template: React.FC<Props> = (args) => {
  const [open, setOpen] = useState(true);

  return (
    <ReleaseAnnouncementComponent
      {...args}
      open={open}
      onClick={() => setOpen(false)}
    >
      <Button onClick={() => setOpen((open) => !open)}>Open menu</Button>
    </ReleaseAnnouncementComponent>
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
