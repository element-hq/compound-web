/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
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
});
