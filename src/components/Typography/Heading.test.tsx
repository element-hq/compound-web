/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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
import { render } from "@testing-library/react";
import React from "react";

import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders", () => {
    const { asFragment, container } = render(
      <Heading>The quick brown fox jumps over the lazy dog.</Heading>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(container.querySelector("h1")).not.toBeNull();
  });

  it("lets you override the HTML element", () => {
    const { container } = render(<Heading as="h2">Hello world.</Heading>);
    expect(container.querySelector("h1")).toBeNull();
    expect(container.querySelector("h2")).not.toBeNull();
  });
});
