/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React from "react";
import { Typography } from "./Typography";
import { Text } from "./Text";

type TypographyProps = React.ComponentProps<typeof Typography>;

/**
 * A heading component.
 */
export const Heading: React.FC<
  Omit<TypographyProps, "type"> & {
    // xs is not a valid heading size
    size?: Exclude<TypographyProps["size"], "xs">;
  }
> = ({ as = "h1", children, ...props }) => {
  return (
    <Typography as={as} type="heading" {...props}>
      {children}
    </Typography>
  );
};

type HeadingProps = Omit<
  React.ComponentProps<typeof Heading>,
  "as" | "weight" | "size"
>;

/**
 * A Heading level-1 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export const H1: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h1" weight="semibold" size="xl" {...props}>
      {children}
    </Heading>
  );
};

/**
 * A Heading level-2 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export const H2: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h2" weight="semibold" size="lg" {...props}>
      {children}
    </Heading>
  );
};

/**
 * A Heading level-3 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export const H3: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h3" weight="semibold" size="md" {...props}>
      {children}
    </Heading>
  );
};

/**
 * A Heading level-4 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export const H4: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h4" weight="semibold" size="sm" {...props}>
      {children}
    </Heading>
  );
};

/**
 * A Heading level-5 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export const H5: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Text as="h5" weight="semibold" size="lg" {...props}>
      {children}
    </Text>
  );
};

/**
 * A Heading level-6 styled component. Underlying HTML element can be changed
 * usign the `as` property.
 */
export const H6: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Text as="h6" weight="semibold" size="md" {...props}>
      {children}
    </Text>
  );
};
