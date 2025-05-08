/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { describe, expect, it, vi } from "vitest";
import { RadioMenuGroup } from "./RadioMenuGroup";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("RadioMenuItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
        ]}
        selected="1"
        onChange={() => {}}
        onFinished={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("runs onChange when value changed by click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
        ]}
        selected="1"
        onChange={onChange}
        onFinished={() => {}}
      />,
    );

    // Try toggling by clicking
    await user.click(screen.getByRole("menuitemradio", { name: "One" }));
    expect(onChange).toBeCalledTimes(1);
    onChange.mockClear();
  });

  it("runs onChange when value changed by keyboard", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
        ]}
        selected="1"
        onChange={onChange}
        onFinished={() => {}}
      />,
    );

    // Try toggling using keyboard controls
    await user.tab();
    await user.keyboard("[Space]");
    expect(onChange).toBeCalledTimes(1);
  });

  it("runs onFinish when item selected with pointer", async () => {
    const user = userEvent.setup();
    const onFinished = vi.fn();
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
        ]}
        selected="1"
        onChange={() => {}}
        onFinished={onFinished}
      />,
    );

    await user.click(screen.getByRole("menuitemradio", { name: "One" }));
    expect(onFinished).toHaveBeenCalled();
  });

  it("runs onFinish when item selected with enter key", async () => {
    const user = userEvent.setup();
    const onFinished = vi.fn();
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
        ]}
        selected="1"
        onChange={() => {}}
        onFinished={onFinished}
      />,
    );

    screen.getByRole("menuitemradio", { name: "One" }).focus();
    await user.keyboard("[Enter]");
    expect(onFinished).toHaveBeenCalled();
  });

  it("runs onChange but not onFinish when item selected with spacebar", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const onFinished = vi.fn();
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
        ]}
        selected="1"
        onChange={onChange}
        onFinished={onFinished}
      />,
    );

    screen.getByRole("menuitemradio", { name: "One" }).focus();
    await user.keyboard(" ");
    expect(onFinished).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
  });

  it("should add aria-disabled attribute to disabled items", async () => {
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
          { name: "3", label: "Three", disabled: true },
        ]}
        selected="1"
        onChange={() => {}}
        onFinished={() => {}}
      />,
    );

    expect(
      screen.getByRole("menuitemradio", { name: "Three" }),
    ).toHaveAttribute("aria-disabled", "true");
  });

  it("should not change to disabled items", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <RadioMenuGroup
        items={[
          { name: "1", label: "One" },
          { name: "2", label: "Two" },
          { name: "3", label: "Three", disabled: true },
        ]}
        selected="1"
        onChange={onChange}
        onFinished={() => {}}
      />,
    );

    await user.tab();
    await user.tab();
    await user.tab();
    await user.keyboard(" ");
    expect(onChange).not.toHaveBeenCalled();
  });
});
