/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Typography } from "./Typography";

type TypographyProps = React.ComponentProps<typeof Typography>;

/**
 * A text component. Underlying HTML element can be changed using the `as`
 * property. Will default to be a paragraph.
 */
export const Text: React.FC<
  Omit<TypographyProps, "type"> & {
    // xl is not a valid text size
    size?: Exclude<TypographyProps["size"], "xl">;
  }
> = ({ as = "p", children, ...props }) => {
  return (
    <Typography as={as} type="body" {...props}>
      {children}
    </Typography>
  );
};
