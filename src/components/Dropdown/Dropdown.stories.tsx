/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/
import { Dropdown } from "./Dropdown";
import { expect, fn, userEvent, within } from "storybook/test";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import React, { type ComponentProps, useState } from "react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import SettingsIcon from "@vector-im/compound-design-tokens/assets/web/icons/settings";
import { Menu } from "../Menu/Menu";
import { MenuItem } from "../Menu/MenuItem";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    controls: {
      include: ["defaultValue", "placeholder", "error"],
    },
  },
  argTypes: {
    label: {
      type: "string",
    },
    error: {
      type: "string",
    },
    values: {
      type: "string",
    },
  },
  args: {
    label: "Label",
    onValueChange: fn(),
    values: ["Option1", "Option2", "Option3"],
    renderItem: (value) =>
      value ? value?.replace("Option", "Option ") : "Select an option",
  },
} satisfies Meta<ComponentProps<typeof Dropdown<string>>>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-5732&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithHelpLabel: Story = {
  args: {
    helpLabel: "Optional help text.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-345&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithError: Story = {
  args: {
    error: "Select an option",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-370&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "Option2",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=799-381&t=g2Ex9sbzgku1nTIN-4",
    },
  },
};

export const WithCustomTrigger: Story = {
  args: {
    trigger: (props) => (
      <button aria-label="Custom trigger" {...props}>
        🐴
      </button>
    ),
    label: null,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?node-id=13501-3908&t=udyWNnl3nVzp2l52-0",
    },
  },
};

/**
 * The "menu" variant shows the values as a floating menu of items,
 * beside the trigger.
 */
export const MenuVariant: Story = {
  args: {
    variant: "menu",
    defaultValue: "Option2",
  },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await body.findByRole("button", { name: /Label/ }));
    await expect(
      body.findByRole("menuitem", { name: "Option 2" }),
    ).resolves.toBeVisible();
  },
};

const InMenuTemplate: React.FC<ComponentProps<typeof Dropdown<string>>> = (
  props,
) => {
  const [open, setOpen] = useState(true);
  return (
    <Menu
      title="Settings"
      open={open}
      onOpenChange={setOpen}
      side="right"
      align="start"
      trigger={<button>Open menu</button>}
    >
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <Dropdown
        {...props}
        variant="menu"
        trigger={(triggerProps) => (
          <button type="button" {...triggerProps}>
            Choose an option
          </button>
        )}
      />
      <MenuItem Icon={SettingsIcon} label="Settings" onSelect={() => {}} />
    </Menu>
  );
};

/**
 * Inside a Menu, the "menu" variant opens beside the parent menu, level with
 * the trigger, like a submenu. Unlike a submenu, it only opens on click or
 * with the keyboard (Enter, Space or the right arrow key).
 */
export const MenuVariantInsideMenu: Story = {
  render: (args) => (
    <InMenuTemplate {...(args as ComponentProps<typeof Dropdown<string>>)} />
  ),
  args: {
    label: null,
    menuTitle: "Options",
    defaultValue: "Option1",
  },
  tags: ["axe-exclude"],
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(
      await body.findByRole("button", { name: "Choose an option" }),
    );
    await expect(
      body.findByRole("menuitem", { name: "Option 1" }),
    ).resolves.toBeVisible();
  },
};
