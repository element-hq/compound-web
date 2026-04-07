/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import * as icons from "@vector-im/compound-design-tokens/assets/web/icons";

import { PageHeader as PageHeaderComponent } from "./PageHeader";
import { Link } from "../Link/Link";

const meta = {
  title: "PageHeader",
  component: PageHeaderComponent,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
  },
  args: {
    Icon: icons.DevicesIcon,
    heading: "Title goes here",
    children: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link>Learn more</Link>
      </>
    ),
  },
} satisfies Meta<typeof PageHeaderComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3752-10703&t=hoBeDgSQyd6RG2yw-4",
    },
  },
};

export const Medium: Story = {
  args: { size: "md" },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3760-17837&t=hoBeDgSQyd6RG2yw-4",
    },
  },
};
