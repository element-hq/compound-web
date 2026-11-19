/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, expect, it, vi } from "vitest";
import { composeStories } from "@storybook/react";
import * as stories from "./Dropdown.stories";
import { act, render, screen, waitFor } from "@testing-library/react";
import React, { type FC, useMemo, useState } from "react";
import { Dropdown } from "./Dropdown";
import userEvent from "@testing-library/user-event";
import { fn } from "storybook/test";

const {
  Default,
  WithHelpLabel,
  WithError,
  WithDefaultValue,
  MenuVariant,
  MenuVariantInsideMenu,
} = composeStories(stories);

const ControlledDropdown: FC = () => {
  const [value, setValue] = useState("1");
  const values = useMemo<string[]>(() => ["1", "2"], []);
  return (
    <Dropdown
      value={value}
      onValueChange={setValue}
      values={values}
      label="Label"
      renderItem={(value) => "Option " + value}
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
  it("renders and opens with a custom trigger", async () => {
    const user = userEvent.setup();
    render(
      <Dropdown
        values={["1", "2"]}
        label={null}
        trigger={(props) => (
          <button {...props} aria-label="Custom trigger">
            Custom trigger
          </button>
        )}
        renderItem={(value) => "Option " + value}
      />,
    );

    expect(
      screen.getByRole("combobox", { name: "Custom trigger" }),
    ).toBeVisible();

    await user.click(screen.getByRole("combobox", { name: "Custom trigger" }));

    expect(screen.getByRole("option", { name: "Option 1" })).toBeVisible();
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

describe("Dropdown menu variant", () => {
  const item = (name: string): HTMLElement | null =>
    screen.queryByRole("menuitem", { name });

  it("renders a closed menu variant", () => {
    const { container } = render(<MenuVariant />);
    expect(container).toMatchSnapshot();
  });

  it("gives the trigger menu button semantics", async () => {
    const user = userEvent.setup();
    render(<MenuVariant />);
    const trigger = screen.getByRole("button", { name: /Label/ });
    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).not.toHaveAttribute("role");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const menu = screen.getByRole("menu", { name: "Label" });
    expect(trigger).toHaveAttribute("aria-controls", menu.id);
  });

  it("shows the values as plain menu items, without radios", async () => {
    const user = userEvent.setup();
    render(<MenuVariant />);

    await user.click(screen.getByRole("button", { name: /Label/ }));

    expect(item("Option 1")).toBeInTheDocument();
    expect(item("Option 2")).toBeInTheDocument();
    expect(item("Option 3")).toBeInTheDocument();
    expect(screen.queryByRole("menuitemradio")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("radio", { hidden: true }),
    ).not.toBeInTheDocument();
  });

  it("selects a value and closes", async () => {
    const user = userEvent.setup();
    // Storybook's fn(), to match the type of the story's args
    const onValueChange = fn();
    render(<MenuVariant onValueChange={onValueChange} />);
    const trigger = screen.getByRole("button", { name: /Label/ });
    await user.click(trigger);

    await user.click(item("Option 3")!);

    expect(onValueChange).toHaveBeenCalledWith("Option3");
    await waitFor(() => expect(item("Option 3")).not.toBeInTheDocument());
    expect(trigger).toHaveTextContent("Option 3");
  });

  it("does not open on hover", async () => {
    const user = userEvent.setup();
    render(<MenuVariantInsideMenu />);

    await user.hover(screen.getByRole("button", { name: "Choose an option" }));
    await act(() => new Promise((r) => setTimeout(r, 200)));

    expect(item("Option 1")).not.toBeInTheDocument();
  });

  it("opens with the right arrow key and focuses the first item", async () => {
    const user = userEvent.setup();
    render(<MenuVariantInsideMenu />);
    screen.getByRole("button", { name: "Choose an option" }).focus();

    await user.keyboard("{ArrowRight}");

    await waitFor(() => expect(item("Option 1")).toHaveFocus());
  });

  it("leaves the down arrow key to the parent menu", async () => {
    const user = userEvent.setup();
    render(<MenuVariantInsideMenu />);
    screen.getByRole("button", { name: "Choose an option" }).focus();

    await user.keyboard("{ArrowDown}");
    await act(() => new Promise((r) => setTimeout(r, 50)));

    expect(item("Option 1")).not.toBeInTheDocument();
  });

  it("keeps the parent menu open when a value is selected inside a Menu", async () => {
    const user = userEvent.setup();
    // Storybook's fn(), to match the type of the story's args
    const onValueChange = fn();
    render(<MenuVariantInsideMenu onValueChange={onValueChange} />);
    await user.click(screen.getByRole("button", { name: "Choose an option" }));

    await user.click(item("Option 2")!);

    expect(onValueChange).toHaveBeenCalledWith("Option2");
    await waitFor(() => expect(item("Option 2")).not.toBeInTheDocument());
    expect(screen.getByRole("menuitem", { name: "Profile" })).toBeVisible();
  });

  it("positions against the parent menu and trigger by default inside a Menu", async () => {
    const user = userEvent.setup();
    render(<MenuVariantInsideMenu />);
    const trigger = screen.getByRole("button", { name: "Choose an option" });
    const parentMenu = trigger.closest<HTMLElement>("[role=menu]")!;
    vi.spyOn(parentMenu, "getBoundingClientRect").mockReturnValue(
      new DOMRect(10, 20, 300, 400),
    );
    const triggerRect = vi
      .spyOn(trigger, "getBoundingClientRect")
      .mockReturnValue(new DOMRect(30, 100, 100, 24));

    await user.click(trigger);

    await waitFor(() => expect(triggerRect).toHaveBeenCalled());
    // The anchor spans the parent menu horizontally and the trigger vertically
    const wrapper = screen.getByRole("menu", {
      name: "Options",
    }).parentElement!;
    await waitFor(() =>
      expect(
        wrapper.style.getPropertyValue("--radix-popper-anchor-width"),
      ).toBe("300px"),
    );
    expect(wrapper.style.getPropertyValue("--radix-popper-anchor-height")).toBe(
      "24px",
    );
  });

  it("does nothing when disabled", async () => {
    const user = userEvent.setup();
    render(<MenuVariant disabled />);

    await user.click(screen.getByRole("button", { name: /Label/ }));

    expect(item("Option 1")).not.toBeInTheDocument();
  });

  it("shows the items inline when the parent menu is a drawer", async () => {
    const platform = await import("../../utils/platform");
    const spy = vi.spyOn(platform, "getPlatform").mockReturnValue("android");
    try {
      render(<MenuVariantInsideMenu />);
      expect(
        screen.queryByRole("button", { name: "Choose an option" }),
      ).not.toBeInTheDocument();
      expect(item("Option 1")).toBeInTheDocument();
    } finally {
      spy.mockRestore();
    }
  });
});
