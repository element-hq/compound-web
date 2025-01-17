/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";

import { ActionInput } from "./Action";
import { TooltipProvider } from "../../../Tooltip/TooltipProvider";
import userEvent from "@testing-library/user-event";

describe("ActionInput", () => {
  it("renders", () => {
    const { asFragment } = render(
      <TooltipProvider>
        <ActionInput
          Icon={ChatIcon}
          actionLabel="Click me!"
          onActionClick={() => {
            console.log("clicked!");
          }}
        />
      </TooltipProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("trigger the action", async () => {
    const user = userEvent.setup();
    const spy = vi.fn();

    render(
      <TooltipProvider>
        <ActionInput
          Icon={ChatIcon}
          actionLabel="Click me!"
          onActionClick={spy}
        />
      </TooltipProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Click me!" }));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
