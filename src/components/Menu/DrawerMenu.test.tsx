/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";

import { DrawerMenu } from "./DrawerMenu";
import { MenuItem } from "./MenuItem";
import { Separator } from "../Separator/Separator";

describe("DrawerMenu", () => {
  it("renders", () => {
    const { asFragment } = render(
      <DrawerMenu title="Settings">
        <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
        <Separator />
        <MenuItem
          kind="critical"
          Icon={LeaveIcon}
          label="Sign out"
          onSelect={() => {}}
        />
      </DrawerMenu>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
