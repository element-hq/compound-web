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
