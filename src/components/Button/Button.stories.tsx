/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button as ButtonComponent } from "./Button";

import * as icons from "@vector-im/compound-design-tokens/assets/web/icons";

// The type of ButtonComponent is a little hard to work with, so we'll just redefined the props we need
type Props = React.ComponentProps<typeof ButtonComponent> & {
  as: "a" | "button";
  href?: string;
};

const meta = {
  title: "Button",
  component: ButtonComponent as React.FC<Props>,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "inline-radio" },
    },
    kind: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "inline-radio" },
    },
    destructive: { type: "boolean" },
    disabled: {
      type: "boolean",
    },
    as: {
      options: ["a", "button"],
      control: { type: "inline-radio" },
    },
    iconOnly: { type: "boolean" },
    Icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: { type: "select" },
    },
    onClick: { action: "onClick" },
  },
  args: {
    size: "lg",
    as: "button",
    destructive: false,
    disabled: false,
    children: "Click me!",
    onClick: fn(),
  },
} satisfies Meta<Props>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // test component defaults
    kind: undefined,
    size: undefined,
  },
};

export const Small: Story = {
  args: {
    // test component defaults
    kind: undefined,
    size: "sm",
  },
};

export const Primary: Story = {
  args: {
    kind: "primary",
  },
};

export const PrimaryDestructive: Story = {
  args: {
    kind: "primary",
    destructive: true,
  },
};

export const Secondary: Story = {
  args: {
    kind: "secondary",
  },
};

export const SecondaryDestructive: Story = {
  args: {
    kind: "secondary",
    destructive: true,
  },
};

export const Tertiary: Story = {
  args: {
    kind: "tertiary",
  },
};

export const TertiaryDestructive: Story = {
  args: {
    kind: "tertiary",
    destructive: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    Icon: icons.VisibilityOnIcon,
  },
};

export const SmallWithIcon: Story = {
  args: {
    ...Primary.args,
    size: "sm",
    Icon: icons.VisibilityOnIcon,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    ...Primary.args,
    as: "a",
    href: "https://example.org",
  },
};

export const LinkDisabled: Story = {
  args: {
    ...Link.args,
    disabled: true,
  },
};
