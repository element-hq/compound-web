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

import { fireEvent, getByRole, render } from "@testing-library/react";
import React from "react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders", () => {
    const { asFragment } = render(<Button kind="primary">Click me!</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("can be clicked", () => {
    const spy = jest.fn();
    const { container } = render(<Button onClick={spy}>Click me!</Button>);

    fireEvent.click(getByRole(container, "button"));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("works as a link", () => {
    const { container } = render(
      <Button as="a" href="#anchor">
        This is a link that looks like a button
      </Button>
    );

    const anchor = getByRole(container, "link");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "#anchor");
  });
});
