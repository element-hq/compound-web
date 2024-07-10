/*
Copyright 2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { vi, describe, it, expect } from "vitest";
import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

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
