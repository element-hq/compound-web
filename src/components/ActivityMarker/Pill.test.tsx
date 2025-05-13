/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { composeStories } from "@storybook/react";
import * as stories from "./Pill.stories.tsx";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

const { Default } = composeStories(stories);

describe("Pill", () => {
  it("should render", () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });
});
