/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./IndicatorIcon.stories";

const { Default, WithIndicator, WithSuccessIndicator, WithCriticalIndicator } =
  composeStories(stories);

describe("IconButton", () => {
  it("renders a Default IconButton", () => {
    const { container } = render(<Default />);
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
});
