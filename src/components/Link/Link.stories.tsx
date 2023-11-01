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

import { Meta } from "@storybook/react";

import { Link as LinkComponent } from "./Link";

export default {
  title: "Link",
  component: LinkComponent,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      options: ["primary", "critical"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    children: "Text link",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=645-3494&mode=design&t=NC76puFaYAA5i3V4-0",
    },
  },
} as Meta<typeof LinkComponent>;

export const Default = {
  // no args, test default kind
};

export const Primary = {
  args: {
    kind: "primary",
  },
};

export const Critical = {
  args: {
    kind: "critical",
  },
};
