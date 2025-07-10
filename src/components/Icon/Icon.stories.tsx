/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react-vite";

import ThreadIcon from "@vector-im/compound-design-tokens/assets/web/icons/threads";

const meta = {
  title: "Icon",
  component: ThreadIcon,
  argTypes: {},
} satisfies Meta<typeof ThreadIcon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = { args: {} };
