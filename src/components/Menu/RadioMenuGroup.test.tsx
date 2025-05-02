/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { describe, expect, it, vi } from "vitest";
import { RadioMenuGroup } from "./RadioMenuGroup";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("RadioMenuItem", () => {
    it("renders", () => {
      const { asFragment } = render(
        <RadioMenuGroup items={[{name: "1", label: "One"}, {name: "2", label: "Two"}]} selected="1" onChange={() => {}} onFinished={()=>{}} />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  
    it("runs onChange when value changes", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <RadioMenuGroup items={[{name: "1", label: "One"}, {name: "2", label: "Two"}]} selected="1" onChange={onChange} onFinished={()=>{}} />,
      );
  
      // Try toggling using keyboard controls
      await user.tab();
      await user.keyboard("[Space]");
      expect(onChange).toBeCalledTimes(1);
      onChange.mockClear();
  
      // Try toggling by clicking
      await user.click(screen.getByRole("menuitemradio", {"name": "One"}));
      expect(onChange).toBeCalledTimes(1);
      onChange.mockClear();
    });

    it("runs onFinish when item selected with pointer", async () => {
      const user = userEvent.setup();
      const onFinished = vi.fn();
      render(
        <RadioMenuGroup items={[{name: "1", label: "One"}, {name: "2", label: "Two"}]} selected="1" onChange={()=>{}} onFinished={onFinished} />,
      );
    });

    it("runs onFinish when item selected with enter key", async () => {
    });

    it("does not run onFinish when item selected with spacebar", async () => {
    });
  });