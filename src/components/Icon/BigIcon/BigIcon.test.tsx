/*
Copyright 2024 New Vector Ltd

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

import { describe, expect, it } from "vitest";
import { composeStories } from "@storybook/react";
import * as stories from "./BigIcon.stories.tsx";
import { render } from "@testing-library/react";
import React from "react";

const { Default, Medium, Small, Destructive, Success } =
  composeStories(stories);

describe("BigIcon", () => {
  it("renders a large big icon", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("renders a medium big icon", () => {
    const { container } = render(<Medium />);
    expect(container).toMatchSnapshot();
  });

  it("renders a small big icon", () => {
    const { container } = render(<Small />);
    expect(container).toMatchSnapshot();
  });

  it("renders a destructive big icon", () => {
    const { container } = render(<Destructive />);
    expect(container).toMatchSnapshot();
  });

  it("renders a success big icon", () => {
    const { container } = render(<Success />);
    expect(container).toMatchSnapshot();
  });
});
