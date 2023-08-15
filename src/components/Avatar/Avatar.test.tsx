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

import { describe, beforeEach, expect, it } from "vitest";
import { render, waitFor } from "@testing-library/react";
import React from "react";

import { Avatar } from "./Avatar";

const originalImage = global.Image;

describe("Avatar", () => {
  beforeEach(() => {
    global.Image = class extends originalImage {
      constructor() {
        super();
        setTimeout(() => {
          this.onload?.(new Event("load"));
        }, 50);
      }
    };
  });

  afterEach(() => {
    global.Image = originalImage;
  });

  it("renders the image-less avatar", () => {
    const { asFragment } = render(<Avatar name="Bob" id="@bob:example.org" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not split emoji as first letter", () => {
    const { container } = render(
      <Avatar name="🤓 John" id="@john:example.org" />,
    );
    expect(container).toHaveTextContent("🤓");
  });

  it("does not split the flag emoji as first letter", () => {
    // This was a bug in the past, because we were relying on lodash's `split`,
    // which handles some graphemes incorrectly.
    const { container } = render(
      <Avatar name="🏴󠁧󠁢󠁷󠁬󠁳󠁿 John" id="@john:example.org" />,
    );
    expect(container).toHaveTextContent("🏴󠁧󠁢󠁷󠁬󠁳󠁿");
  });

  it.each([
    ["@bob:example.org", "8"],
    ["@alice:example.org", "3"],
    ["@charlie:example.org", "5"],
    ["@dan:example.org", "8"],
    ["@elena:example.org", "2"],
    ["@fanny:example.org", "1"],
  ])(
    "has a deterministic color based on the id passed to it, %s",
    (id, colorNumber) => {
      const { container } = render(<Avatar name={id} id={id} />);
      expect(container.firstChild).toHaveAttribute("data-color", colorNumber);
    },
  );
});
