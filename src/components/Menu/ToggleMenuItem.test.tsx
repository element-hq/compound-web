/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import VisibilityOnIcon from "@vector-im/compound-design-tokens/assets/web/icons/visibility-on";

import { ToggleMenuItem } from "./ToggleMenuItem";
import userEvent from "@testing-library/user-event";

describe("ToggleMenuItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ToggleMenuItem
        Icon={VisibilityOnIcon}
        label="Always show"
        checked={false}
        onSelect={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("toggles", async () => {
    const user = userEvent.setup();
    const toggle = vi.fn();
    render(
      <ToggleMenuItem
        Icon={VisibilityOnIcon}
        label="Always show"
        checked={false}
        onSelect={toggle}
      />,
    );

    // Try toggling using keyboard controls
    await user.tab();
    await user.keyboard("[Space]");
    expect(toggle).toBeCalledTimes(1);
    toggle.mockClear();

    // Try toggling by clicking
    await user.click(screen.getByRole("menuitemcheckbox"));
    expect(toggle).toBeCalledTimes(1);
    toggle.mockClear();

    // Also try clicking the label specifically (as this has regressed in the
    // past)
    await user.click(screen.getByText("Always show"));
    expect(toggle).toBeCalledTimes(1);
  });
});
