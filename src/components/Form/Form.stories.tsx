/*
Copyright 2023 The Matrix.org Foundation C.I.C.
Copyright 2023 New Vector Ltd

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
import { Meta, StoryFn } from "@storybook/react";

import * as Form from "./index";
import { PasswordControl } from "./Controls/Password";

export default {
  title: "Form",
  component: Form.Root,
} as Meta<typeof Form.Root>;

const Template: StoryFn<typeof Form.Root> = () => (
  <Form.Root>
    <Form.Field name="mxid">
      <Form.Label>Username</Form.Label>
      <Form.Control value="Hello world!" />
    </Form.Field>
    <Form.Field name="password">
      <Form.Label>Password</Form.Label>
      <PasswordControl value="sup3rS3cur3p4ssw0rd!" />
    </Form.Field>

    <Form.Submit>Submit</Form.Submit>
  </Form.Root>
);

export const Root = Template.bind({});
Root.args = {};

Root.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/HUysJAhv6cK6p1Pc81Fxaa/Matrix-Authentication-Service-(MAS)?node-id=101%3A16968&t=gc1qRwZLEob0m7OM-1",
  },
};
