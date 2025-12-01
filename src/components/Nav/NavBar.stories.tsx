// Copyright 2025 New Vector Ltd.
// Copyright 2022 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
// Please see LICENSE files in the repository root for full details.

import React, { useEffect, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import { NavBar, NavItem } from ".";

const meta = {
  title: "Nav",
  component: NavBar,
  tags: ["autodocs", "axe-exclude"],
  parameters: {
    controls: {
      include: ["aria-label"],
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=669-2723&mode=design&t=9Hy0h7BBDH0kJ2Ow-0",
    },
  },
  args: {
    "aria-label": "Main",
  },
} satisfies Meta<typeof NavBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <NavItem onClick={() => {}}>Info</NavItem>
        <NavItem onClick={() => {}} active>
          People
        </NavItem>
        <NavItem onClick={() => {}} disabled>
          Disabled
        </NavItem>
        <NavItem href="https://example.com">External</NavItem>
      </>
    ),
  },
};

export const TabRole: Story = {
  render: function Component() {
    // An example tab implementation
    const [activePanelId, setActivePanelId] = useState("panel-2");
    const changeDisplay = (id: string, display: string) => {
      const e = document.querySelector(`#${id}`) as HTMLDivElement;
      if (e) e.style.display = display;
    };
    useEffect(() => {
      ["panel-1", "panel-2"].forEach((id) => {
        changeDisplay(id, "none");
      });
      changeDisplay(activePanelId, "block");
    }, [activePanelId]);

    return (
      <div>
        <NavBar role="tablist" aria-label="main">
          <NavItem
            aria-controls="panel-1"
            onClick={() => {
              setActivePanelId("panel-1");
            }}
            active={activePanelId === "panel-1"}
          >
            Tab 1
          </NavItem>
          <NavItem
            aria-controls="panel-2"
            onClick={() => {
              setActivePanelId("panel-2");
            }}
            active={activePanelId === "panel-2"}
          >
            Tab 2
          </NavItem>
          <NavItem aria-controls="panel-3" onClick={() => {}} disabled>
            Disabled Tab
          </NavItem>
        </NavBar>
        <div id="panel-1" style={{ display: "none" }}>
          This is panel 1
        </div>
        <div id="panel-2" style={{ display: "none" }}>
          This is panel 2
        </div>
        <div id="panel-3" style={{ display: "none" }}>
          This is panel 3
        </div>
      </div>
    );
  },
};
