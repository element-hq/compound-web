/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { RadioMenuItem } from "./RadioMenuItem.tsx";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("RadioMenuItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <RadioMenuItem label="Always show" checked={false} onSelect={() => {}} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("toggles", async () => {
    const user = userEvent.setup();
    const toggle = vi.fn();
    render(
      <RadioMenuItem label="Always show" checked={false} onSelect={toggle} />,
    );

    // Try toggling using keyboard controls
    await user.tab();
    await user.keyboard("[Space]");
    expect(toggle).toBeCalledTimes(1);
    toggle.mockClear();

    // Try toggling by clicking
    await user.click(screen.getByRole("menuitemradio"));
    expect(toggle).toBeCalledTimes(1);
    toggle.mockClear();
  });
});
