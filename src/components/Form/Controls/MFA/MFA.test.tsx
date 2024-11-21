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
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MFAControl } from "./MFA";
import { Root, Label, Field, Control } from "@radix-ui/react-form";

describe("PasswordControl", () => {
  const MFA: React.FC<React.ComponentProps<typeof MFAControl>> = (
    props = {},
  ) => (
    <Root>
      <Field name="mfa">
        <Label>MFA</Label>
        <Control asChild>
          <MFAControl {...props} placeholder="000000" />
        </Control>
      </Field>
    </Root>
  );

  it("renders", () => {
    const { asFragment } = render(<MFA />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("is invalid if not enough digits are set", async () => {
    const { getByLabelText } = render(<MFA />);

    const input = getByLabelText("MFA");
    await userEvent.type(input, "123");
    await userEvent.keyboard("{tab}");

    expect(input).toHaveAttribute("data-invalid");
  });

  it("is invalid with non-digits", async () => {
    const { getByLabelText } = render(<MFA />);

    const input = getByLabelText("MFA");
    await userEvent.type(input, "12sf65");
    await userEvent.keyboard("{tab}");

    expect(input).toHaveAttribute("data-invalid");
  });

  it("respects max length", async () => {
    const { getByLabelText } = render(<MFA length={3} />);

    const input = getByLabelText("MFA");
    await userEvent.type(input, "67890");
    await userEvent.keyboard("{tab}");

    expect(input).toHaveValue("678");
    expect(input).not.toHaveAttribute("data-invalid");
  });
});
