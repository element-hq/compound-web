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
import { fireEvent, getByLabelText, render } from "@testing-library/react";
import React from "react";
import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";

import { ActionInput } from "./Action";

describe("ActionInput", () => {
  it("renders", () => {
    const { asFragment } = render(
      <ActionInput
        Icon={ChatIcon}
        actionLabel="Click me!"
        onActionClick={() => {
          console.log("clicked!");
        }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("trigger the action", () => {
    const spy = vi.fn();

    const { container } = render(
      <ActionInput
        Icon={ChatIcon}
        actionLabel="Click me!"
        onActionClick={spy}
      />,
    );

    const actionBtn = getByLabelText(container, "Click me!");

    fireEvent.click(actionBtn);

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
