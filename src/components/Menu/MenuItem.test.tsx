/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import MicOnIcon from "@vector-im/compound-design-tokens/assets/web/icons/mic-on";

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
  WithoutChevron,
  WithoutIcon,
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
      <MenuItem Icon={MicOnIcon} label={null} onSelect={() => {}}>
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
  it("renders a menu item without a chevron", () => {
    const { container } = render(<WithoutChevron />);
    expect(container).toMatchSnapshot();
  });
  it("renders a menu item without an icon", () => {
    const { container } = render(<WithoutIcon />);
    expect(container).toMatchSnapshot();
  });
});
