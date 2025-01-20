/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { composeStories } from "@storybook/react";
import * as stories from "./ReleaseAnnouncement.stories";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ReleaseAnnouncement } from "./ReleaseAnnouncement";
import { Button } from "../Button";

const { Default, MultiLinesContent, BottomPlacement, NoArrow } =
  composeStories(stories);

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
});
