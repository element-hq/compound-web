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
    const { asFragment } = render(<Alert type="success">Success!</Alert>);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: Restore tests, loading icons in jest is not happy!
  it.skip("has no close button by default", () => {
    render(<Alert type="success">Click me!</Alert>);
    expect(screen.getByLabelText("close")).not.toBeInTheDocument();
  });

  // TODO: Restore tests, loading icons in jest is not happy!
  it.skip("can have a close button", async () => {
    const spy = jest.fn();
    const { container } = render(
      <Alert type="critical" onClose={spy}>
        Click me!
      </Alert>
    );

    await waitFor(() =>
      expect(getByLabelText(container, "close")).toBeInTheDocument()
    );

    fireEvent.click(getByLabelText(container, "close"));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
