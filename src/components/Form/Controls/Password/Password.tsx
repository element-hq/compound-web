/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/
import React, {
  type ComponentRef,
  forwardRef,
  type ComponentProps,
  useReducer,
} from "react";
import { Control } from "@radix-ui/react-form";

import { ActionInput } from "../Action";

import VisibilityOn from "@vector-im/compound-design-tokens/assets/web/icons/visibility-on";
import VisibilityOff from "@vector-im/compound-design-tokens/assets/web/icons/visibility-off";

const showState = {
  isHidden: true,
  icon: VisibilityOff,
  label: "Show",
  type: "password",
};

const hideState = {
  isHidden: false,
  icon: VisibilityOn,
  label: "Hide",
  type: "text",
};

type Props = Omit<
  ComponentProps<typeof ActionInput>,
  "type" | "actionLabel" | "onActionClick" | "Icon"
>;

/**
 * A password input with a toggle to show/hide the password.
 *
 * Standalone input to be used outside of Radix forms.
 */
export const PasswordInput = forwardRef<
  ComponentRef<typeof ActionInput>,
  Props
>(function PasswordControl(props, ref) {
  const [{ icon, label, type }, togglePasswordVisibility] = useReducer(
    (state) => (!state.isHidden ? showState : hideState),
    showState,
  );

  return (
    <ActionInput
      ref={ref}
      {...props}
      Icon={icon}
      // TODO: Replace with a function that deal with i18n of those values
      actionLabel={label}
      onActionClick={() => togglePasswordVisibility()}
      type={type}
    />
  );
});

/**
 * A password input with a toggle to show/hide the password.
 *
 * Control to be used in a Radix form.
 */
export const PasswordControl = forwardRef<
  ComponentRef<typeof PasswordInput>,
  ComponentProps<typeof PasswordInput>
>(function PasswordControl(props, ref) {
  return (
    <Control asChild>
      <PasswordInput ref={ref} {...props} />
    </Control>
  );
});
