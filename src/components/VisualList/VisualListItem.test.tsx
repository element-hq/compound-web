/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { composeStories } from "@storybook/react";
import * as stories from "./VisualListItem.stories";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

const { Default, Success, Destructive, Multiline } = composeStories(stories);

describe("VisualListItem", () => {
  it("renders a Default VisualListItem", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Success VisualListItem", () => {
    const { container } = render(<Success />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Destructive VisualListItem", () => {
    const { container } = render(<Destructive />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Multiline VisualListItem", () => {
    const { container } = render(<Multiline />);
    expect(container).toMatchSnapshot();
  });
});
