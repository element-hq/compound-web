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

import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import * as stories from "./Tooltip.stories";
import { composeStories, composeStory } from "@storybook/react";

const {
  Default,
  WithStringCaption,
  WithComponentCaption,
  ForcedOpen,
  ForcedClose,
  ForcedDisabled,
  InteractiveTrigger,
  NonInteractiveTrigger,
} = composeStories(stories);

describe("Tooltip", () => {
  it("renders open by default", () => {
    const { asFragment } = render(<ForcedOpen />);
    // trigger rendered
    expect(asFragment()).toMatchSnapshot();
    // tooltip shown
    expect(screen.getByRole("tooltip")).toMatchSnapshot();
  });

  it("renders closed by default", () => {
    const { asFragment } = render(<ForcedClose />);
    expect(asFragment()).toMatchSnapshot();
    // no tooltip
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("renders disabled", () => {
    const { asFragment } = render(<ForcedDisabled />);
    expect(asFragment()).toMatchSnapshot();
    // no tooltip
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  it("renders default tooltip", async () => {
    render(<Default />);
    const trigger = screen.getByTestId("testbutton");

    fireEvent.focus(trigger);
    // tooltip shown
    expect(await screen.findByRole("tooltip")).toMatchSnapshot();
  });

  it("opens tooltip on focus", async () => {
    render(<InteractiveTrigger />);
    const trigger = screen.getByTestId("testbutton");

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    fireEvent.focus(trigger);
    // tooltip shown
    expect(await screen.findByRole("tooltip")).toMatchSnapshot();
  });

  it("opens tooltip on focus where trigger is non interactive", async () => {
    const { container } = render(<NonInteractiveTrigger />);

    expect(container).toMatchSnapshot();
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    const trigger = screen.getByTestId("testbutton");
    fireEvent.focus(trigger);
    // tooltip shown
    expect(await screen.findByRole("tooltip")).toMatchSnapshot();
  });

  it("overrides default tab index for non interactive triggers", async () => {
    const Component = composeStory(
      {
        ...stories.NonInteractiveTrigger,
        args: {
          ...stories.NonInteractiveTrigger.args,
          nonInteractiveTriggerTabIndex: -1,
        },
      },
      stories.default,
    );
    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });

  it("renders with string caption", async () => {
    const { asFragment } = render(<WithStringCaption />);
    expect(asFragment()).toMatchSnapshot();
    const trigger = screen.getByTestId("testbutton");

    fireEvent.focus(trigger);
    // tooltip shown
    expect(await screen.findByRole("tooltip")).toMatchSnapshot();
  });

  it("renders with component caption", async () => {
    const { asFragment } = render(<WithComponentCaption />);
    expect(asFragment()).toMatchSnapshot();
    const trigger = screen.getByTestId("testbutton");

    fireEvent.focus(trigger);
    // tooltip shown
    expect(await screen.findByRole("tooltip")).toMatchSnapshot();
  });
});
