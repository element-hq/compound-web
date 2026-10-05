/*
Copyright 2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { TextButton } from "./TextButton";

describe("TextButton", () => {
  it("renders", () => {
    const { asFragment } = render(<TextButton>Text button</TextButton>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<TextButton onClick={onClick}>Text button</TextButton>);
    await userEvent.click(screen.getByRole("button", { name: "Text button" }));
    expect(onClick).toHaveBeenCalled();
  });
});
