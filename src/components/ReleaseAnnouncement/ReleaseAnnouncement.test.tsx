/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { composeStories } from "@storybook/react";
import * as stories from "./ReleaseAnnouncement.stories";
import { describe, it, expect, vi, onTestFinished } from "vitest";
import { render, screen } from "@testing-library/react";
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

    it("portals into a root that arrives after the first render", async () => {
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
      await vi.waitFor(() =>
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
      await vi.waitFor(() =>
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
