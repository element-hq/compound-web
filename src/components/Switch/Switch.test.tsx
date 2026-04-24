/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { vi, describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./Switch.stories";
import userEvent from "@testing-library/user-event";

const { Default } = composeStories(stories);

describe("Switch", () => {
  it("renders", () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("can be toggled via click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(<Default onChange={onChange} />);
    const list = getByRole("radio", { name: "List" });
    const grid = getByRole("radio", { name: "Grid" });

    await user.click(grid);
    expect(onChange).toHaveBeenCalledWith("grid");
    expect(grid).toBeChecked();

    await user.click(list);
    expect(onChange).toHaveBeenCalledWith("list");
    expect(list).toBeChecked();
  });

  it("can be toggled via keyboard tab + arrow key", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByRole } = render(<Default onChange={onChange} />);
    const list = getByRole("radio", { name: "List" });
    const grid = getByRole("radio", { name: "Grid" });

    await user.keyboard("{tab}");

    await user.keyboard("{arrowleft}");
    expect(onChange).toHaveBeenCalledWith("grid");
    expect(grid).toBeChecked();

    await user.keyboard("{arrowright}");
    expect(onChange).toHaveBeenCalledWith("list");
    expect(list).toBeChecked();
  });
});
