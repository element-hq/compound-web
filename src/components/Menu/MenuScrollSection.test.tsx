/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { afterEach, describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { MenuScrollArea } from "./MenuScrollArea";
import { MenuScrollSection } from "./MenuScrollSection";

/** Lays out the area 0–100px, with 16px of padding at its foot. */
function laidOut(area: HTMLElement, footer: HTMLElement, footerTop: number) {
  vi.spyOn(area, "getBoundingClientRect").mockReturnValue(
    DOMRect.fromRect({ y: 0, height: 100 }),
  );
  vi.spyOn(footer, "getBoundingClientRect").mockReturnValue(
    DOMRect.fromRect({ y: footerTop, height: 40 }),
  );
  fireEvent.scroll(area);
}

describe("MenuScrollSection", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  function renderSections(): HTMLElement {
    // Reports each part's size as soon as it is observed, as a browser would.
    vi.stubGlobal(
      "ResizeObserver",
      class {
        public constructor(private readonly callback: () => void) {}
        public observe = (): void => this.callback();
        public unobserve = vi.fn();
        public disconnect = vi.fn();
      },
    );
    vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockReturnValue(40);
    render(
      <MenuScrollArea data-testid="area" style={{ paddingBlockEnd: "16px" }}>
        <MenuScrollSection title="Speakers">
          <p>Speaker</p>
        </MenuScrollSection>
        <MenuScrollSection
          title="Microphones"
          stickyBottomItem={<p>Reading</p>}
        >
          <p>Microphone</p>
        </MenuScrollSection>
      </MenuScrollArea>,
    );
    return screen.getByTestId("area");
  }

  it("names each group by its title, shown hidden within it", () => {
    renderSections();
    const group = screen.getByRole("group", { name: "Microphones" });
    expect(group.firstElementChild).toHaveAttribute("aria-hidden");
    expect(group.firstElementChild).toHaveTextContent("Microphones");
  });

  it("holds the sticky item last among the items, apart from the title", () => {
    renderSections();
    const group = screen.getByRole("group", { name: "Microphones" });
    const items = group.lastElementChild!;
    expect(items.lastElementChild).toHaveTextContent("Reading");
    expect(items).not.toContainElement(group.firstElementChild as HTMLElement);
  });

  it("keeps the scroll padding clear of the title and the sticky item", () => {
    const area = renderSections();
    expect(area.style.getPropertyValue("--header-clearance")).toBe("40px");
    // The item and the padding it sticks above.
    expect(area.style.getPropertyValue("--footer-clearance")).toBe("56px");
  });

  it("ends the fade above the sticky item only while it is pinned", () => {
    const area = renderSections();
    const footer = screen.getByText("Reading").parentElement!;

    // Held at the foot, above the padding.
    laidOut(area, footer, 44);
    expect(footer).toHaveAttribute("data-pinned");
    expect(area).toHaveAttribute("data-footer-pinned");
    expect(area.style.getPropertyValue("--footer-inset")).toBe("56px");

    // Its section scrolled out of view below.
    laidOut(area, footer, 120);
    expect(footer).not.toHaveAttribute("data-pinned");
    expect(area).not.toHaveAttribute("data-footer-pinned");
    expect(area.style.getPropertyValue("--footer-inset")).toBe("");
  });

  it("holds nothing at the foot for a false item", () => {
    render(
      <MenuScrollSection title="Microphones" stickyBottomItem={false}>
        <p>Microphone</p>
      </MenuScrollSection>,
    );
    const items = screen.getByRole("group").lastElementChild!;
    expect(items.children).toHaveLength(1);
  });
});
