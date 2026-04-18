/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./PageHeader.stories";

const { Default, Medium } = composeStories(stories);

describe("PageHeader", () => {
  it("renders a default page header", () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a medium page header", () => {
    const { asFragment } = render(<Medium />);
    expect(asFragment()).toMatchSnapshot();
  });
});
