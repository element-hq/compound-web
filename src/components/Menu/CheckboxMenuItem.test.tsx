/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { CheckboxMenuItem } from "./CheckboxMenuItem.tsx";

describe("CheckboxMenuItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <CheckboxMenuItem
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
      <CheckboxMenuItem
        label="Always show"
        checked={false}
        onSelect={toggle}
      />,
    );

    // Try checking using keyboard controls
    await user.tab();
    await user.keyboard("[Space]");
    expect(toggle).toBeCalledTimes(1);
    toggle.mockClear();

    // Try checking by clicking
    await user.click(screen.getByRole("menuitemcheckbox"));
    expect(toggle).toBeCalledTimes(1);
    toggle.mockClear();

    // Also try clicking the label specifically (as this has regressed in the
    // past)
    await user.click(screen.getByText("Always show"));
    expect(toggle).toBeCalledTimes(1);
  });
});
