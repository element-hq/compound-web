/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./Toast.stories";
import userEvent from "@testing-library/user-event";

const { Default, Icon, CloseAndIcon, Multiline } = composeStories(stories);

describe("Toast", () => {
  it("renders", () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with an icon", () => {
    const { asFragment } = render(<Icon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with a close button and icon", () => {
    const { asFragment } = render(<CloseAndIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders multiline", () => {
    const { asFragment } = render(<Multiline />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has no close button when onClose is not provided", () => {
    render(<Default />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<CloseAndIcon onClose={onClose} />);

    await user.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
