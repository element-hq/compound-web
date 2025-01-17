/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";

import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Button } from "../Button/Button";
import userEvent from "@testing-library/user-event";
import { getPlatform } from "../../utils/platform";

vi.mock("../../utils/platform", () => ({ getPlatform: vi.fn(() => "other") }));
vi.spyOn(window, "matchMedia").mockReturnValue({
  matches: false,
} as unknown as MediaQueryList);

async function withPlatform(
  platform: ReturnType<typeof getPlatform>,
  continuation: () => Promise<void>,
) {
  const mock = vi.mocked(getPlatform).mockReturnValue(platform);
  try {
    await continuation();
  } finally {
    mock.mockRestore();
  }
}

describe("Menu", () => {
  it("opens", async () => {
    const onOpenChange = vi.fn();
    render(
      <Menu
        title="Settings"
        open={false}
        onOpenChange={onOpenChange}
        trigger={<Button>Open menu</Button>}
      >
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      </Menu>,
    );

    expect(screen.queryByRole("menu")).toBe(null);
    await userEvent.click(screen.getByRole("button"));
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
  });

  it("doesn't open if disabled", async () => {
    const onOpenChange = vi.fn();
    render(
      <Menu
        title="Settings"
        open={false}
        onOpenChange={onOpenChange}
        trigger={<Button disabled>Open menu</Button>}
      >
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      </Menu>,
    );

    expect(screen.queryByRole("menu")).toBe(null);
    await userEvent.click(screen.getByRole("button"));
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("closes as a floating menu", async () => {
    const onOpenChange = vi.fn();
    render(
      <Menu
        title="Settings"
        open={true}
        onOpenChange={onOpenChange}
        trigger={<Button>Open menu</Button>}
      >
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      </Menu>,
    );

    // Floating menus have a heading
    screen.getByRole("menu");
    screen.getByRole("heading", { name: "Settings" });
    await userEvent.click(screen.getByRole("menuitem", { name: "Profile" }));
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it("closes as a drawer menu", async () => {
    // Simulate a touchscreen so that the menu turns into a drawer
    await withPlatform("android", async () => {
      const onOpenChange = vi.fn();
      render(
        <Menu
          title="Settings"
          open={true}
          onOpenChange={onOpenChange}
          trigger={<Button>Open menu</Button>}
        >
          <MenuItem
            Icon={UserProfileIcon}
            label="Profile"
            onSelect={() => {}}
          />
        </Menu>,
      );

      // Drawers don't have a heading
      screen.getByRole("menu");
      expect(screen.queryByRole("heading", { name: "Settings" })).toBe(null);
      // Intentionally avoiding userEvent here, because that would trigger a
      // callback that calls Element.setPointerCapture, which apparently JSDOM
      // doesn't implement
      screen.getByRole("menuitem", { name: "Profile" }).click();
      expect(onOpenChange).toHaveBeenLastCalledWith(false);
    });
  });

  it("doesn't close if preventDefault is called", async () => {
    await withPlatform("ios", async () => {
      const onOpenChange = vi.fn();
      render(
        <Menu
          title="Settings"
          open={true}
          onOpenChange={onOpenChange}
          trigger={<Button>Open menu</Button>}
        >
          <MenuItem
            Icon={UserProfileIcon}
            label="Profile"
            onSelect={(e) => e.preventDefault()}
          />
        </Menu>,
      );

      screen.getByRole("menu");
      expect(screen.queryByRole("heading", { name: "Settings" })).toBe(null);
      screen.getByRole("menuitem", { name: "Profile" }).click();
      expect(onOpenChange).not.toHaveBeenCalledWith(false);
    });
  });

  it("renders without title if showTitle is false", async () => {
    render(
      <Menu
        open={true}
        onOpenChange={vi.fn()}
        trigger={<Button>Open menu</Button>}
        title="Untitleed Menu"
        showTitle={false}
      >
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      </Menu>,
    );

    expect(screen.queryByRole("heading")).toBe(null);
  });
});
