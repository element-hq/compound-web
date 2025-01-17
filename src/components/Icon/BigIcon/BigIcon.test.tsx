/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, expect, it } from "vitest";
import { composeStories } from "@storybook/react";
import * as stories from "./BigIcon.stories.tsx";
import { render } from "@testing-library/react";
import React from "react";

const { Default, Medium, Small, Destructive, Success } =
  composeStories(stories);

describe("BigIcon", () => {
  it("renders a large big icon", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("renders a medium big icon", () => {
    const { container } = render(<Medium />);
    expect(container).toMatchSnapshot();
  });

  it("renders a small big icon", () => {
    const { container } = render(<Small />);
    expect(container).toMatchSnapshot();
  });

  it("renders a destructive big icon", () => {
    const { container } = render(<Destructive />);
    expect(container).toMatchSnapshot();
  });

  it("renders a success big icon", () => {
    const { container } = render(<Success />);
    expect(container).toMatchSnapshot();
  });
});
