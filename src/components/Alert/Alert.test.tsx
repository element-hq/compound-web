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
import {
  fireEvent,
  getByLabelText,
  screen,
  render,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { composeStory } from "@storybook/react";

import Meta, {
  Success,
  Critical,
  Info,
  WithActions,
  WithoutClose,
} from "./Alert.stories";

describe("Alert", () => {
  it("renders success", () => {
    const Component = composeStory(Success, Meta);
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders critical", () => {
    const Component = composeStory(Critical, Meta);
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders info", () => {
    const Component = composeStory(Info, Meta);
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has no close button by default", () => {
    const Component = composeStory(WithoutClose, Meta);
    render(<Component />);

    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
  });

  it("can have a close button", async () => {
    const spy = vi.fn();
    const Component = composeStory(
      {
        ...Success,
        args: {
          ...Success.args,
          onClose: spy,
        },
      },
      Meta,
    );
    const { container } = render(<Component />);

    await waitFor(() =>
      expect(getByLabelText(container, "Close")).toBeInTheDocument(),
    );

    fireEvent.click(getByLabelText(container, "Close"));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("renders actions", () => {
    const Component = composeStory(WithActions, Meta);
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });
});
