/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./NavBar.stories";

const { Default, TabRole } = composeStories(stories);

describe("<NavBar />", () => {
  it("render a default nav bar", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("render a tabbed nav bar", () => {
    const { container } = render(<TabRole />);
    expect(container).toMatchSnapshot();
  });
});
