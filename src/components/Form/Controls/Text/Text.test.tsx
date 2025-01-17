/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./Text.stories";

const { Empty, Filled, WithLigatures, Disabled, ReadOnly, Invalid } =
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
  it("renders a input with ligatures enable", () => {
    const { container } = render(<WithLigatures />);
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
