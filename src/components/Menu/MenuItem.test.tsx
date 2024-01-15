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

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import LeaveIcon from "@vector-im/compound-design-tokens/icons/leave.svg";
import UserProfileIcon from "@vector-im/compound-design-tokens/icons/user-profile.svg";
import MicOnOutlineIcon from "@vector-im/compound-design-tokens/icons/mic-on-outline.svg";

import { MenuItem } from "./MenuItem";
import { Text } from "../Typography/Text";

import * as stories from "./MenuItem.stories";
import { composeStories } from "@storybook/react";

const {
  Primary,
  Critical,
  PrimaryDisabled,
  CriticalDisabled,
  IconIsComponent,
  WithALongLabel,
  WithALongLabelAndChildren,
} = composeStories(stories);

describe("MenuItem", () => {
  it("renders", () => {
    const { asFragment } = render(
      <MenuItem
        kind="critical"
        Icon={LeaveIcon}
        label="Leave room"
        onSelect={() => {}}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with a child", () => {
    const { asFragment } = render(
      <MenuItem Icon={UserProfileIcon} label="People" onSelect={() => {}}>
        <Text as="span" size="sm">
          10
        </Text>
      </MenuItem>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders without a label", () => {
    const { asFragment } = render(
      <MenuItem Icon={MicOnOutlineIcon} label={null} onSelect={() => {}}>
        Imagine that there might be a volume slider here in place of the label
      </MenuItem>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with an component as an Icon", () => {
    const { asFragment } = render(<IconIsComponent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a Primary menu item", () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Critical menu item", () => {
    const { container } = render(<Critical />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Primary Disabled menu item", () => {
    const { container } = render(<PrimaryDisabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a Critical Disabled menu item", () => {
    const { container } = render(<CriticalDisabled />);
    expect(container).toMatchSnapshot();
  });
  it("renders a menu item with a long label", () => {
    const { container } = render(<WithALongLabel />);
    expect(container).toMatchSnapshot();
  });
  it("renders a menu item with a long label and children", () => {
    const { container } = render(<WithALongLabelAndChildren />);
    expect(container).toMatchSnapshot();
  });
});
