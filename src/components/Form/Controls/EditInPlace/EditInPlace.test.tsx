/*
Copyright 2024 New Vector Ltd

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

import { describe, it, expect, vi, afterEach } from "vitest";
import React, { ChangeEvent } from "react";
import { render, screen } from "@testing-library/react";

import { EditInPlace } from "./EditInPlace";
import { Root, Field, Control } from "@radix-ui/react-form";
import { userEvent } from "@storybook/test";
import { act } from "react-dom/test-utils";

type EditInPlaceTestProps = {
  error?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSave?: () => Promise<void>;
  onCancel?: () => void;
};

describe("PasswordControl", () => {
  const EditInPlaceTest = (props: EditInPlaceTestProps) => (
    <Root>
      <Field name="editInPlace">
        <Control asChild>
          <EditInPlace
            label="Edit Me"
            value={props.value ?? "Edit this text"}
            error={props.error}
            onChange={props.onChange ?? (() => {})}
            onSave={props.onSave ?? (() => Promise.resolve())}
            onCancel={props.onCancel ?? (() => {})}
            saveButtonLabel="Save"
            cancelButtonLabel="Cancel"
            savedLabel={"Saved"}
            initialValue={"Edit this text"}
          />
        </Control>
      </Field>
    </Root>
  );

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders", () => {
    const { asFragment } = render(<EditInPlaceTest />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls onChange when text edited", async () => {
    let value;
    const onChange = vi
      .fn()
      .mockImplementation((e: ChangeEvent<HTMLInputElement>) => {
        value = e.target.value;
      });
    render(<EditInPlaceTest onChange={onChange} />);

    await act(async () => {
      const input = screen.getByRole("textbox");
      // nb. we don't test updating the value here so we only type one character
      await userEvent.type(input, "!");
    });

    expect(onChange).toHaveBeenCalled();
    expect(value).toEqual("Edit this text!");
  });

  it("field is valid if no error specified", () => {
    render(<EditInPlaceTest />);

    const input = screen.getByRole("textbox");
    expect(input).toBeValid();
  });

  it("renders error icon and text if error provided", () => {
    render(<EditInPlaceTest error="Missing Left Falangey" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInvalid();
    expect(input).toHaveAttribute("aria-errormessage");

    const errorText = screen.getByText("Missing Left Falangey");
    expect(errorText).toBeInTheDocument();

    expect(errorText.id).toEqual(input.getAttribute("aria-errormessage"));
  });

  it("should disable save button if there's an error", () => {
    render(<EditInPlaceTest error="Missing Left Falangey" />);

    const saveButton = screen.getByRole("button", { name: "Save" });
    expect(saveButton).toBeDisabled();
  });

  it("disables save button when value not changed", () => {
    render(<EditInPlaceTest />);

    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
  });

  it("enables save button when value is changed", () => {
    render(<EditInPlaceTest value="Something else" />);

    expect(screen.getByRole("button", { name: "Save" })).toBeEnabled();
  });

  it("calls save callback on save button click", async () => {
    const onSave = vi.fn();
    render(<EditInPlaceTest onSave={onSave} value="Changed" />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "Save" }));
    });

    expect(onSave).toHaveBeenCalled();
  });

  it("calls onCancel when cancel button pressed", async () => {
    const onCancel = vi.fn();
    render(<EditInPlaceTest onCancel={onCancel} value="Changed" />);

    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onCancel).toHaveBeenCalled();
  });

  it("unfocuses the input when cancel button pressed", async () => {
    render(<EditInPlaceTest value="Changed" />);

    const input = screen.getByRole("textbox");
    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(document.activeElement).not.toEqual(input);
  });

  it("unfocuses the input when the save calllback promise resolves", async () => {
    render(<EditInPlaceTest value="Changed" />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button", { name: "Save" }));
    });

    const input = screen.getByRole("textbox");
    expect(document.activeElement).not.toEqual(input);
  });

  it("displays saved label for 2 seconds after save", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    render(<EditInPlaceTest value="Changed" />);

    expect(screen.queryByText("Saved")).not.toBeInTheDocument();

    await act(async () => {
      await user.click(screen.getByRole("button", { name: "Save" }));
    });

    expect(screen.getByText("Saved")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1900);
    });

    expect(screen.queryByText("Saved")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(screen.queryByText("Saved")).not.toBeInTheDocument();
  });

  it("does not call onSave if cancel pressed", async () => {
    const onSave = vi.fn();
    render(<EditInPlaceTest onSave={onSave} value="Changed" />);

    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(onSave).not.toHaveBeenCalled();
  });
});
