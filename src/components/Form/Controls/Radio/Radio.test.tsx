/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { RadioInput } from "./Radio";

describe("Radio", () => {
  it("renders", () => {
    const { asFragment } = render(<RadioInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
