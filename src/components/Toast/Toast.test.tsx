/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React, { useState, type FC } from "react";
import { composeStories } from "@storybook/react";

import * as stories from "./Toast.stories";
import userEvent from "@testing-library/user-event";
import { Menu } from "../Menu/Menu";
import { Toast } from "./Toast";
import { MenuItem } from "../Menu/MenuItem";
import { TooltipProvider } from "../Tooltip/TooltipProvider";

const { Default, Icon, CloseAndIcon, Multiline, Clickable } =
  composeStories(stories);

describe("Toast", () => {
  it("renders", () => {
    const { asFragment } = render(<Default />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with an icon", () => {
    const { asFragment } = render(<Icon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with a close button and icon", () => {
    const { asFragment } = render(<CloseAndIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders multiline", () => {
    const { asFragment } = render(<Multiline />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("has no close button when onClose is not provided", () => {
    render(<Default />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<CloseAndIcon onClose={onClose} />);

    await user.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("renders the whole toast as a button when onClick is provided", () => {
    const { asFragment } = render(<Clickable />);
    expect(
      screen.getByRole("button", {
        name: "There are new messages, jump to them",
      }),
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onClick when the toast is clicked", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Clickable onClick={onClick} />);

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("functions as a menu trigger", async () => {
    const user = userEvent.setup();
    const selectOption1 = vi.fn();
    const MenuTrigger: FC = () => {
      const [open, setOpen] = useState(false);
      return (
        <TooltipProvider>
          <Menu
            title="Menu"
            open={open}
            onOpenChange={setOpen}
            trigger={
              <Toast aria-haspopup="menu" tooltip="More info">
                Menu available
              </Toast>
            }
          >
            <MenuItem label="Option 1" onSelect={selectOption1} />
            <MenuItem label="Option 2" onSelect={() => {}} />
            <MenuItem label="Option 3" onSelect={() => {}} />
          </Menu>
        </TooltipProvider>
      );
    };
    render(<MenuTrigger />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("menuitem", { name: "Option 1" }));
    expect(selectOption1).toHaveBeenCalled();
  });
});
