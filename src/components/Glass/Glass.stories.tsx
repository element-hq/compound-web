/*
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

import { Glass as GlassComponent } from "./Glass";
import { Text } from "../Typography/Text";

export default {
  title: "Glass",
  component: GlassComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} as Meta<typeof GlassComponent>;

const Template: StoryFn<typeof GlassComponent> = (args) => (
  // Use an image as the background to really show off the glass effect
  <div
    style={{
      background: "url('/images/__test__/kitten2.jpg')",
      backgroundSize: "cover",
      inlineSize: "fit-content",
      blockSize: "fit-content",
      padding: 16,
    }}
  >
    <GlassComponent
      style={{
        inlineSize: 250,
        blockSize: 150,
      }}
      {...args}
    >
      <div
        style={{
          background: "var(--cpd-color-bg-canvas-default)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>Your content here</Text>
      </div>
    </GlassComponent>
  </div>
);

export const Glass = Template.bind({});
Glass.args = {};
