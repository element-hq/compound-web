/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { composeStories } from "@storybook/react";
import * as stories from "./ReleaseAnnouncement.stories";
import { describe, it, expect, vi, onTestFinished } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { ReleaseAnnouncement } from "./ReleaseAnnouncement";
import { Button } from "../Button";
import { PortalRoot } from "../PortalRoot/PortalRoot";

const { Default, MultiLinesContent, BottomPlacement, NoArrow } =
  composeStories(stories);

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

describe("ReleaseAnnouncement", () => {
  it("renders", async () => {
    render(<Default />);
    expect(await screen.findByRole("dialog")).toMatchSnapshot();
  });

  it("renders with a long label header and description", async () => {
    render(<MultiLinesContent />);
    expect(await screen.findByRole("dialog")).toMatchSnapshot();
  });

  it("renders the component at the bottom of the trigger button", async () => {
    render(<BottomPlacement />);
    expect(await screen.findByRole("dialog")).toMatchSnapshot();
  });

  it("renders the component when closed", async () => {
    render(
      <ReleaseAnnouncement
        open={false}
        header="header"
        description="description"
        closeLabel="Ok"
        onClick={vi.fn()}
      >
        <Button>Open</Button>
      </ReleaseAnnouncement>,
    );
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders without an arrow", async () => {
    render(<NoArrow />);
    expect(await screen.findByRole("dialog")).toMatchSnapshot();
  });

  describe("in a PortalRoot", () => {
    const announcement = (
      <ReleaseAnnouncement
        open
        header="New"
        description="Shiny"
        closeLabel="Ok"
        onClick={vi.fn()}
      >
        <Button>Anchor</Button>
      </ReleaseAnnouncement>
    );

    it("portals into the root", async () => {
      const root = makePortalRoot();
      render(<PortalRoot root={root}>{announcement}</PortalRoot>);
      expect(root).toContainElement(await screen.findByRole("dialog"));
    });

    // No `key` on the FloatingPortal is needed for this to work: it creates
    // its portal node in a layout effect that re-runs when `root` changes, and
    // a `null` root makes it wait rather than fall back to document.body.
    //
    // It looks like it could fail because:
    // - nothing forces a remount when `root` changes
    // - FloatingPortal ignores `root` changes right after it mounts (its node
    //   guard only clears a microtask later), and a root from a callback ref
    //   arrives in exactly that window
    //
    // floating-ui covers all of this, as long as `null` (not `undefined`) is
    // passed while the root is pending:
    // - https://github.com/floating-ui/floating-ui/issues/2454 (fixed by
    //   #2764): the guard that makes early `root` changes go unnoticed
    // - https://github.com/floating-ui/floating-ui/issues/3099 (fixed by
    //   #3104): a `null` root waits instead of falling back to document.body
    // - https://floating-ui.com/docs/FloatingPortal#root: pass an element,
    //   and `null` until it exists
    it("portals into a root that arrives after the first render", async () => {
      // A host that keeps its root in state, so that the root is null on the
      // first render and only set once the element has mounted
      const Host: React.FC = () => {
        const [root, setRoot] = React.useState<HTMLDivElement | null>(null);
        return (
          <>
            <PortalRoot root={root}>{announcement}</PortalRoot>
            <div data-testid="late-root" ref={setRoot} />
          </>
        );
      };
      render(<Host />);
      const root = screen.getByTestId("late-root");
      await waitFor(() =>
        expect(root).toContainElement(screen.getByRole("dialog")),
      );
    });

    it("moves to a new root", async () => {
      const a = makePortalRoot();
      const b = makePortalRoot();
      const { rerender } = render(
        <PortalRoot root={a}>{announcement}</PortalRoot>,
      );
      expect(a).toContainElement(await screen.findByRole("dialog"));
      rerender(<PortalRoot root={b}>{announcement}</PortalRoot>);
      await waitFor(() =>
        expect(b).toContainElement(screen.getByRole("dialog")),
      );
      expect(a).toBeEmptyDOMElement();
    });

    it("portals into the body without a root", async () => {
      const root = makePortalRoot();
      render(announcement);
      const dialog = await screen.findByRole("dialog");
      expect(document.body).toContainElement(dialog);
      expect(root).not.toContainElement(dialog);
    });
  });
});
