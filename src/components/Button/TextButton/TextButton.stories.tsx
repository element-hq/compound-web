/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { type Meta, type StoryObj } from "@storybook/react-vite";

import { TextButton as TextButtonComponent } from "./TextButton";

const meta = {
  title: "Button/TextButton",
  component: TextButtonComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Text button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=645-3494&t=SNeJfd1X7amCLgRE-4",
    },
  },
} satisfies Meta<typeof TextButtonComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const Small: Story = { args: { size: "sm" } };

export const Critical: Story = { args: { kind: "critical" } };

export const Disabled: Story = { args: { disabled: true } };
