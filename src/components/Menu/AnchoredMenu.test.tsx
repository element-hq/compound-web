/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AnchoredMenu } from "./AnchoredMenu";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

vi.mock("../../utils/platform", () => ({ getPlatform: vi.fn(() => "other") }));

/**
 * A Menu holding a button that opens an AnchoredMenu, positioned against the
 * outer menu.
 */
function Nested({
  onSelect = vi.fn(),
  replaceTriggerOnSelect = false,
}: {
  onSelect?: () => void;
  replaceTriggerOnSelect?: boolean;
}) {
  const [outerOpen, setOuterOpen] = useState(true);
  const [innerOpen, setInnerOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <Menu
      title="Outer"
      open={outerOpen}
      onOpenChange={setOuterOpen}
      trigger={<button>Open outer</button>}
    >
      <MenuItem label="Outer item" onSelect={() => {}} />
      {replaceTriggerOnSelect && selected ? (
        <span>Selected</span>
      ) : (
        <button
          ref={triggerRef}
          aria-haspopup="menu"
          aria-expanded={innerOpen}
          onClick={() => setInnerOpen((o) => !o)}
        >
          Open inner
        </button>
      )}
      <AnchoredMenu
        title="Inner"
        open={innerOpen}
        onOpenChange={setInnerOpen}
        anchor={triggerRef}
      >
        <MenuItem
          label="Inner item"
          onSelect={() => {
            setSelected(true);
            onSelect();
          }}
        />
      </AnchoredMenu>
    </Menu>
  );
}

const outerMenu = (): HTMLElement =>
  // Radix names the menu after its trigger
  screen.getByRole("menu", { name: "Open outer" });
const innerItem = (): HTMLElement | null =>
  screen.queryByRole("menuitem", { name: "Inner item" });
const innerMenu = (): HTMLElement =>
  screen.getByRole("menu", { name: "Inner" });

/** Opens the inner menu with a click, which focuses the menu itself. */
async function openInner(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole("button", { name: "Open inner" }));
  await waitFor(() => expect(innerMenu()).toHaveFocus());
}

describe("AnchoredMenu", () => {
  it("opens when told to and is labelled by its title", async () => {
    const user = userEvent.setup();
    render(<Nested />);

    await user.click(screen.getByRole("button", { name: "Open inner" }));

    expect(screen.getByRole("menu", { name: "Inner" })).toBeInTheDocument();
    expect(innerItem()).toBeInTheDocument();
  });

  it("focuses the first item when opened with the keyboard", async () => {
    const user = userEvent.setup();
    render(<Nested />);
    screen.getByRole("button", { name: "Open inner" }).focus();

    await user.keyboard("{Enter}");

    await waitFor(() => expect(innerItem()).toHaveFocus());
  });

  it("does not open on hover", async () => {
    const user = userEvent.setup();
    render(<Nested />);

    await user.hover(screen.getByRole("button", { name: "Open inner" }));
    await act(() => new Promise((r) => setTimeout(r, 200)));

    expect(innerItem()).not.toBeInTheDocument();
  });

  it("positions itself against a function anchor", async () => {
    const anchor = vi.fn(() => new DOMRect(100, 50, 200, 30));
    render(
      <AnchoredMenu
        title="Menu"
        open={true}
        onOpenChange={vi.fn()}
        anchor={anchor}
        side="left"
      >
        <MenuItem label="Item" onSelect={() => {}} />
      </AnchoredMenu>,
    );

    await waitFor(() => expect(anchor).toHaveBeenCalled());
    const wrapper = screen.getByRole("menu").parentElement!;
    await waitFor(() =>
      expect(
        wrapper.style.getPropertyValue("--radix-popper-anchor-width"),
      ).toBe("200px"),
    );
    expect(wrapper.style.getPropertyValue("--radix-popper-anchor-height")).toBe(
      "30px",
    );
  });

  it("closes on selection without closing the menu it was opened from", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Nested onSelect={onSelect} />);
    await user.click(screen.getByRole("button", { name: "Open inner" }));

    await user.click(innerItem()!);

    expect(onSelect).toHaveBeenCalled();
    await waitFor(() => expect(innerItem()).not.toBeInTheDocument());
    expect(outerMenu()).toBeInTheDocument();
  });

  it("closes only itself on Escape", async () => {
    const user = userEvent.setup();
    render(<Nested />);
    await openInner(user);

    await user.keyboard("{Escape}");

    await waitFor(() => expect(innerItem()).not.toBeInTheDocument());
    expect(outerMenu()).toBeInTheDocument();
  });

  it("closes on the arrow key pointing back at its anchor", async () => {
    const user = userEvent.setup();
    render(<Nested />);
    await openInner(user);

    await user.keyboard("{ArrowLeft}");

    await waitFor(() => expect(innerItem()).not.toBeInTheDocument());
    expect(outerMenu()).toBeInTheDocument();
  });

  it("does not drive the parent menu's keyboard navigation", async () => {
    const user = userEvent.setup();
    render(<Nested />);
    await openInner(user);

    // Moves to the first inner item rather than the parent's next item
    await user.keyboard("{ArrowDown}");

    expect(innerItem()).toHaveFocus();
  });

  it("returns focus to the trigger when it closes", async () => {
    const user = userEvent.setup();
    render(<Nested />);
    const trigger = screen.getByRole("button", { name: "Open inner" });
    await openInner(user);

    await user.keyboard("{Escape}");

    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it("focuses the parent menu if the trigger has gone when it closes", async () => {
    const user = userEvent.setup();
    render(<Nested replaceTriggerOnSelect />);
    await openInner(user);

    await user.keyboard("{ArrowDown}{Enter}");

    await waitFor(() => expect(innerItem()).not.toBeInTheDocument());
    // Radix then passes focus on to an item in the parent menu
    await waitFor(() =>
      expect(outerMenu()).toContainElement(
        document.activeElement as HTMLElement,
      ),
    );
  });
});
