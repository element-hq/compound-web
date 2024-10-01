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

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import * as stories from "./Tooltip.stories";
import { composeStories, composeStory } from "@storybook/react";
import userEvent from "@testing-library/user-event";
import { TooltipProvider } from "./TooltipProvider";
import { Tooltip } from "./Tooltip";
import { UserIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

const {
  Default,
  WithStringCaption,
  WithComponentCaption,
  ForcedOpen,
  ForcedClose,
  ForcedDisabled,
  InteractiveTrigger,
  NonInteractiveTrigger,
  Descriptive,
} = composeStories(stories);

describe("Tooltip", () => {
  it("renders open by default", () => {
    render(<ForcedOpen />);
    // tooltip labels button and does not use role="tooltip"
    screen.getByRole("button", { name: "I'm always open" });
    expect(screen.queryByRole("tooltip")).toBe(null);
  });

  it("renders closed by default", () => {
    render(<ForcedClose />);
    // no tooltip, and no label either
    expect(screen.queryByRole("tooltip")).toBe(null);
    expect(screen.queryByRole("button", { name: /.*/ })).toBe(null);
  });

  it("renders disabled", () => {
    render(<ForcedDisabled />);
    // no tooltip, and no label either
    expect(screen.queryByRole("tooltip")).toBe(null);
    expect(screen.queryByRole("button", { name: /.*/ })).toBe(null);
  });

  it("renders default tooltip", async () => {
    render(<Default />);
    // tooltip labels button and does not use role="tooltip"
    screen.getByRole("button", { name: "@bob:example.org" });
    expect(screen.queryByRole("tooltip")).toBe(null);
  });

  it("opens tooltip on focus", async () => {
    const user = userEvent.setup();
    render(<InteractiveTrigger />);
    expect(screen.queryByRole("tooltip")).toBe(null);
    await user.tab();
    // trigger focused, tooltip shown
    expect(screen.getByRole("link")).toHaveFocus();
    screen.getByRole("tooltip");
  });

  it("opens tooltip on focus where trigger is non interactive", async () => {
    const user = userEvent.setup();
    render(<NonInteractiveTrigger />);
    expect(screen.queryByRole("tooltip")).toBe(null);
    await user.tab();
    // trigger focused, tooltip shown
    expect(screen.getByText("Just some text").parentElement).toHaveFocus();
    screen.getByRole("tooltip");
  });

  it("overrides default tab index for non interactive triggers", async () => {
    const user = userEvent.setup();
    const Component = composeStory(
      {
        ...stories.NonInteractiveTrigger,
        args: {
          ...stories.NonInteractiveTrigger.args,
          nonInteractiveTriggerTabIndex: -1,
        },
      },
      stories.default,
    );
    render(<Component />);
    await user.tab();
    // trigger cannot be focused
    expect(screen.queryByRole("tooltip")).toBe(null);
  });

  it("renders with string caption", async () => {
    const user = userEvent.setup();
    render(<WithStringCaption />);
    await user.tab();
    // tooltip labels button and describes button with caption
    expect(
      screen.getByRole("button", { name: "I can have a caption" }),
    ).toHaveAccessibleDescription("My beautiful caption");
  });

  it("renders with component caption", async () => {
    const user = userEvent.setup();
    render(<WithComponentCaption />);
    await user.tab();
    // tooltip labels button and describes button with caption
    expect(
      screen.getByRole("button", { name: "Copy" }),
    ).toHaveAccessibleDescription("Ctrl + C");
  });

  it("renders a descriptive tooltip", async () => {
    render(<Descriptive />);
    // tooltip shown, but does not change the button's accessible name
    screen.getByRole("tooltip", { name: "Employer Identification Number" });
    expect(screen.queryByRole("button", { name: "EIN" })).toBe(null);
  });

  it("labels an image", async () => {
    render(
      <TooltipProvider>
        <Tooltip isTriggerInteractive={false} label="User profile">
          <UserIcon role="image" width={24} height={24} />
        </Tooltip>
      </TooltipProvider>,
    );
    screen.getByRole("image", { name: "User profile" });
  });
});
