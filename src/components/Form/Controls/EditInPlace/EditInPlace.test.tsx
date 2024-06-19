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
import React from "react";
import { render } from "@testing-library/react";

import { userEvent } from "@storybook/test";
import { act } from "react-dom/test-utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { EditInPlace } from "./EditInPlace";

type EditInPlaceTestProps = {
  error?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave?: () => Promise<void>;
  onCancel?: () => void;
  disabled?: boolean;
};

describe("EditInPlace", () => {
  const EditInPlaceTest = (props: EditInPlaceTestProps) => (
    <TooltipProvider>
      <EditInPlace
        label="Edit Me"
        defaultValue={props.defaultValue}
        error={props.error}
        onChange={props.onChange ?? (() => {})}
        onSave={props.onSave ?? (() => Promise.resolve())}
        onCancel={props.onCancel ?? (() => {})}
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
        savedLabel="Saved"
        savingLabel="Saving..."
        disabled={props.disabled}
      />
    </TooltipProvider>
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
      .mockImplementation((e: React.ChangeEvent<HTMLInputElement>) => {
        value = e.target.value;
      });

    const { getByRole } = render(
      <EditInPlaceTest onChange={onChange} defaultValue="Edit this text" />,
    );

    await act(async () => {
      const input = getByRole("textbox");
      await userEvent.type(input, "!");
    });

    expect(onChange).toHaveBeenCalled();
    expect(value).toEqual("Edit this text!");
  });

  it("field is valid if no error specified", () => {
    const { getByRole } = render(<EditInPlaceTest />);

    const input = getByRole("textbox");
    expect(input).toBeValid();
  });

  it("renders error icon and text if error provided", () => {
    const { asFragment, getByRole, getByText } = render(
      <EditInPlaceTest error="Missing Left Falangey" />,
    );
    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("textbox");
    expect(input).toBeInvalid();
    expect(input).toHaveAttribute("aria-describedby");

    const errorText = getByText("Missing Left Falangey");
    expect(errorText).toBeInTheDocument();

    expect(errorText.id).toEqual(input.getAttribute("aria-describedby"));
  });

  it("enables save button once we entered something", async () => {
    const { getByRole } = render(<EditInPlaceTest />);

    expect(getByRole("button", { name: "Save" })).toBeDisabled();

    await act(async () => {
      await userEvent.type(getByRole("textbox"), "Changed");
    });

    expect(getByRole("button", { name: "Save" })).toBeEnabled();
  });

  it("calls save callback on save button click", async () => {
    const onSave = vi.fn();
    const { getByRole } = render(<EditInPlaceTest onSave={onSave} />);

    await act(async () => {
      await userEvent.type(getByRole("textbox"), "Changed");
      await userEvent.click(getByRole("button", { name: "Save" }));
    });

    expect(onSave).toHaveBeenCalled();
  });

  it("calls save callback if enter pressed in the text box", async () => {
    const onSave = vi.fn();
    const { getByRole } = render(<EditInPlaceTest onSave={onSave} />);

    await act(async () => {
      await userEvent.type(getByRole("textbox"), "Changed");
      await userEvent.type(getByRole("textbox"), "{enter}");
    });

    expect(onSave).toHaveBeenCalled();
  });

  it("calls onCancel when cancel button pressed", async () => {
    const onCancel = vi.fn();
    const { getByRole } = render(<EditInPlaceTest onCancel={onCancel} />);

    await act(async () => {
      await userEvent.type(getByRole("textbox"), "Changed");
      await userEvent.click(getByRole("button", { name: "Cancel" }));
    });

    expect(onCancel).toHaveBeenCalled();
  });

  it("resets the form when cancel button pressed", async () => {
    const onCancel = vi.fn();
    const { getByRole } = render(
      <EditInPlaceTest onCancel={onCancel} defaultValue="Initial" />,
    );

    const input = getByRole("textbox") as HTMLInputElement;

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, "Changed");
    });

    expect(input.value).toBe("Changed");

    await act(async () => {
      await userEvent.click(getByRole("button", { name: "Cancel" }));
    });

    expect(input.value).toBe("Initial");

    expect(onCancel).toHaveBeenCalled();
  });

  it("unfocuses the input when cancel button pressed", async () => {
    const { getByRole } = render(<EditInPlaceTest />);

    const input = getByRole("textbox");
    await act(async () => {
      await userEvent.type(input, "Changed");
      await userEvent.click(getByRole("button", { name: "Cancel" }));
    });

    expect(document.activeElement).not.toEqual(input);
  });

  it("unfocuses the input when the save callback promise resolves", async () => {
    const { getByRole } = render(<EditInPlaceTest />);

    const input = getByRole("textbox");
    await act(async () => {
      await userEvent.type(input, "Changed");
      await userEvent.click(getByRole("button", { name: "Save" }));
    });

    expect(document.activeElement).not.toEqual(input);
  });

  it("displays saved label for 2 seconds after save", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });

    const { getByRole, getByText, queryByText, asFragment } = render(
      <EditInPlaceTest />,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Saved")).not.toBeInTheDocument();

    await act(async () => {
      await user.type(getByRole("textbox"), "Changed");
      await user.click(getByRole("button", { name: "Save" }));
    });

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Saved")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1900);
    });

    expect(queryByText("Saved")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(200);
    });

    expect(queryByText("Saved")).not.toBeInTheDocument();
  });

  it("does not call onSave if cancel pressed", async () => {
    const onSave = vi.fn();
    const { getByRole } = render(<EditInPlaceTest onSave={onSave} />);

    await act(async () => {
      await userEvent.type(getByRole("textbox"), "Changed");
      await userEvent.click(getByRole("button", { name: "Cancel" }));
    });

    expect(onSave).not.toHaveBeenCalled();
  });

  it("disables control when disabled", () => {
    const { getByRole, asFragment } = render(<EditInPlaceTest disabled />);
    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("textbox");
    expect(input).toBeDisabled();
  });
});
