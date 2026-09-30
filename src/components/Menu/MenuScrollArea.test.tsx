/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { MenuScrollArea } from "./MenuScrollArea";

function scrolledTo(area: HTMLElement, scrollTop: number): void {
  Object.defineProperties(area, {
    clientHeight: { configurable: true, value: 100 },
    scrollHeight: { configurable: true, value: 300 },
    scrollTop: { configurable: true, value: scrollTop },
  });
  fireEvent.scroll(area);
}

describe("MenuScrollArea", () => {
  it("marks when there is more below", () => {
    render(<MenuScrollArea data-testid="area">Items</MenuScrollArea>);
    const area = screen.getByTestId("area");

    scrolledTo(area, 0);
    expect(area).toHaveAttribute("data-more-below");
    scrolledTo(area, 100);
    expect(area).toHaveAttribute("data-more-below");
    scrolledTo(area, 200);
    expect(area).not.toHaveAttribute("data-more-below");
  });

  it("marks nothing where nothing overflows", () => {
    render(<MenuScrollArea data-testid="area">Items</MenuScrollArea>);
    expect(screen.getByTestId("area")).not.toHaveAttribute("data-more-below");
  });
});
