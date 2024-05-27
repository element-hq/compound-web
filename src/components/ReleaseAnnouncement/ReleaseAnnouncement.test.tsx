/*
 *
 * Copyright 2024 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * /
 */

import { composeStories } from "@storybook/react";
import * as stories from "./ReleaseAnnouncement.stories";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ReleaseAnnouncement } from "./ReleaseAnnouncement";
import { Button } from "../Button";

const { Default, MultiLinesContent, BottomPlacement } = composeStories(stories);

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
});
