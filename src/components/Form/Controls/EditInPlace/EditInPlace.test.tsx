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
import { ErrorMessage } from "../../Message";

type EditInPlaceTestProps = Omit<
  React.ComponentProps<typeof EditInPlace>,
  | "saveButtonLabel"
  | "cancelButtonLabel"
  | "savedLabel"
  | "savingLabel"
  | "label"
>;

describe("EditInPlace", () => {
  const EditInPlaceTest = (props: EditInPlaceTestProps) => (
    <TooltipProvider>
      <EditInPlace
        label="Edit Me"
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"
        savedLabel="Saved"
        savingLabel="Saving..."
        {...props}
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

  it("renders error icon and text if passed as children", () => {
    const { asFragment, getByRole, getByText } = render(
      <EditInPlaceTest serverInvalid>
        <ErrorMessage>Missing Left Falangey</ErrorMessage>
      </EditInPlaceTest>,
    );
    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("textbox");
    expect(input).toBeInvalid();
    expect(input).toHaveAttribute("aria-describedby");

    const errorText = getByText("Missing Left Falangey");
    expect(errorText).toBeInTheDocument();

    expect(errorText.id).toEqual(input.getAttribute("aria-describedby"));
  });

  it("uses native form validation logic", async () => {
    const { asFragment, getByRole, queryByText } = render(
      <EditInPlaceTest type="email" required>
        <ErrorMessage match="valueMissing">you did not fill this</ErrorMessage>
        <ErrorMessage match="typeMismatch">this is not an email</ErrorMessage>
      </EditInPlaceTest>,
    );
    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("textbox");
    expect(input).toBeInvalid();

    // The message hasn't showed up yet
    expect(queryByText("you did not fill this")).not.toBeInTheDocument();

    await act(async () => {
      // Focus and submit the form
      await userEvent.keyboard("{tab}{enter}");
    });

    // The message should be there
    expect(queryByText("you did not fill this")).toBeInTheDocument();

    await act(async () => {
      // Type an invalid email
      await userEvent.type(input, "notanemail");
      await userEvent.keyboard("{enter}");
    });

    // Another message should be there
    expect(queryByText("you did not fill this")).not.toBeInTheDocument();
    expect(queryByText("this is not an email")).toBeInTheDocument();

    await act(async () => {
      // Type something else to clear out the errors
      await userEvent.clear(input);
      await userEvent.type(input, "something else");
    });

    // The message should be gone
    expect(queryByText("you did not fill this")).not.toBeInTheDocument();
    expect(queryByText("this is not an email")).not.toBeInTheDocument();
  });

  it("uses the custom error messages passed as children", async () => {
    const { getByRole, queryByText, asFragment } = render(
      <EditInPlaceTest>
        <ErrorMessage match={(value) => value !== "hunter2"}>
          password should be hunter2
        </ErrorMessage>
      </EditInPlaceTest>,
    );
    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("textbox");

    // The message hasn't showed up yet
    expect(queryByText("password should be hunter2")).not.toBeInTheDocument();
    expect(input).toBeValid();

    await act(async () => {
      // Focus, type and submit the form
      await userEvent.type(input, "something");
      await userEvent.keyboard("{tab}");
    });

    // The message should be there
    expect(queryByText("password should be hunter2")).toBeInTheDocument();
    expect(input).toBeInvalid();

    await act(async () => {
      // Type the correct password
      await userEvent.clear(input);
      await userEvent.type(input, "hunter2");
      await userEvent.keyboard("{tab}");
    });

    // The message should be gone and the input valid
    expect(queryByText("password should be hunter2")).not.toBeInTheDocument();
    expect(input).toBeValid();
  });

  it("should show the buttons when the input or buttons are focused", async () => {
    const { queryByRole } = render(<EditInPlaceTest />);

    expect(queryByRole("button", { name: "Save" })).not.toBeInTheDocument();

    await act(async () => {
      // Focus the input
      await userEvent.keyboard("{tab}");
    });
    expect(queryByRole("button", { name: "Save" })).toBeInTheDocument();

    await act(async () => {
      // Focus the save button
      await userEvent.keyboard("{tab}");
    });

    // It should still be visible
    expect(queryByRole("button", { name: "Save" })).toBeInTheDocument();

    await act(async () => {
      // Focus the cancel button
      await userEvent.keyboard("{tab}");
    });

    // It should still be visible
    expect(queryByRole("button", { name: "Save" })).toBeInTheDocument();

    await act(async () => {
      // Focus away
      await userEvent.keyboard("{tab}");
    });

    // The button should be hidden
    expect(queryByRole("button", { name: "Save" })).not.toBeInTheDocument();
  });

  it("enables save button once we entered something", async () => {
    const { getByRole, queryByRole } = render(<EditInPlaceTest />);

    const input = getByRole("textbox");
    expect(queryByRole("button", { name: "Save" })).not.toBeInTheDocument();

    await act(async () => {
      // Focus the input
      await userEvent.click(input);
    });

    // The button should be visible but disabled
    expect(getByRole("button", { name: "Save" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    await act(async () => {
      await userEvent.type(input, "Changed");
    });

    // The button should be enabled
    expect(getByRole("button", { name: "Save" })).toHaveAttribute(
      "aria-disabled",
      "false",
    );
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
      <EditInPlaceTest onSave={() => new Promise((r) => setTimeout(r, 500))} />,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Saved")).not.toBeInTheDocument();

    await act(async () => {
      await user.type(getByRole("textbox"), "Changed");
      await user.click(getByRole("button", { name: "Save" }));
    });

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Saving...")).toBeInTheDocument();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(600);
    });

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Saved")).toBeInTheDocument();

    await act(async () => {
      await vi.advanceTimersByTimeAsync(2000);
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

  it("shows the help label in the right conditions", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const { getByRole, getByText, queryByText } = render(
      <EditInPlaceTest
        helpLabel="Help"
        required
        onSave={() => new Promise((r) => setTimeout(r, 500))}
      >
        <ErrorMessage match="valueMissing">Required</ErrorMessage>
      </EditInPlaceTest>,
    );

    const input = getByRole("textbox");
    expect(getByText("Help")).toBeInTheDocument();

    // When we start typing, it's still there
    await act(async () => {
      await user.type(input, "Changed");
      await user.keyboard("{tab}");
    });

    expect(getByText("Help")).toBeInTheDocument();

    // When the form becomes valid, it's gone
    await act(async () => {
      await user.clear(input);
      await user.keyboard("{tab}");
    });

    expect(queryByText("Help")).not.toBeInTheDocument();

    // When it becomes valid again, it's back
    await act(async () => {
      await user.type(input, "Changed");
      await user.keyboard("{tab}");
    });

    expect(getByText("Help")).toBeInTheDocument();

    // When we're submitting, it's gone
    await act(async () => {
      await user.click(getByRole("button", { name: "Save" }));
    });

    expect(queryByText("Help")).not.toBeInTheDocument();
    expect(getByText("Saving...")).toBeInTheDocument();

    // When we're showing 'Saved', it's still gone
    await act(async () => {
      await vi.advanceTimersByTimeAsync(600);
    });

    expect(queryByText("Help")).not.toBeInTheDocument();
    expect(getByText("Saved")).toBeInTheDocument();

    // When we're done showing 'Saved', it's back
    await act(async () => {
      await vi.advanceTimersByTimeAsync(2000);
    });

    expect(getByText("Help")).toBeInTheDocument();
    expect(queryByText("Saved")).not.toBeInTheDocument();
  });

  it("disables control when disabled", () => {
    const { getByRole, asFragment } = render(<EditInPlaceTest disabled />);
    expect(asFragment()).toMatchSnapshot();

    const input = getByRole("textbox");
    expect(input).toBeDisabled();
  });
});
