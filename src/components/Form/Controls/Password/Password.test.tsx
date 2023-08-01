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
import React from "react";
import { act, getByLabelText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordControl } from "./Password";
import { Root } from "../../Root";
import { Field } from "../../Field";

describe("PasswordControl", () => {
  it("switches the input type", async () => {
    const { container } = render(
      <Root>
        <Field name="password">
          <PasswordControl value="p4ssw0rd!" />
        </Field>
      </Root>,
    );

    expect(container.querySelector("[type=password]")).toBeInTheDocument();

    const user = userEvent.setup();

    await act(async () => {
      await user.click(getByLabelText(container, "Show"));
    });

    expect(container.querySelector("[type=password]")).not.toBeInTheDocument();
    expect(container.querySelector("[type=text]")).toBeInTheDocument();

    await act(async () => {
      await user.click(getByLabelText(container, "Hide"));
    });

    expect(container.querySelector("[type=password]")).toBeInTheDocument();
  });
});
