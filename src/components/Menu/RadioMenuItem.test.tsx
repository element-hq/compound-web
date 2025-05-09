/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { RadioMenuItem } from "./RadioMenuItem.tsx";
import React from "react";

// Since this component must be used within RadioMenuGroup, almost all
// functionality is tested there.
describe("RadioMenuItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <RadioMenuItem label="Always show" checked={false} onSelect={() => {}} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
