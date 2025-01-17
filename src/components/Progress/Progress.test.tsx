/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";

import * as stories from "./Progress.stories";
import { composeStories } from "@storybook/react";

const { SmallFull, SmallHalf, LargeFull, LargeHalf, Empty, Green, Red, Lime } =
  composeStories(stories);

describe("Progress", () => {
  it("renders a small full progress bar", () => {
    const { container } = render(<SmallFull />);
    expect(container).toMatchSnapshot();
  });

  it("renders a small half progress bar", () => {
    const { container } = render(<SmallHalf />);
    expect(container).toMatchSnapshot();
  });

  it("renders a large full progress bar", () => {
    const { container } = render(<LargeFull />);
    expect(container).toMatchSnapshot();
  });

  it("renders a large half progress bar", () => {
    const { container } = render(<LargeHalf />);
    expect(container).toMatchSnapshot();
  });

  it("renders an empty progress bar", () => {
    const { container } = render(<Empty />);
    expect(container).toMatchSnapshot();
  });

  it("renders a green progress bar", () => {
    const { container } = render(<Green />);
    expect(container).toMatchSnapshot();
  });

  it("renders a red progress bar", () => {
    const { container } = render(<Red />);
    expect(container).toMatchSnapshot();
  });

  it("renders a lime progress bar", () => {
    const { container } = render(<Lime />);
    expect(container).toMatchSnapshot();
  });
});
