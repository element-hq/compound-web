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
import { MenuScrollWatcher } from "./MenuScrollWatcher";

// jsdom lays nothing out: boxes set here, and 40px tall otherwise.
const boxes = new Map<Element, DOMRect>();

/** Lays out the area 0–100px, with 16px of padding at its foot. */
function laidOut(area: HTMLElement, footer: HTMLElement, footerTop: number) {
  boxes.set(area, DOMRect.fromRect({ y: 0, height: 100 }));
  boxes.set(footer, DOMRect.fromRect({ y: footerTop, height: 40 }));
  fireEvent.scroll(area);
}

describe("MenuScrollSection", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    boxes.clear();
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
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: Element) {
        return boxes.get(this) ?? DOMRect.fromRect({ height: 40 });
      },
    );
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
    expect(
      area.style.getPropertyValue("--cpd-menu-scroll-header-clearance"),
    ).toBe("40px");
    // The item and the padding it sticks above.
    expect(
      area.style.getPropertyValue("--cpd-menu-scroll-footer-clearance"),
    ).toBe("56px");
  });

  it("ends the fade above the sticky item only while it is pinned", () => {
    const area = renderSections();
    const footer = screen.getByText("Reading").parentElement!;

    // Held at the foot, above the padding.
    laidOut(area, footer, 44);
    expect(footer).toHaveAttribute("data-pinned");
    expect(area).toHaveAttribute("data-footer-pinned");
    expect(area.style.getPropertyValue("--cpd-menu-scroll-footer-inset")).toBe(
      "56px",
    );

    // Its section scrolled out of view below.
    laidOut(area, footer, 120);
    expect(footer).not.toHaveAttribute("data-pinned");
    expect(area).not.toHaveAttribute("data-footer-pinned");
    expect(area.style.getPropertyValue("--cpd-menu-scroll-footer-inset")).toBe(
      "",
    );
  });

  it("reads no layout on a scroll where no section has a footer", () => {
    render(
      <MenuScrollArea data-testid="area">
        <MenuScrollSection title="Speakers">
          <p>Speaker</p>
        </MenuScrollSection>
      </MenuScrollArea>,
    );
    const area = screen.getByTestId("area");
    const layout = vi.spyOn(area, "getBoundingClientRect");

    fireEvent.scroll(area);
    expect(layout).not.toHaveBeenCalled();
  });

  it("clears what it wrote once it stops following", () => {
    const area = renderSections();
    const footer = screen.getByText("Reading").parentElement!;
    laidOut(area, footer, 44);

    // A second watcher on the same element, so its cleanup can be checked
    // while the element stays.
    const watcher = new MenuScrollWatcher();
    watcher.addFooter(footer);
    watcher.attach(area)();

    expect(area).not.toHaveAttribute("data-footer-pinned");
    expect(footer).not.toHaveAttribute("data-pinned");
    expect(area.getAttribute("style")).not.toContain("--cpd-menu-scroll");
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
