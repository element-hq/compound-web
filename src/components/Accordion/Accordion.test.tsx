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

import { describe, it, expect, vi, afterEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import * as stories from "./Accordion.stories";
import { composeStories, composeStory } from "@storybook/react";

const { Default, Single, Multiple } = composeStories(stories);

describe("<Accordion />", () => {
  it("renders an uncontrolled single accordion by default", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it("renders an uncontrolled single accordion", () => {
    const { container } = render(<Single />);
    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByText("Item 1"));

    expect(screen.getByText("Item 1").getAttribute("data-state")).toEqual(
      "open",
    );
    fireEvent.click(screen.getByText("Item 2"));

    expect(screen.getByText("Item 1").getAttribute("data-state")).toEqual(
      "closed",
    );
    expect(screen.getByText("Item 2").getAttribute("data-state")).toEqual(
      "open",
    );
  });

  it("renders an uncontrolled multiple accordion", () => {
    const { container } = render(<Multiple />);
    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByText("Item 1"));
    expect(screen.getByText("Item 1").getAttribute("data-state")).toEqual(
      "open",
    );

    fireEvent.click(screen.getByText("Item 2"));
    // both open
    expect(screen.getByText("Item 1").getAttribute("data-state")).toEqual(
      "open",
    );
    expect(screen.getByText("Item 2").getAttribute("data-state")).toEqual(
      "open",
    );
  });

  describe("single controlled", () => {
    const onValueChange = vi.fn();
    // compose the story with our mocked onValueChange
    const SingleControlled = composeStory(
      {
        ...stories.SingleControlled,
        args: {
          ...stories.SingleControlled.args,
          onValueChange,
        },
      },
      stories.default,
    );

    afterEach(() => {
      onValueChange.mockClear();
    });

    it("renders a controlled single accordion with an item open", () => {
      render(<SingleControlled />);

      expect(screen.getByText("Item 1").getAttribute("data-state")).toEqual(
        "open",
      );
    });

    it("handles click on an expanded item", () => {
      render(<SingleControlled />);

      fireEvent.click(screen.getByText("Item 1"));
      expect(onValueChange).toHaveBeenCalledWith("");
    });

    it("handles click on a collapsed item", () => {
      render(<SingleControlled />);

      fireEvent.click(screen.getByText("Item 2"));
      expect(onValueChange).toHaveBeenCalledWith("item2");
    });
  });

  describe("multiple controlled", () => {
    const onValueChange = vi.fn();
    // compose the story with our mocked onValueChange
    const MultipleControlled = composeStory(
      {
        ...stories.MultipleControlled,
        args: {
          ...stories.MultipleControlled.args,
          onValueChange,
        },
      },
      stories.default,
    );

    afterEach(() => {
      onValueChange.mockClear();
    });

    it("renders a controlled single accordion with an item open", () => {
      render(<MultipleControlled />);

      expect(screen.getByText("Item 1").getAttribute("data-state")).toEqual(
        "open",
      );
      expect(screen.getByText("Item 2").getAttribute("data-state")).toEqual(
        "open",
      );
    });

    it("handles click on an expanded item", () => {
      render(<MultipleControlled />);

      fireEvent.click(screen.getByText("Item 1"));
      // item1 removed from array of open items
      expect(onValueChange).toHaveBeenCalledWith(["item2"]);
    });

    it("handles click on a collapsed item", () => {
      render(<MultipleControlled />);

      fireEvent.click(screen.getByText("Item 3"));
      // item3 added to array of open items
      expect(onValueChange).toHaveBeenCalledWith(["item1", "item2", "item3"]);
    });
  });
});
