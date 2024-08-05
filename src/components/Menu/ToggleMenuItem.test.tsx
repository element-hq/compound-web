/*
Copyright 2023-2024 New Vector Ltd

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
