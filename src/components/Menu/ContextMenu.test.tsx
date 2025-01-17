/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";

import { ContextMenu } from "./ContextMenu";
import { MenuItem } from "./MenuItem";
import userEvent from "@testing-library/user-event";

describe("ContextMenu", () => {
  it("opens by right-clicking", async () => {
    const onOpenChange = vi.fn();
    render(
      <ContextMenu
        title="Settings"
        onOpenChange={onOpenChange}
        trigger={<div>Open menu</div>}
        hasAccessibleAlternative
      >
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      </ContextMenu>,
    );

    expect(screen.queryByRole("menu")).toBe(null);
    // Right-click the trigger area
    const trigger = screen.getByText("Open menu");
    await userEvent.pointer([{ target: trigger }, { keys: "[MouseRight]" }]);
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
  });

  // Here it would be nice to also test opening by long-pressing, but that
  // requires fake timers, and user-event appears to stall out when using fake
  // timers :(
});
