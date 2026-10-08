/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import { PortalRoot, usePortalRoot } from "./PortalRoot";
import { Menu } from "../Menu/Menu";
import { MenuItem } from "../Menu/MenuItem";
import { ContextMenu } from "../Menu/ContextMenu";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { ReleaseAnnouncement } from "../ReleaseAnnouncement";
import { Button } from "../Button";
import userEvent from "@testing-library/user-event";

vi.mock("../../utils/platform", () => ({ getPlatform: vi.fn(() => "other") }));

describe("PortalRoot", () => {
  // A root of our own, next to the body's other children, so that we can tell
  // what went into it and what went straight into the body. Unmounting (which
  // testing-library does after each test) empties it again.
  const root = document.createElement("div");
  document.body.appendChild(root);

  it("is undefined without a provider", () => {
    let seen: unknown = "unset";
    const Probe = () => {
      seen = usePortalRoot();
      return null;
    };
    render(<Probe />);
    expect(seen).toBeUndefined();
  });

  it("treats a null root as no root", () => {
    let seen: unknown = "unset";
    const Probe = () => {
      seen = usePortalRoot();
      return null;
    };
    render(
      <PortalRoot root={null}>
        <Probe />
      </PortalRoot>,
    );
    expect(seen).toBeUndefined();
  });

  it("lets the innermost provider win", () => {
    const outer = document.createElement("div");
    let seen: unknown;
    const Probe = () => {
      seen = usePortalRoot();
      return null;
    };
    render(
      <PortalRoot root={outer}>
        <PortalRoot root={root}>
          <Probe />
        </PortalRoot>
      </PortalRoot>,
    );
    expect(seen).toBe(root);
  });

  it("portals a menu into the root", () => {
    render(
      <PortalRoot root={root}>
        <Menu
          open
          onOpenChange={() => {}}
          title="Settings"
          trigger={<Button>Open</Button>}
        >
          <MenuItem label="Account" onSelect={() => {}} />
        </Menu>
      </PortalRoot>,
    );
    expect(root).toContainElement(screen.getByRole("menu"));
  });

  it("portals a menu into the body without a root", () => {
    render(
      <Menu
        open
        onOpenChange={() => {}}
        title="Settings"
        trigger={<Button>Open</Button>}
      >
        <MenuItem label="Account" onSelect={() => {}} />
      </Menu>,
    );
    const menu = screen.getByRole("menu");
    expect(document.body).toContainElement(menu);
    expect(root).not.toContainElement(menu);
  });

  it("portals a context menu into the root", async () => {
    const user = userEvent.setup();
    render(
      <PortalRoot root={root}>
        <ContextMenu
          title="Message"
          hasAccessibleAlternative
          trigger={<div>Right-click me</div>}
        >
          <MenuItem label="Reply" onSelect={() => {}} />
        </ContextMenu>
      </PortalRoot>,
    );
    await user.pointer({
      keys: "[MouseRight]",
      target: screen.getByText("Right-click me"),
    });
    expect(root).toContainElement(await screen.findByRole("menu"));
  });

  it("portals a tooltip into the root", () => {
    render(
      <PortalRoot root={root}>
        <TooltipProvider>
          <Tooltip label="Mute">
            <Button>mic</Button>
          </Tooltip>
        </TooltipProvider>
      </PortalRoot>,
    );
    // A label tooltip is in the DOM from the start, just not visible
    expect(root).toContainElement(screen.getByText("Mute"));
  });

  it("portals a tooltip into a root that arrives after the first render", async () => {
    // A host that keeps its root in state, so that the root is null on the
    // first render and only set once the element has mounted
    const Host = () => {
      const [late, setLate] = React.useState<HTMLDivElement | null>(null);
      return (
        <>
          <PortalRoot root={late}>
            <TooltipProvider>
              <Tooltip label="Mute">
                <Button>mic</Button>
              </Tooltip>
            </TooltipProvider>
          </PortalRoot>
          <div data-testid="late-root" ref={setLate} />
        </>
      );
    };
    render(<Host />);
    const late = screen.getByTestId("late-root");
    await vi.waitFor(() =>
      expect(late).toContainElement(screen.getByText("Mute")),
    );
  });

  it("portals a release announcement into a root that arrives after the first render", async () => {
    const Host = () => {
      const [late, setLate] = React.useState<HTMLDivElement | null>(null);
      return (
        <>
          <PortalRoot root={late}>
            <ReleaseAnnouncement
              open
              header="New"
              description="Shiny"
              closeLabel="Ok"
              onClick={() => {}}
            >
              <Button>Anchor</Button>
            </ReleaseAnnouncement>
          </PortalRoot>
          <div data-testid="late-root" ref={setLate} />
        </>
      );
    };
    render(<Host />);
    const late = screen.getByTestId("late-root");
    await vi.waitFor(() =>
      expect(late).toContainElement(screen.getByRole("dialog")),
    );
  });

  it("portals a release announcement into the root", async () => {
    render(
      <PortalRoot root={root}>
        <ReleaseAnnouncement
          open
          header="New"
          description="Shiny"
          closeLabel="Ok"
          onClick={() => {}}
        >
          <Button>Anchor</Button>
        </ReleaseAnnouncement>
      </PortalRoot>,
    );
    expect(root).toContainElement(await screen.findByRole("dialog"));
  });
});
