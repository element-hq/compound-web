/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type ComponentType, type MouseEventHandler } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import CheckIcon from "@vector-im/compound-design-tokens/assets/web/icons/check";

import { Toast as ToastComponent } from "./Toast";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { fn } from "storybook/test";

/**
 * The real `Toast` props are a discriminated union (`onClick` and `onClose` are
 * mutually exclusive). Storybook's arg-type inference doesn't support such
 * unions — it intersects the members, collapsing the `never` discriminants and
 * leaving the args as `never`. We describe a permissive superset here purely
 * for the stories' types; the component still enforces the union for consumers.
 */
type StoryArgs = {
  className?: string;
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
  children?: React.ReactNode;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const meta = {
  title: "Toast",
  component: ToastComponent as ComponentType<StoryArgs>,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Would you like some toast?",
    // Storybook's `actions.argTypesRegex` ("^on[A-Z].*") otherwise auto-injects
    // spy functions for `onClose`/`onClick`, which would make every toast render
    // with a close button / as a clickable button. Default them off here; the
    // relevant stories opt back in explicitly.
    onClose: undefined,
    onClick: undefined,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=3627-42633&t=m0RMwUTXkukgU29g-0",
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<StoryArgs>;
export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Icon: Story = {
  args: {
    Icon: CheckIcon,
  },
};

export const CloseAndIcon: Story = {
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
  },
};

export const Multiline: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    Icon: CheckIcon,
    children: "Would you like some toast on multiple multiple multiple lines?",
  },
};

export const MultilineAndClose: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    Icon: CheckIcon,
    onClose: fn(),
    tooltip: "Close",
    children: "Would you like some toast on multiple multiple multiple lines?",
  },
};

/**
 * When `onClick` is provided, the whole toast becomes a button. This is
 * mutually exclusive with `onClose`, as a button cannot contain another button.
 */
export const Clickable: Story = {
  args: {
    onClick: fn(),
    children: "There are new messages, jump to them",
  },
};

export const ClickableWithIcon: Story = {
  args: {
    Icon: CheckIcon,
    onClick: fn(),
    children: "There are new messages, jump to them",
  },
};
