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
import * as stories from "./Dropdown.stories";
import { act, render, waitFor } from "@testing-library/react";
import React from "react";
import { userEvent } from "@storybook/test";

const { Default, WithHelpLabel, WithError, WithDefaultValue } =
  composeStories(stories);

describe("Dropdown", () => {
  it("renders a Default dropdown", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it("renders a dropdown with a help label", () => {
    const { container } = render(<WithHelpLabel />);
    expect(container).toMatchSnapshot();
  });
  it("renders a dropdown with an error ", () => {
    const { container } = render(<WithError />);
    expect(container).toMatchSnapshot();
  });
  it("renders a dropdown with a default value ", () => {
    const { container } = render(<WithDefaultValue />);
    expect(container).toMatchSnapshot();
  });
  it("can be opened", async () => {
    const { getByRole, container } = render(<Default />);
    await act(async () => {
      await userEvent.click(getByRole("combobox"));
    });
    expect(container).toMatchSnapshot();
  });
  it("can select a value", async () => {
    const { getByRole, container } = render(<Default />);
    await act(async () => {
      await userEvent.click(getByRole("combobox"));
    });

    await waitFor(() =>
      expect(getByRole("option", { name: "Option 2" })).toBeVisible(),
    );

    await act(async () => {
      await userEvent.click(getByRole("option", { name: "Option 2" }));
    });

    expect(getByRole("combobox")).toHaveTextContent("Option 2");

    await act(async () => {
      await userEvent.click(getByRole("combobox"));
    });

    await waitFor(() =>
      expect(getByRole("option", { name: "Option 2" })).toHaveAttribute(
        "aria-selected",
        "true",
      ),
    );

    // Option 2 should be selected
    expect(container).toMatchSnapshot();
  });
  it("can use keyboard shortcuts", async () => {
    const { getByRole } = render(<Default />);

    await act(async () => userEvent.type(getByRole("combobox"), "{arrowdown}"));
    await waitFor(() =>
      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "true"),
    );

    await act(async () => userEvent.keyboard("{arrowdown}"));
    expect(getByRole("option", { name: "Option 1" })).toHaveFocus();

    await act(async () => userEvent.keyboard("{End}"));
    expect(getByRole("option", { name: "Option 3" })).toHaveFocus();

    await act(async () => userEvent.keyboard("{Enter}"));

    await waitFor(() => {
      expect(getByRole("combobox")).toHaveTextContent("Option 3");
      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "false");
    });
  });
});
