/*
Copyright 2023  New Vector Ltd

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
import React, {
  ComponentRef,
  forwardRef,
  ComponentProps,
  useReducer,
} from "react";
import { Control } from "@radix-ui/react-form";

import { ActionInput } from "../Action";

import VisibilityOn from "@vector-im/compound-design-tokens/icons/visibility-on.svg";
import VisibilityOff from "@vector-im/compound-design-tokens/icons/visibility-off.svg";

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
