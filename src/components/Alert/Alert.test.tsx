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

import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders", () => {
    const { asFragment } = render(
      <Alert title="Title" type="success">
        Success!
      </Alert>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("has no close button by default", () => {
    render(
      <Alert title="Title" type="info">
        Click me!
      </Alert>,
    );
    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
  });

  it("can have a close button", async () => {
    const spy = vi.fn();
    const { container } = render(
      <Alert title="Title" type="critical" onClose={spy}>
        Click me!
      </Alert>,
    );

    await waitFor(() =>
      expect(getByLabelText(container, "Close")).toBeInTheDocument(),
    );

    fireEvent.click(getByLabelText(container, "Close"));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
