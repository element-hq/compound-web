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
