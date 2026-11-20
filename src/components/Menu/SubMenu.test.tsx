/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { describe, it, expect, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";

import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { SubMenu } from "./SubMenu";

describe("SubMenu", () => {
  function renderMenu(subMenuOpen = false) {
    return render(
      <Menu
        title="Settings"
        open={true}
        onOpenChange={vi.fn()}
        trigger={<button>Open menu</button>}
      >
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
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
          <MenuItem label="Mentions only" onSelect={() => {}} />
        </SubMenu>
      </Menu>,
    );
  }

  it("renders a submenu trigger within a menu", () => {
    renderMenu();

    screen.getByRole("menu");
    screen.getByRole("menuitem", { name: "Profile" });
    screen.getByRole("menuitem", { name: "Notifications" });
  });

  it("shows submenu items when open", async () => {
    renderMenu(true);

    await waitFor(() =>
      expect(screen.getByRole("menuitem", { name: "All" })).toBeInTheDocument(),
    );
    expect(
      screen.getByRole("menuitem", { name: "Mentions only" }),
    ).toBeInTheDocument();
  });

  it("opens a controlled submenu straight away once the parent has opened", async () => {
    const { rerender } = render(<OpenOnMenu open={false} />);
    // Let the parent menu's opening animation finish
    await act(() => new Promise((r) => setTimeout(r, 200)));

    rerender(<OpenOnMenu open={true} />);

    expect(screen.getByRole("menuitem", { name: "All" })).toBeInTheDocument();
  });

  describe("openOn", () => {
    const subMenuItem = (): HTMLElement | null =>
      screen.queryByRole("menuitem", { name: "All" });
    const trigger = (): HTMLElement =>
      screen.getByRole("menuitem", { name: "Notifications" });

    it("opens on hover by default", async () => {
      const user = userEvent.setup();
      render(<OpenOnMenu />);

      await user.hover(trigger());

      await waitFor(() => expect(subMenuItem()).toBeInTheDocument());
    });

    it("does not open on hover in click mode", async () => {
      const user = userEvent.setup();
      render(<OpenOnMenu openOn="click" />);

      await user.hover(trigger());
      // Longer than Radix's hover-open delay
      await act(() => new Promise((r) => setTimeout(r, 200)));

      expect(subMenuItem()).not.toBeInTheDocument();
    });

    it("opens and closes on click in click mode", async () => {
      const user = userEvent.setup();
      render(<OpenOnMenu openOn="click" />);

      await user.click(trigger());
      await waitFor(() => expect(subMenuItem()).toBeInTheDocument());
      expect(trigger()).toHaveAttribute("aria-expanded", "true");

      await user.click(trigger());
      await waitFor(() => expect(subMenuItem()).not.toBeInTheDocument());
      expect(trigger()).toHaveAttribute("aria-expanded", "false");
    });

    it("stays open when the pointer leaves the trigger in click mode", async () => {
      const user = userEvent.setup();
      render(<OpenOnMenu openOn="click" />);

      await user.click(trigger());
      await waitFor(() => expect(subMenuItem()).toBeInTheDocument());
      await user.hover(screen.getByText("Not an item"));

      expect(subMenuItem()).toBeInTheDocument();
    });

    it("closes when another parent item is hovered in click mode", async () => {
      const user = userEvent.setup();
      render(<OpenOnMenu openOn="click" />);

      await user.click(trigger());
      await waitFor(() => expect(subMenuItem()).toBeInTheDocument());
      await user.hover(screen.getByRole("menuitem", { name: "Profile" }));

      await waitFor(() => expect(subMenuItem()).not.toBeInTheDocument());
    });

    it("asks a controlled submenu to close on a second click in click mode", async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();
      render(
        <OpenOnMenu openOn="click" open={true} onOpenChange={onOpenChange} />,
      );
      await waitFor(() => expect(subMenuItem()).toBeInTheDocument());

      await user.click(trigger());

      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });
});

function OpenOnMenu(props: {
  openOn?: "hover" | "click";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <Menu
      title="Settings"
      open={true}
      onOpenChange={vi.fn()}
      trigger={<button>Open menu</button>}
    >
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <p>Not an item</p>
      <SubMenu
        {...props}
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
  );
}
