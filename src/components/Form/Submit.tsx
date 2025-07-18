/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { forwardRef, type ComponentPropsWithoutRef } from "react";
import { Submit as RadixSubmit } from "@radix-ui/react-form";

import { Button } from "../Button/Button";

type SubmitProps = Omit<
  ComponentPropsWithoutRef<typeof Button>,
  "submit" | "as"
>;

/**
 * A stylised submit button for forms.
 */
export const Submit = forwardRef<HTMLButtonElement, SubmitProps>(
  function Submit(props, ref) {
    return (
      <RadixSubmit asChild>
        <Button type="submit" ref={ref} {...props} />
      </RadixSubmit>
    );
  },
);
