/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";
import userEvent from "@testing-library/user-event";

import * as stories from "./IconButton.stories";
import { IconButton } from "./IconButton";
import { TooltipProvider } from "../../Tooltip/TooltipProvider";
import { UserIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

const {
  Default,
  DefaultDisabled,
  WithIndicator,
  WithSuccessIndicator,
  WithCriticalIndicator,
  WithIndicatorDisabled,
  WithSecondaryKind,
  WithSecondaryKindAndNoBackground,
} = composeStories(stories);

describe("IconButton", () => {
  it("renders a Default IconButton", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it("renders a DefaultDisabled IconButton", () => {
    const { container } = render(<DefaultDisabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithIndicator IconButton", () => {
    const { container } = render(<WithIndicator />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithSuccessIndicator IconButton", () => {
    const { container } = render(<WithSuccessIndicator />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithCriticalIndicator IconButton", () => {
    const { container } = render(<WithCriticalIndicator />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithIndicatorDisabled IconButton", () => {
    const { container } = render(<WithIndicatorDisabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithSecondaryKind IconButton", () => {
    const { container } = render(<WithSecondaryKind />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithSecondaryKindAndNoBackground IconButton", () => {
    const { container } = render(<WithSecondaryKindAndNoBackground />);
    expect(container).toMatchSnapshot();
  });
  it("calls onTooltipOpenChange when the tooltip opens and closes", async () => {
    const user = userEvent.setup();
    const onTooltipOpenChange = vi.fn();
    render(
      <TooltipProvider>
        <IconButton tooltip="Profile" onTooltipOpenChange={onTooltipOpenChange}>
          <UserIcon />
        </IconButton>
      </TooltipProvider>,
    );

    await user.tab();
    expect(screen.getByRole("button")).toHaveFocus();
    expect(onTooltipOpenChange).toHaveBeenLastCalledWith(
      true,
      expect.anything(),
      expect.anything(),
    );

    await user.tab();
    expect(onTooltipOpenChange).toHaveBeenLastCalledWith(
      false,
      expect.anything(),
      expect.anything(),
    );
  });
});
