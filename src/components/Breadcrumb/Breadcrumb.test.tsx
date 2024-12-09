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

import { describe, expect, it, vi } from "vitest";
import { composeStories } from "@storybook/react";
import * as stories from "./Breadcrumb.stories.tsx";
import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Breadcrumb } from "./Breadcrumb.tsx";

const { Default } = composeStories(stories);

describe("Breadcrumb", () => {
  it("should render", () => {
    render(<Default />);
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it("should call onPageClick when a page is clicked", async () => {
    const user = userEvent.setup();
    const onPageClick = vi.fn();
    const onBackClick = vi.fn();

    render(
      <Breadcrumb
        pages={["1st level page", "2nd level page", "Current page"]}
        onPageClick={onPageClick}
        onBackClick={onBackClick}
        backLabel="Back"
      />,
    );

    // Click listener
    await user.click(screen.getByRole("button", { name: "1st level page" }));
    expect(onPageClick).toHaveBeenCalledWith("1st level page", 0);

    onPageClick.mockReset();
    // Keyboard listener
    await user.type(
      screen.getByRole("button", { name: "1st level page" }),
      " ",
    );
    expect(onPageClick).toHaveBeenCalledWith("1st level page", 0);

    // Back button
    await user.click(screen.getByRole("button", { name: "Back" }));
    expect(onBackClick).toHaveBeenCalled();
  });
});
