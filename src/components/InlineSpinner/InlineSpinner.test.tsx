/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { InlineSpinner } from "./InlineSpinner";

describe("InlineSpinner", () => {
  it("renders", () => {
    const { asFragment } = render(<InlineSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
