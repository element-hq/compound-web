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

import * as stories from "./Text.stories";

const { Empty, Filled, WithoutLigatures, Disabled, ReadOnly, Invalid } =
  composeStories(stories);

describe("<Text />", () => {
  it("renders an empty input", () => {
    const { container } = render(<Empty />);
    expect(container).toMatchSnapshot();
  });
  it("renders a filled input", () => {
    const { container } = render(<Filled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a input with ligatures disabled", () => {
    const { container } = render(<WithoutLigatures />);
    expect(container).toMatchSnapshot();
  });
  it("renders a disabled input", () => {
    const { container } = render(<Disabled />);
    expect(container).toMatchSnapshot();
  });

  it("renders a read only input", () => {
    const { container } = render(<ReadOnly />);
    expect(container).toMatchSnapshot();
  });

  it("renders an invalid input", () => {
    const { container } = render(<Invalid />);
    expect(container).toMatchSnapshot();
  });
});
