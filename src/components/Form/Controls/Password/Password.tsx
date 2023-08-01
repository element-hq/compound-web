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

import React, { PropsWithChildren, useReducer } from "react";
import { ActionControl } from "../../../ActionControl/ActionControl";
import { Control } from "../../Control";

import VisibilityVisible from "@vector-im/compound-design-tokens/icons/visibility-visible.svg";
import VisibilityInvisible from "@vector-im/compound-design-tokens/icons/visibility-invisible.svg";

const showState = {
  isHidden: true,
  icon: VisibilityVisible,
  label: "Show",
  type: "password",
};

const hideState = {
  isHidden: false,
  icon: VisibilityInvisible,
  label: "Hide",
  type: "text",
};

/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export const PasswordControl: React.FC<
  PropsWithChildren<React.ComponentProps<typeof Control>>
> = (props) => {
  const [{ icon, label, type }, togglePasswordVisibility] = useReducer(
    (state) => (!state.isHidden ? showState : hideState),
    showState
  );
  return (
    <ActionControl
      {...props}
      Icon={icon}
      // TODO: Replace with a function that deal with i18n of those values
      actionLabel={label}
      onActionClick={() => togglePasswordVisibility()}
      type={type}
    />
  );
};
