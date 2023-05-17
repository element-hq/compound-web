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

import { getByRole, render } from "@testing-library/react";
import React from "react";

import { Checkbox } from "./Checkbox";
import userEvent from "@testing-library/user-event";

describe("Checkbox", () => {
  it("renders", () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should not have focus after being clicked", async () => {
    const { container } = render(<Checkbox />);
    const checkbox = getByRole(container, "checkbox");
    await userEvent.click(checkbox);
    expect(checkbox).not.toHaveFocus();
  });
});
