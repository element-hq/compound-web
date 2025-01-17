/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import { AvatarStack } from "./AvatarStack";
import { Avatar } from "./Avatar";

const originalImage = global.Image;

describe("AvatarStack", () => {
  beforeEach(() => {
    global.Image = class extends originalImage {
      constructor() {
        super();
        setTimeout(() => {
          this.onload?.(new Event("load"));
        }, 50);
      }
    };
  });

  afterEach(() => {
    global.Image = originalImage;
  });

  const avatars = [
    { id: "@alice:example.org", name: "Alice" },
    { id: "@bob:example.org", name: "Bob" },
  ];

  it("renders", () => {
    const { asFragment } = render(
      <AvatarStack>
        {avatars.map((avatar) => (
          <Avatar
            name={avatar.name}
            id={avatar.id}
            key={avatar.id}
            size="32px"
          />
        ))}
      </AvatarStack>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("adds the mask to the body", () => {
    render(
      <AvatarStack>
        {avatars.map((avatar) => (
          <Avatar
            name={avatar.name}
            id={avatar.id}
            key={avatar.id}
            size="32px"
          />
        ))}
      </AvatarStack>,
    );

    // We can't run better assertions as `SVG` loading is mocked out in jest
    expect(document.querySelectorAll("svg")).toHaveLength(1);

    render(
      <AvatarStack>
        {avatars.map((avatar) => (
          <Avatar
            name={avatar.name}
            id={avatar.id}
            key={avatar.id}
            size="32px"
          />
        ))}
      </AvatarStack>,
    );

    // We only one instance of the mask, ever!
    expect(document.querySelectorAll("svg")).toHaveLength(1);
  });
});
