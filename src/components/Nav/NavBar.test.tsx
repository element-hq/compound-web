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

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./NavBar.stories";

const { Default, TabRole, ScrollableTabs } = composeStories(stories);

describe("<NavBar />", () => {
  it("render a default nav bar", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("render a tabbed nav bar", () => {
    const { container } = render(<TabRole />);
    expect(container).toMatchSnapshot();
  });

  it("render a scrollable tabbed nav bar", () => {
    const { container } = render(<ScrollableTabs />);
    expect(container).toMatchSnapshot();
  });
});
