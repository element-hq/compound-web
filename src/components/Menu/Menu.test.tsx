/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi, onTestFinished } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";

import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { SubMenu } from "./SubMenu";
import { PortalRoot } from "../PortalRoot/PortalRoot";
import { Button } from "../Button/Button";
import userEvent from "@testing-library/user-event";
import { getPlatform } from "../../utils/platform";

vi.mock("../../utils/platform", () => ({ getPlatform: vi.fn(() => "other") }));
vi.hoisted(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    enumerable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

/**
 * A portal root of its own, next to the body's other children, so that we can
 * tell what went into it and what went straight into the body.
 */
function makePortalRoot(): HTMLDivElement {
  const root = document.createElement("div");
  document.body.appendChild(root);
  onTestFinished(() => root.remove());
  return root;
}

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

  describe("in a PortalRoot", () => {
    const renderMenu = (
      root: HTMLElement | null,
      subMenuOpen = false,
    ): void => {
      render(
        <PortalRoot root={root}>
          <Menu
            title="Settings"
            open={true}
            onOpenChange={vi.fn()}
            trigger={<Button>Open menu</Button>}
          >
            <MenuItem
              Icon={UserProfileIcon}
              label="Profile"
              onSelect={() => {}}
            />
            <SubMenu
              open={subMenuOpen}
              trigger={
                <MenuItem
                  Icon={NotificationsIcon}
                  label="Notifications"
                  onSelect={null}
                />
              }
            >
              <MenuItem label="All" onSelect={() => {}} />
            </SubMenu>
          </Menu>
        </PortalRoot>,
      );
    };

    it("portals a floating menu into the root", () => {
      const root = makePortalRoot();
      renderMenu(root);
      expect(root).toContainElement(screen.getByRole("menu"));
    });

    it("portals a drawer menu into the root", async () => {
      await withPlatform("android", async () => {
        const root = makePortalRoot();
        renderMenu(root);
        expect(root).toContainElement(screen.getByRole("menu"));
      });
    });

    it("portals a submenu into the root", async () => {
      const root = makePortalRoot();
      renderMenu(root, true);
      const item = await waitFor(() =>
        screen.getByRole("menuitem", { name: "All" }),
      );
      expect(root).toContainElement(item);
    });

    it("portals into the body without a root", () => {
      const root = makePortalRoot();
      renderMenu(null);
      const menu = screen.getByRole("menu");
      expect(document.body).toContainElement(menu);
      expect(root).not.toContainElement(menu);
    });
  });
});
