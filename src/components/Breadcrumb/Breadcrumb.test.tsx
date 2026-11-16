/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type Mock,
} from "vitest";
import { composeStories } from "@storybook/react";
import * as stories from "./Breadcrumb.stories.tsx";
import { act, render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Breadcrumb } from "./Breadcrumb.tsx";

const { Default, DisabledBack } = composeStories(stories);

describe("Breadcrumb", () => {
  it("should render", () => {
    render(<Default />);
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it("should disable back button", () => {
    const { getByLabelText } = render(<DisabledBack />);
    expect(getByLabelText("Back")).toHaveAttribute("aria-disabled", "true");
  });

  it("should call onPageClick when a page is clicked", async () => {
    const user = userEvent.setup();
    const onPageClick = vi.fn();
    const onBackClick = vi.fn();

    render(
      <Breadcrumb
        pages={["1st level page", "2nd level page", "Current page"]}
        onPageClick={onPageClick}
        onBackClick={onBackClick}
        backLabel="Back"
      />,
    );

    // Click listener
    await user.click(screen.getByRole("button", { name: "1st level page" }));
    expect(onPageClick).toHaveBeenCalledWith("1st level page", 0);

    onPageClick.mockReset();
    // Keyboard listener
    await user.type(
      screen.getByRole("button", { name: "1st level page" }),
      " ",
    );
    expect(onPageClick).toHaveBeenCalledWith("1st level page", 0);

    // Back button
    await user.click(screen.getByRole("button", { name: "Back" }));
    expect(onBackClick).toHaveBeenCalled();
  });
});

/**
 * jsdom doesn't lay anything out, so fake just enough layout for the
 * collapsing logic: every page is 10px per character, and the list behaves
 * like the CSS does, start-aligned when the pages fit and end-aligned
 * (overflowing the start edge) when they don't.
 */
describe("Breadcrumb collapsing", () => {
  const PAGES = ["Root", "Page 1", "Page 2", "Page 3", "Current page"];
  // Widths with the fake layout: all pages 340px, with "Page 1" collapsed
  // 290px, with "Page 1" and "Page 2" collapsed 230px.

  let listWidth: number;
  let resizeCallbacks: Set<() => void>;
  let disconnect: Mock<() => void>;

  function rect(left: number, width: number): DOMRect {
    return {
      left,
      right: left + width,
      width,
      x: left,
      y: 0,
      top: 0,
      bottom: 0,
      height: 0,
    } as DOMRect;
  }

  beforeEach(() => {
    listWidth = 1000;
    resizeCallbacks = new Set();
    disconnect = vi.fn<() => void>();

    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(
      function (this: HTMLElement) {
        return this.tagName === "OL" ? listWidth : 0;
      },
    );

    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(
      function (this: HTMLElement) {
        if (this.tagName === "OL") return rect(0, listWidth);
        if (this.tagName !== "LI" || !this.parentElement) return rect(0, 0);

        const items = Array.from(this.parentElement.children);
        const widths = items.map((item) => item.textContent!.length * 10);
        const total = widths.reduce((sum, width) => sum + width, 0);
        const index = items.indexOf(this);
        const start = total <= listWidth ? 0 : listWidth - total;
        const left =
          start + widths.slice(0, index).reduce((sum, width) => sum + width, 0);

        // Mirror the layout for right-to-left.
        if (this.closest("[dir=rtl]")) {
          return rect(listWidth - left - widths[index], widths[index]);
        }
        return rect(left, widths[index]);
      },
    );

    vi.stubGlobal(
      "ResizeObserver",
      class {
        private readonly callback: () => void;
        public constructor(callback: () => void) {
          this.callback = callback;
          resizeCallbacks.add(callback);
        }
        public observe = vi.fn();
        public unobserve = vi.fn();
        public disconnect = (): void => {
          resizeCallbacks.delete(this.callback);
          disconnect();
        };
      },
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  function renderBreadcrumb(
    pages = PAGES,
    props: Partial<React.ComponentProps<typeof Breadcrumb>> = {},
  ): ReturnType<typeof render> {
    return render(
      <Breadcrumb
        pages={pages}
        onPageClick={vi.fn()}
        backLabel="Back"
        {...props}
      />,
    );
  }

  function resize(width: number): void {
    listWidth = width;
    act(() => resizeCallbacks.forEach((callback) => callback()));
  }

  function visibleItems(): string[] {
    return screen.getAllByRole("listitem").map((item) => item.textContent!);
  }

  it("shows every page when there is enough room", () => {
    renderBreadcrumb();
    expect(visibleItems()).toEqual(PAGES);
  });

  it("collapses only as many pages as needed", () => {
    listWidth = 300;
    renderBreadcrumb();
    expect(visibleItems()).toEqual([
      "Root",
      "…",
      "Page 2",
      "Page 3",
      "Current page",
    ]);
    expect(screen.getByTitle("Page 1")).toHaveTextContent("…");
  });

  it("collapses from the left, keeping the root and parent", () => {
    listWidth = 250;
    renderBreadcrumb();
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);
    expect(screen.getByTitle("Page 1 / Page 2")).toBeInTheDocument();
  });

  it("stops collapsing when only the root, parent and current page are left", () => {
    listWidth = 50;
    renderBreadcrumb();
    // Still overflowing, but the rest is left to the CSS to clip.
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);
  });

  it("never collapses with three pages or fewer", () => {
    listWidth = 50;
    renderBreadcrumb(["Root", "Parent", "Current page"]);
    expect(visibleItems()).toEqual(["Root", "Parent", "Current page"]);
  });

  it("restores and re-collapses pages as the width changes", () => {
    listWidth = 250;
    renderBreadcrumb();
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);

    resize(1000);
    expect(visibleItems()).toEqual(PAGES);

    // Regression: collapsing again after being fully expanded.
    resize(250);
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);
  });

  it("ignores resize notifications when the width hasn't changed", () => {
    listWidth = 250;
    renderBreadcrumb();
    resize(250);
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);
  });

  it("re-measures when the pages change", () => {
    listWidth = 250;
    const { rerender } = renderBreadcrumb();
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);

    rerender(
      <Breadcrumb
        pages={["Root", "Parent", "Current"]}
        onPageClick={vi.fn()}
        backLabel="Back"
      />,
    );
    expect(visibleItems()).toEqual(["Root", "Parent", "Current"]);
  });

  it("collapses in right-to-left layouts", () => {
    listWidth = 250;
    renderBreadcrumb(PAGES, { dir: "rtl" });
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);
  });

  it("stops observing resizes when unmounted", () => {
    const { unmount } = renderBreadcrumb();
    unmount();
    expect(disconnect).toHaveBeenCalled();
    expect(resizeCallbacks.size).toBe(0);
  });

  it("still collapses on first render without ResizeObserver", () => {
    vi.stubGlobal("ResizeObserver", undefined);
    listWidth = 250;
    renderBreadcrumb();
    expect(visibleItems()).toEqual(["Root", "…", "Page 3", "Current page"]);
  });
});
