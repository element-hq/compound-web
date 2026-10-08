/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi, onTestFinished } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React, { act } from "react";

import { IconButton } from "../Button";
import userEvent from "@testing-library/user-event";
import { TooltipProvider } from "./TooltipProvider";
import { Tooltip } from "./Tooltip";
import { PortalRoot } from "../PortalRoot/PortalRoot";
import { UserIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

/**
 * Patches an element to always match :focus-visible whenever it's in focus.
 * JSDOM doesn't seem to support this selector on its own.
 */
function mockFocusVisible(e: Element): void {
  const originalMatches = e.matches.bind(e);
  vi.spyOn(e, "matches").mockImplementation(
    (selectors) =>
      originalMatches(selectors) ||
      (selectors === ":focus-visible" && e === document.activeElement),
  );
}

/**
 * A portal root of its own, next to the body's other children, so that we can
 * tell what went into it and what went straight into the body.
 */
function makePortalRoot(): HTMLDivElement {
  const root = document.createElement("div");
  document.body.appendChild(root);
  onTestFinished(() => root.remove());
  return root;
}

describe("Tooltip", () => {
  it("renders open by default", () => {
    render(
      <TooltipProvider>
        <Tooltip open={true} label="I'm always open">
          <IconButton>
            <UserIcon />
          </IconButton>
        </Tooltip>
      </TooltipProvider>,
    );
    // tooltip labels button and does not use role="tooltip"
    screen.getByRole("button", { name: "I'm always open" });
    expect(screen.queryByRole("tooltip")).toBe(null);
  });

  it("renders closed by default", () => {
    render(
      <TooltipProvider>
        <Tooltip open={false} description="You can't see me">
          <span>No tooltip to see here</span>
        </Tooltip>
      </TooltipProvider>,
    );
    // no tooltip, and no label either
    expect(screen.queryByRole("tooltip")).toBe(null);
    expect(screen.queryByRole("button", { name: /.*/ })).toBe(null);
  });

  it("renders disabled", () => {
    render(
      <TooltipProvider>
        <Tooltip disabled={true} description="You can't see me">
          <span>No tooltip to see here</span>
        </Tooltip>
      </TooltipProvider>,
    );
    // no tooltip, and no label either
    expect(screen.queryByRole("tooltip")).toBe(null);
    expect(screen.queryByRole("button", { name: /.*/ })).toBe(null);
  });

  it("renders default tooltip", async () => {
    render(
      <TooltipProvider>
        <Tooltip label="@bob:example.org" boundary="clippingAncestors">
          <IconButton>
            <UserIcon />
          </IconButton>
        </Tooltip>
      </TooltipProvider>,
    );
    // tooltip labels button and does not use role="tooltip"
    screen.getByRole("button", { name: "@bob:example.org" });
    expect(screen.queryByRole("tooltip")).toBe(null);
  });

  it("opens tooltip on focus", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip isTriggerInteractive={true} description="Description">
          <a href="https://example.org">Link</a>
        </Tooltip>
      </TooltipProvider>,
    );
    mockFocusVisible(screen.getByRole("link"));
    expect(screen.queryByRole("tooltip")).toBe(null);
    await user.tab();
    // trigger focused, tooltip shown
    expect(screen.getByRole("link")).toHaveFocus();
    await screen.findByRole("tooltip");
  });

  it("opens tooltip on focus where trigger is non interactive", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip isTriggerInteractive={false} description="Description">
          <span>Just some text</span>
        </Tooltip>
      </TooltipProvider>,
    );
    mockFocusVisible(screen.getByText("Just some text").parentElement!);
    expect(screen.queryByRole("tooltip")).toBe(null);
    await user.tab();
    // trigger focused, tooltip shown
    expect(screen.getByText("Just some text").parentElement).toHaveFocus();
    screen.getByRole("tooltip");
  });

  it("opens tooltip on long press", async () => {
    vi.useFakeTimers();
    try {
      render(
        <TooltipProvider>
          <Tooltip isTriggerInteractive={true} description="Description">
            <a href="https://example.org">Link</a>
          </Tooltip>
        </TooltipProvider>,
      );
      expect(screen.queryByRole("tooltip")).toBe(null);
      // Press
      fireEvent.touchStart(screen.getByRole("link"));
      expect(screen.queryByRole("tooltip")).toBe(null);
      // And hold
      await act(() => vi.advanceTimersByTimeAsync(1000));
      screen.getByRole("tooltip");
      // And release
      fireEvent.touchEnd(screen.getByRole("link"));
      // Tooltip should remain visible for some time
      screen.getByRole("tooltip");
      await act(() => vi.advanceTimersByTimeAsync(2000));
      expect(screen.queryByRole("tooltip")).toBe(null);
    } finally {
      vi.useRealTimers();
    }
  });

  it("overrides default tab index for non interactive triggers", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip
          isTriggerInteractive={false}
          nonInteractiveTriggerTabIndex={-1}
          description="Description"
        >
          <span>Just some text</span>
        </Tooltip>
      </TooltipProvider>,
    );
    await user.tab();
    // trigger cannot be focused
    expect(screen.queryByRole("tooltip")).toBe(null);
  });

  it("renders with string caption", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip label="I can have a caption" caption="My beautiful caption">
          <IconButton>
            <UserIcon />
          </IconButton>
        </Tooltip>
      </TooltipProvider>,
    );
    await user.tab();
    // tooltip labels button and describes button with caption
    expect(
      screen.getByRole("button", { name: "I can have a caption" }),
    ).toHaveAccessibleDescription("My beautiful caption");
  });

  it("renders with component caption", async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider>
        <Tooltip
          label="Copy"
          caption={
            <>
              <kbd>Ctrl</kbd> + <kbd>C</kbd>
            </>
          }
        >
          <IconButton>
            <UserIcon />
          </IconButton>
        </Tooltip>
      </TooltipProvider>,
    );
    await user.tab();
    // tooltip labels button and describes button with caption
    expect(
      screen.getByRole("button", { name: "Copy" }),
    ).toHaveAccessibleDescription("Ctrl + C");
  });

  it("renders a descriptive tooltip", async () => {
    render(
      <TooltipProvider>
        <Tooltip open={true} description="Employer Identification Number">
          <span>EIN</span>
        </Tooltip>
      </TooltipProvider>,
    );
    // tooltip shown, but does not change the button's accessible name
    screen.getByRole("tooltip", { name: "Employer Identification Number" });
    expect(screen.queryByRole("button", { name: "EIN" })).toBe(null);
  });

  it("labels an image", async () => {
    render(
      <TooltipProvider>
        <Tooltip isTriggerInteractive={false} label="User profile">
          <UserIcon role="image" width={24} height={24} />
        </Tooltip>
      </TooltipProvider>,
    );
    screen.getByRole("image", { name: "User profile" });
  });

  it("applies maxLines as a CSS custom property on the tooltip text", async () => {
    render(
      <TooltipProvider>
        <Tooltip
          open={true}
          maxLines={2}
          description="Deep and meaningful tooltip text"
        >
          <span>Brief summary</span>
        </Tooltip>
      </TooltipProvider>,
    );
    const text = screen.getByText("Deep and meaningful tooltip text");
    expect(text.style.getPropertyValue("--cpd-tooltip-max-lines")).toBe("2");
  });

  it("defaults max-lines to 2 when maxLines is not given", async () => {
    render(
      <TooltipProvider>
        <Tooltip open={true} description="Content worthy of hovering">
          <span>Snippet</span>
        </Tooltip>
      </TooltipProvider>,
    );
    const text = screen.getByText("Content worthy of hovering");
    expect(text.style.getPropertyValue("--cpd-tooltip-max-lines")).toBe("2");
  });

  it("defaults maxWidth to 580px when maxWidth is not given", async () => {
    render(
      <TooltipProvider>
        <Tooltip open={true} description="Content worthy of hovering">
          <span>Snippet</span>
        </Tooltip>
      </TooltipProvider>,
    );
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip.style.getPropertyValue("max-width")).toBe("580px");
  });

  describe("in a PortalRoot", () => {
    it("portals a label tooltip into the root", () => {
      const root = makePortalRoot();
      render(
        <PortalRoot root={root}>
          <TooltipProvider>
            <Tooltip label="Mute">
              <IconButton>
                <UserIcon />
              </IconButton>
            </Tooltip>
          </TooltipProvider>
        </PortalRoot>,
      );
      // A label tooltip is in the DOM from the start, just not visible
      expect(root).toContainElement(screen.getByText("Mute"));
    });

    it("portals a descriptive tooltip into the root", () => {
      const root = makePortalRoot();
      render(
        <PortalRoot root={root}>
          <TooltipProvider>
            <Tooltip description="Mutes the microphone" open>
              <IconButton aria-label="Mute">
                <UserIcon />
              </IconButton>
            </Tooltip>
          </TooltipProvider>
        </PortalRoot>,
      );
      expect(root).toContainElement(screen.getByRole("tooltip"));
    });

    it("portals into a root that arrives after the first render", async () => {
      // A host that keeps its root in state, so that the root is null on the
      // first render and only set once the element has mounted
      const Host: React.FC = () => {
        const [root, setRoot] = React.useState<HTMLDivElement | null>(null);
        return (
          <>
            <PortalRoot root={root}>
              <TooltipProvider>
                <Tooltip label="Mute">
                  <IconButton>
                    <UserIcon />
                  </IconButton>
                </Tooltip>
              </TooltipProvider>
            </PortalRoot>
            <div data-testid="late-root" ref={setRoot} />
          </>
        );
      };
      render(<Host />);
      const root = screen.getByTestId("late-root");
      await vi.waitFor(() =>
        expect(root).toContainElement(screen.getByText("Mute")),
      );
    });

    it("moves to a new root", async () => {
      const a = makePortalRoot();
      const b = makePortalRoot();
      const ui = (root: HTMLElement): React.ReactElement => (
        <PortalRoot root={root}>
          <TooltipProvider>
            <Tooltip label="Mute">
              <IconButton>
                <UserIcon />
              </IconButton>
            </Tooltip>
          </TooltipProvider>
        </PortalRoot>
      );
      const { rerender } = render(ui(a));
      expect(a).toContainElement(screen.getByText("Mute"));
      // Let the first render settle, as a host would before switching roots
      await act(async () => {});
      rerender(ui(b));
      expect(b).toContainElement(screen.getByText("Mute"));
      expect(a).toBeEmptyDOMElement();
    });

    it("portals into the body without a root", () => {
      const root = makePortalRoot();
      render(
        <TooltipProvider>
          <Tooltip label="Mute">
            <IconButton>
              <UserIcon />
            </IconButton>
          </Tooltip>
        </TooltipProvider>,
      );
      const tooltip = screen.getByText("Mute");
      expect(document.body).toContainElement(tooltip);
      expect(root).not.toContainElement(tooltip);
    });
  });
});
