/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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

import React from "react";
import { Typography } from "./Typography";
import { Body } from "./Body";

export const Heading: React.FC<
  Omit<React.ComponentProps<typeof Typography>, "type">
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

export const H1: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h1" weight="semibold" size="xl" {...props}>
      {children}
    </Heading>
  );
};

export const H2: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h2" weight="semibold" size="lg" {...props}>
      {children}
    </Heading>
  );
};

export const H3: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h3" weight="semibold" size="md" {...props}>
      {children}
    </Heading>
  );
};

export const H4: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Heading as="h1" weight="semibold" size="sm" {...props}>
      {children}
    </Heading>
  );
};

export const H5: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Body as="h5" weight="semibold" size="lg" {...props}>
      {children}
    </Body>
  );
};

export const H6: React.FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Body as="h1" weight="semibold" size="md" {...props}>
      {children}
    </Body>
  );
};
