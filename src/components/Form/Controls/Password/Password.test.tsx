/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordInput } from "./Password";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";

describe("PasswordControl", () => {
  it("switches the input type", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <TooltipProvider>
        <PasswordInput defaultValue="p4ssw0rd!" />
      </TooltipProvider>,
    );

    expect(container.querySelector("[type=password]")).toBeInTheDocument();
    expect(container).toMatchSnapshot("invisible");

    await user.click(screen.getByRole("button", { name: "Show" }));

    expect(container.querySelector("[type=password]")).not.toBeInTheDocument();
    expect(container.querySelector("[type=text]")).toBeInTheDocument();
    expect(container).toMatchSnapshot("visible");

    await user.click(screen.getByRole("button", { name: "Hide" }));

    expect(container.querySelector("[type=password]")).toBeInTheDocument();
    expect(container).toMatchSnapshot("invisible");
  });
});
