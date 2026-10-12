/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { PortalRoot, usePortalRoot } from "./PortalRoot";

// How each component portals into a PortalRoot is tested alongside that
// component. These tests cover the provider itself.
describe("PortalRoot", () => {
  const root = document.createElement("div");

  it("is undefined without a provider", () => {
    let seen: unknown = "unset";
    const Probe = () => {
      seen = usePortalRoot();
      return null;
    };
    render(<Probe />);
    expect(seen).toBeUndefined();
  });

  it("passes a null root through, as distinct from no provider", () => {
    let seen: unknown = "unset";
    const Probe = () => {
      seen = usePortalRoot();
      return null;
    };
    render(
      <PortalRoot root={null}>
        <Probe />
      </PortalRoot>,
    );
    expect(seen).toBeNull();
  });

  it("lets the innermost provider win", () => {
    const outer = document.createElement("div");
    let seen: unknown;
    const Probe = () => {
      seen = usePortalRoot();
      return null;
    };
    render(
      <PortalRoot root={outer}>
        <PortalRoot root={root}>
          <Probe />
        </PortalRoot>
      </PortalRoot>,
    );
    expect(seen).toBe(root);
  });
});
