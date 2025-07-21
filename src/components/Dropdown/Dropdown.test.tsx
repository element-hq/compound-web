/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, expect, it } from "vitest";
import { composeStories } from "@storybook/react";
import * as stories from "./Dropdown.stories";
import { render, screen } from "@testing-library/react";
import React, { type FC, useMemo, useState } from "react";
import { Dropdown } from "./Dropdown";
import userEvent from "@testing-library/user-event";

const { Default, WithHelpLabel, WithError, WithDefaultValue } =
  composeStories(stories);

const ControlledDropdown: FC = () => {
  const [value, setValue] = useState("1");
  const values = useMemo<[string, string][]>(
    () => [
      ["1", "Option 1"],
      ["2", "Option 2"],
    ],
    [],
  );
  return (
    <Dropdown
      value={value}
      onValueChange={setValue}
      values={values}
      placeholder=""
      label="Label"
    />
  );
};

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
    const user = userEvent.setup();
    const { getByRole, container } = render(<Default />);
    await user.click(getByRole("combobox"));
    expect(container).toMatchSnapshot();
  });
  it("can select a value", async () => {
    const user = userEvent.setup();
    const { getByRole, container } = render(<Default />);
    await user.click(getByRole("combobox"));

    expect(getByRole("option", { name: "Option 2" })).toBeVisible();

    await user.click(getByRole("option", { name: "Option 2" }));

    expect(getByRole("combobox")).toHaveTextContent("Option 2");

    await user.click(getByRole("combobox"));

    expect(getByRole("option", { name: "Option 2" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    // Option 2 should be selected
    expect(container).toMatchSnapshot();
  });
  it("can use keyboard shortcuts", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<Default />);

    // arrowdown seems to already select Option 1... in real browsers this
    // doesn't happen. Maybe it's a user-event thing? arrowup just opens the
    // dropdown as we would expect.
    await user.type(getByRole("combobox"), "{arrowup}");
    expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{arrowdown}");
    expect(getByRole("option", { name: "Option 1" })).toHaveFocus();

    await user.keyboard("{End}");
    expect(getByRole("option", { name: "Option 3" })).toHaveFocus();

    await user.keyboard("{Enter}");

    expect(getByRole("combobox")).toHaveTextContent("Option 3");
    expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "false");
  });
  it("supports controlled operation", async () => {
    const user = userEvent.setup();
    render(<ControlledDropdown />);

    expect(screen.getByRole("option", { name: "Option 1" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.click(screen.getByRole("option", { name: "Option 2" }));
    expect(screen.getByRole("option", { name: "Option 2" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
