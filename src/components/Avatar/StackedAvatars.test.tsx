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

import { render } from "@testing-library/react";
import React from "react";

import { StackedAvatars } from "./StackedAvatars";

const originalImage = global.Image;

describe("StackedAvatars", () => {
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

  const avatars = [
    { id: "@alice:example.org", name: "Alice" },
    { id: "@bob:example.org", name: "Bob" },
  ];

  it("renders", () => {
    const { asFragment } = render(
      <StackedAvatars avatars={avatars} size="32px" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the mask to the body", () => {
    render(<StackedAvatars avatars={avatars} size="32px" />);

    // We can't run better assertions as `SVG` loading is mocked out in jest
    expect(document.querySelectorAll("svg")).toHaveLength(1);

    render(<StackedAvatars avatars={avatars} size="32px" />);

    // We only one instance of the mask, ever!
    expect(document.querySelectorAll("svg")).toHaveLength(1);
  });
});
