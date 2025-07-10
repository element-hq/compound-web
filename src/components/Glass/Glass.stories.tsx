/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";

import { Glass as GlassComponent } from "./Glass";
import { Text } from "../Typography/Text";

const meta = {
  title: "Glass",
  component: GlassComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    style: {
      inlineSize: 250,
      blockSize: 150,
    },

    children: (
      <div
        style={{
          background: "var(--cpd-color-bg-canvas-default)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Your content here</Text>
      </div>
    ),
  },

  decorators: [
    (Story) => (
      <div
        style={{
          background: "url('/images/__test__/kitten2.jpg')",
          backgroundSize: "cover",
          inlineSize: "fit-content",
          blockSize: "fit-content",
          padding: 16,
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof GlassComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Glass: Story = { args: {} };
