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

import React, { PropsWithChildren, useCallback, useState } from "react";
import { ActionControl } from "../../ActionControl/ActionControl";
import { Icon } from "../../Icon/Icon";
import { Control } from "../Control";

/**
 * Thin wrapper around Radix UI Control component
 * https://www.radix-ui.com/docs/primitives/components/form#control
 */
export function PasswordControl(
  props: PropsWithChildren<React.ComponentProps<typeof Control>>
): JSX.Element {
  const [icon, setIcon] =
    useState<React.ComponentProps<typeof Icon>["icon"]>("thread");
  const [label, setLabel] = useState<"show" | "hide">("show");

  const onActionClick = useCallback(() => {
    if (label === "show") {
      setLabel("hide");
      // TODO: Change the icon when it will become available
      setIcon("thread");
    } else {
      setLabel("show");
      // TODO: Change the icon when it will become available
      setIcon("thread");
    }
  }, [label, icon]);

  return (
    <ActionControl
      {...props}
      icon={icon}
      actionLabel={label}
      onActionClick={onActionClick}
      type={label === "show" ? "password" : "text"}
    />
  );
}
