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
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PasswordInput } from "./Password";

describe("PasswordControl", () => {
  it("switches the input type", async () => {
    const user = userEvent.setup();
    const { container } = render(<PasswordInput defaultValue="p4ssw0rd!" />);

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
