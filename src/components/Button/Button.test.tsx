/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
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
  Secondary,
  Tertiary,
  Destructive,
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
  it("renders a Secondary button", () => {
    const { container } = render(<Secondary />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Tertiary button", () => {
    const { container } = render(<Tertiary />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Destructive button", () => {
    const { container } = render(<Destructive />);
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
