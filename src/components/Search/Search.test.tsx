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

import { describe, it, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import React, { ChangeEvent } from "react";
import { userEvent } from "@storybook/test";

import { Search } from "./Search";
import { Form } from "@radix-ui/react-form";

type SearchTestProps = {
  onChange?: (e: ChangeEvent) => void;
};

describe("Search", () => {
  const SearchTest = (props: SearchTestProps) => (
    <Form>
      <Search name="search" onChange={props.onChange ?? (() => {})} />
    </Form>
  );

  it("renders", () => {
    const { asFragment } = render(
      <Form>
        <Search name="search" />
      </Form>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange when text edited", async () => {
    let value;
    const onChange = vi
      .fn()
      .mockImplementation((e: ChangeEvent<HTMLInputElement>) => {
        value = e.target.value;
      });
    render(<SearchTest onChange={onChange} />);
    const query = "my query";
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, query);

    expect(onChange).toHaveBeenCalled();
    expect(value).toEqual(query);
  });
});
