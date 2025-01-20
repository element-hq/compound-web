/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders", () => {
    const { asFragment, container } = render(
      <Heading>The quick brown fox jumps over the lazy dog.</Heading>,
    );
    expect(asFragment()).toMatchSnapshot();
    expect(container.querySelector("h1")).not.toBeNull();
  });

  it("lets you override the HTML element", () => {
    const { container } = render(<Heading as="h2">Hello world.</Heading>);
    expect(container.querySelector("h1")).toBeNull();
    expect(container.querySelector("h2")).not.toBeNull();
  });
});
