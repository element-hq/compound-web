/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { Body } from "./Body";

describe("Body", () => {
  it("renders", () => {
    const { container, asFragment } = render(
      <Body>The quick brown fox jumps over the lazy dog.</Body>,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(container.querySelector("p")).not.toBeNull();
  });

  it("lets you override the HTML element", () => {
    const { container } = render(<Body as="span">Hello world.</Body>);
    expect(container.querySelector("p")).toBeNull();
    expect(container.querySelector("span")).not.toBeNull();
  });
});
