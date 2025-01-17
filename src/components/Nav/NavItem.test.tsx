/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./NavItem.stories";

const { Default, Disabled, Link, Active, ActiveLink, ActiveDisabled } =
  composeStories(stories);

describe("<NavItem />", () => {
  it("render a default item", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("render a Disabled item", () => {
    const { container } = render(<Disabled />);
    expect(container).toMatchSnapshot();
  });
  it("render a Link item", () => {
    const { container } = render(<Link />);
    expect(container).toMatchSnapshot();
  });
  it("render a Active item", () => {
    const { container } = render(<Active />);
    expect(container).toMatchSnapshot();
  });
  it("render a ActiveLink item", () => {
    const { container } = render(<ActiveLink />);
    expect(container).toMatchSnapshot();
  });
  it("render a ActiveDisabled item", () => {
    const { container } = render(<ActiveDisabled />);
    expect(container).toMatchSnapshot();
  });
});
