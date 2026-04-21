/*
Copyright (C) 2026 Element Creations Ltd

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

  it("can be toggled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { getByLabelText } = render(<Default onChange={onChange} />);
    await user.click(getByLabelText("Stop"));
    expect(onChange).toHaveBeenCalled();
  });
});
