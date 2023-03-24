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
import { ActionControl } from "../../ActionControl/ActionControl";
import { Control } from "../Control";

import ThreadIcon from "../../Icon/icons/thread.svg";

/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export function PasswordControl(
  props: PropsWithChildren<React.ComponentProps<typeof Control>>
): JSX.Element {
  const [isHidden, toggleIsHidden] = useReducer((state) => !state, true);
  return (
    <ActionControl
      {...props}
      // TODO: Replace with the correct set of icons when they become available
      Icon={isHidden ? ThreadIcon : null}
      // TODO: Replace with a function that deal with i18n of those values
      actionLabel={isHidden ? "Show" : "Hide"}
      onActionClick={() => toggleIsHidden()}
      type={isHidden ? "password" : "text"}
    />
  );
}
