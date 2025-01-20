/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import * as Form from "./index";
import { TooltipProvider } from "../Tooltip/TooltipProvider";

type Props = {
  disabled: boolean;
  invalid: boolean;
  readOnly: boolean;
};

const KitchenSink = ({ disabled, invalid, readOnly }: Props) => (
  <TooltipProvider>
    <Form.Root>
      <Form.Field serverInvalid={invalid} name="mxid">
        <Form.Label>Username</Form.Label>
        <Form.TextControl
          disabled={disabled}
          readOnly={readOnly}
          defaultValue="Hello world!"
        />
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.Field>

      <Form.Field serverInvalid={invalid} name="password">
        <Form.Label>Password</Form.Label>
        <Form.PasswordControl
          disabled={disabled}
          readOnly={readOnly}
          defaultValue="sup3rS3cur3p4ssw0rd!"
        />
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.Field>

      <Form.Field serverInvalid={invalid} name="mfa">
        <Form.Label>MFA</Form.Label>
        <Form.MFAControl
          disabled={disabled}
          readOnly={readOnly}
          defaultValue="123"
        />
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.Field>

      <Form.InlineField
        serverInvalid={invalid}
        name="remember"
        control={
          <Form.CheckboxControl
            disabled={disabled}
            readOnly={readOnly}
            defaultChecked={true}
          />
        }
      >
        <Form.Label>Remember me</Form.Label>
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.InlineField>

      <Form.InlineField
        serverInvalid={invalid}
        name="radio"
        control={
          <Form.RadioControl
            disabled={disabled}
            readOnly={readOnly}
            defaultChecked={true}
          />
        }
      >
        <Form.Label>Option 1</Form.Label>
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.InlineField>

      <Form.InlineField
        serverInvalid={invalid}
        name="radio"
        control={
          <Form.RadioControl
            disabled={disabled}
            readOnly={readOnly}
            defaultChecked={true}
          />
        }
      >
        <Form.Label>Option 2</Form.Label>
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.InlineField>

      <Form.InlineField
        serverInvalid={invalid}
        name="toggle"
        control={
          <Form.ToggleControl
            disabled={disabled}
            readOnly={readOnly}
            defaultChecked={true}
          />
        }
      >
        <Form.Label>Toggle</Form.Label>
        {invalid ? (
          <Form.ErrorMessage>Error message.</Form.ErrorMessage>
        ) : (
          <Form.HelpMessage>Help message.</Form.HelpMessage>
        )}
      </Form.InlineField>

      <Form.Submit disabled={disabled}>Submit</Form.Submit>
    </Form.Root>
  </TooltipProvider>
);

const meta = {
  title: "Form/Kitchen Sink",
  component: KitchenSink,
  argTypes: {
    disabled: {
      type: "boolean",
    },
    readOnly: {
      type: "boolean",
    },
    invalid: {
      type: "boolean",
    },
  },
  args: {
    disabled: false,
    readOnly: false,
    invalid: false,
  },
} satisfies Meta<typeof KitchenSink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const ReadOnly: Story = { args: { readOnly: true } };
export const Invalid: Story = { args: { invalid: true } };
