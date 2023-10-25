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
import UserProfileIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";

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
