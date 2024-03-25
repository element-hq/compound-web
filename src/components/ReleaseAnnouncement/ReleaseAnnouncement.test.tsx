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
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

const { Default, MultiLinesContent, BottomPlacement } = composeStories(stories);

describe("ReleaseAnnouncement", () => {
  it("renders", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("renders with a long label header and description", () => {
    const { container } = render(<MultiLinesContent />);
    expect(container).toMatchSnapshot();
  });

  it("renders the component at the bottom of the trigger button", () => {
    const { container } = render(<BottomPlacement />);
    expect(container).toMatchSnapshot();
  });
});
