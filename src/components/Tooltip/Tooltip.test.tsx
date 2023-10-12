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

import { describe, it, expect, beforeAll } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { Tooltip } from "./Tooltip";
import { IconButton } from "../IconButton/IconButton";

describe("Tooltip", () => {
  beforeAll(() => {
    global.ResizeObserver = require("resize-observer-polyfill");
  });
  it("renders open by default", () => {
    const { asFragment } = render(
      <Tooltip label="Hello world 👋" caption="⌘ + C" open={true}>
        <IconButton>
          <svg />
        </IconButton>
      </Tooltip>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders", () => {
    const { asFragment } = render(
      <Tooltip label="Hello world 👋">
        <IconButton>
          <svg />
        </IconButton>
      </Tooltip>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
