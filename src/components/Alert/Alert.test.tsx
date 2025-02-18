/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
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
