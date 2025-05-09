/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { Link } from "./Link";

describe("Link", () => {
  it("renders", () => {
    const { asFragment } = render(<Link />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders width a small size", () => {
    const { asFragment } = render(<Link size="small" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
