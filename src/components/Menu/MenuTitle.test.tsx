/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MenuTitle } from "./MenuTitle.tsx";
import React from "react";

describe("MenuTitle", () => {
  it("renders", () => {
    const { asFragment } = render(<MenuTitle title="Title" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
