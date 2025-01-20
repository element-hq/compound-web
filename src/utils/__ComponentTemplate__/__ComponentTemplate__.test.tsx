/*
Copyright %YEAR% %COPYRIGHT_HOLDER%

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { __ComponentTemplate__ } from "./__ComponentTemplate__";

describe("__ComponentTemplate__", () => {
  it("renders", () => {
    const { asFragment } = render(<__ComponentTemplate__ />);
    expect(asFragment()).toMatchSnapshot();
  });
});
