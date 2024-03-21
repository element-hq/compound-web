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

import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Button } from "../Button";
import { ReleaseAnnouncement as ReleaseAnnouncementComponent } from "./ReleaseAnnouncement";

export default {
  title: "Menu/ReleaseAnnouncement",
  component: ReleaseAnnouncementComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    header: "Notifications have moved",
    description: "From now on, click the icon here to view your notifications.",
    placement: "right",
    closeLabel: "Ok",
  },
} as Meta<typeof ReleaseAnnouncementComponent>;

const Template: StoryFn<typeof ReleaseAnnouncementComponent> = (args) => {
  return (
    <ReleaseAnnouncementComponent {...args}>
      <Button>Open menu</Button>
    </ReleaseAnnouncementComponent>
  );
};

export const ReleaseAnnouncement = Template.bind({});
ReleaseAnnouncement.args = {};
