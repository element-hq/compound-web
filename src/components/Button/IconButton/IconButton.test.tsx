/*
Copyright 2023 New Vector Ltd

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

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./IconButton.stories";

const {
  Default,
  DefaultDisabled,
  WithIndicator,
  WithSuccessIndicator,
  WithCriticalIndicator,
  WithIndicatorDisabled,
  WithSubtleBackground,
} = composeStories(stories);

describe("IconButton", () => {
  it("renders a Default IconButton", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it("renders a DefaultDisabled IconButton", () => {
    const { container } = render(<DefaultDisabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithIndicator IconButton", () => {
    const { container } = render(<WithIndicator />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithSuccessIndicator IconButton", () => {
    const { container } = render(<WithSuccessIndicator />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithCriticalIndicator IconButton", () => {
    const { container } = render(<WithCriticalIndicator />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithIndicatorDisabled IconButton", () => {
    const { container } = render(<WithIndicatorDisabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithSubtleBackground IconButton", () => {
    const { container } = render(<WithSubtleBackground />);
    expect(container).toMatchSnapshot();
  });
});
