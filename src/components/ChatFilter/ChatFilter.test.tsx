/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./ChatFilter.stories";

const { Default, Selected } = composeStories(stories);

describe("ChatFiler", () => {
  it("should render", () => {
    render(<Default />);
    expect(screen.getByRole("button")).toMatchSnapshot();
  });

  it("should render a selected filter", async () => {
    render(<Selected />);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-selected", "true");
    expect(button).toMatchSnapshot();
  });
});
