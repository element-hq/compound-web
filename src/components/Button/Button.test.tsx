/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { vi, describe, it, expect } from "vitest";
import React from "react";
import { fireEvent, screen, render } from "@testing-library/react";

import { Button } from "./Button";

import * as stories from "./Button.stories";
import { composeStories } from "@storybook/react";

const {
  Default,
  Small,
  Primary,
  PrimaryDestructive,
  Secondary,
  SecondaryDestructive,
  Tertiary,
  TertiaryDestructive,
  WithIcon,
  SmallWithIcon,
  Disabled,
  Link,
  LinkDisabled,
} = composeStories(stories);

describe("Button", () => {
  it("renders a Default button", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Small button", () => {
    const { container } = render(<Small />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Primary button", () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Primary Destructive button", () => {
    const { container } = render(<PrimaryDestructive />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Secondary button", () => {
    const { container } = render(<Secondary />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Secondary Destructive button", () => {
    const { container } = render(<SecondaryDestructive />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Tertiary button", () => {
    const { container } = render(<Tertiary />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Tertiary Destructive button", () => {
    const { container } = render(<TertiaryDestructive />);
    expect(container).toMatchSnapshot();
  });
  it("renders a WithIcon button", () => {
    const { container } = render(<WithIcon />);
    expect(container).toMatchSnapshot();
  });
  it("renders a SmallWithIcon button", () => {
    const { container } = render(<SmallWithIcon />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Disabled button", () => {
    const { container } = render(<Disabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Link button", () => {
    const { container } = render(<Link />);
    expect(container).toMatchSnapshot();
  });

  it("renders a LinkDisabled button", () => {
    const { container } = render(<LinkDisabled />);
    expect(container).toMatchSnapshot();
  });

  it("can be clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Test</Button>);

    fireEvent.click(screen.getByText("Test"));

    expect(onClick).toHaveBeenCalled();
  });

  it("cannot be clicked when disabled", () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled={true}>
        Test
      </Button>,
    );

    fireEvent.click(screen.getByText("Test"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("does not submit when disabled", () => {
    const onSubmit = vi.fn();
    render(
      <Button onSubmit={onSubmit} disabled={true}>
        Test
      </Button>,
    );

    fireEvent.click(screen.getByText("Test"));

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("can be focused when disabled", () => {
    const onClick = vi.fn();
    const onFocus = vi.fn();
    render(
      <Button onClick={onClick} onFocus={onFocus} disabled={true}>
        Test
      </Button>,
    );

    fireEvent.focus(screen.getByText("Test"));

    expect(onFocus).toHaveBeenCalled();
  });
});
