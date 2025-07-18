/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { SettingsToggleInput } from "./SettingsToggle";
import { Form } from "@radix-ui/react-form";

describe("Toggle", () => {
  it("renders", () => {
    const { asFragment } = render(
      <Form>
        <SettingsToggleInput name="simple_setting" label="Simple setting" />
      </Form>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with a help message", () => {
    const { asFragment } = render(
      <Form>
        <SettingsToggleInput
          name="simple_setting"
          label="Simple setting"
          helpMessage="A simple setting to control things"
        />
      </Form>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
it.each([true, false])(
  "renders with a disabled message (disabled=%s)",
  (disabled) => {
    const { asFragment } = render(
      <Form>
        <SettingsToggleInput
          name="simple_setting"
          label="Simple setting"
          disabled={disabled}
          helpMessage="A simple setting to control things"
          disabledMessage="This is disabled."
        />
      </Form>,
    );
    expect(asFragment()).toMatchSnapshot();
  },
);
