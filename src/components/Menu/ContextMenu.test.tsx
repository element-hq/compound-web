/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi, onTestFinished } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";

import { ContextMenu } from "./ContextMenu";
import { MenuItem } from "./MenuItem";
import { SubMenu } from "./SubMenu";
import NotificationsIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications";
import userEvent from "@testing-library/user-event";
import { PortalRoot } from "../PortalRoot/PortalRoot";
import { getPlatform } from "../../utils/platform";

vi.mock("../../utils/platform", () => ({ getPlatform: vi.fn(() => "other") }));

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

describe("ContextMenu", () => {
  function renderMenu(
    onOpenChange?: (open: boolean) => void,
    subMenuOpen = false,
  ) {
    return render(
      <ContextMenu
        title="Settings"
        onOpenChange={onOpenChange}
        trigger={<div>Open menu</div>}
        hasAccessibleAlternative
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
      </ContextMenu>,
    );
  }

  it("opens by right-clicking", async () => {
    const onOpenChange = vi.fn();
    renderMenu(onOpenChange);

    expect(screen.queryByRole("menu")).toBe(null);
    // Right-click the trigger area
    const trigger = screen.getByText("Open menu");
    await userEvent.pointer([{ target: trigger }, { keys: "[MouseRight]" }]);
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
  });

  // Here it would be nice to also test opening by long-pressing, but that
  // requires fake timers, and user-event appears to stall out when using fake
  // timers :(

  it("shows submenu items when open", async () => {
    renderMenu(undefined, true);

    const trigger = screen.getByText("Open menu");
    await userEvent.pointer([{ target: trigger }, { keys: "[MouseRight]" }]);
    expect(screen.getByRole("menuitem", { name: "All" })).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: "Mentions only" }),
    ).toBeInTheDocument();
  });

  describe("in a PortalRoot", () => {
    const menu = (
      root: HTMLElement | null,
      subMenuOpen: boolean,
    ): React.ReactElement => (
      <PortalRoot root={root}>
        <ContextMenu
          title="Settings"
          trigger={<div>Open menu</div>}
          hasAccessibleAlternative
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
        </ContextMenu>
      </PortalRoot>
    );

    async function openMenuIn(
      root: HTMLElement | null,
    ): Promise<ReturnType<typeof render>> {
      const result = render(menu(root, false));
      await userEvent.pointer([
        { target: screen.getByText("Open menu") },
        { keys: "[MouseRight]" },
      ]);
      return result;
    }

    it("portals a floating menu into the root", async () => {
      const root = makePortalRoot();
      await openMenuIn(root);
      expect(root).toContainElement(await screen.findByRole("menu"));
    });

    it("portals a drawer menu into the root", async () => {
      vi.mocked(getPlatform).mockReturnValue("android");
      onTestFinished(() => {
        vi.mocked(getPlatform).mockReturnValue("other");
      });
      const root = makePortalRoot();
      await openMenuIn(root);
      expect(root).toContainElement(await screen.findByRole("menu"));
    });

    it("portals a submenu into the root", async () => {
      const root = makePortalRoot();
      const { rerender } = await openMenuIn(root);
      // Open the submenu once the menu is open, as a user would. A submenu
      // that is already open when the menu opens is a known, unhandled edge
      // case: see ContextSubMenuWrapper.
      rerender(menu(root, true));
      expect(root).toContainElement(
        await screen.findByRole("menuitem", { name: "All" }),
      );
    });

    it("portals into the body without a root", async () => {
      const root = makePortalRoot();
      await openMenuIn(null);
      const menu = await screen.findByRole("menu");
      expect(document.body).toContainElement(menu);
      expect(root).not.toContainElement(menu);
    });
  });
});
