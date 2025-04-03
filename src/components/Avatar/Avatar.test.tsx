/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { describe, beforeEach, expect, it, afterEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import VideoIcon from "@vector-im/compound-design-tokens/assets/web/icons/video-call-solid";

import { Avatar } from "./Avatar";

const originalImage = global.Image;

describe("Avatar", () => {
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

  it("renders the image-less avatar", () => {
    const { asFragment } = render(<Avatar name="Bob" id="@bob:example.org" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not split emoji as first letter", () => {
    const { container } = render(
      <Avatar name="🤓 John" id="@john:example.org" />,
    );
    expect(container).toHaveTextContent("🤓");
  });

  it("does not split the flag emoji as first letter", () => {
    // This was a bug in the past, because we were relying on lodash's `split`,
    // which handles some graphemes incorrectly.
    const { container } = render(
      <Avatar name="🏴󠁧󠁢󠁷󠁬󠁳󠁿 John" id="@john:example.org" />,
    );
    expect(container).toHaveTextContent("🏴󠁧󠁢󠁷󠁬󠁳󠁿");
  });

  it.each([
    ["@bob:example.org", "4"],
    ["@alice:example.org", "3"],
    ["@charlie:example.org", "5"],
    ["@dan:example.org", "4"],
    ["@elena:example.org", "4"],
    ["@fanny:example.org", "3"],
  ])(
    "has a deterministic color based on the id passed to it, %s",
    (id, colorNumber) => {
      const { container } = render(<Avatar name={id} id={id} />);
      expect(container.firstChild).toHaveAttribute("data-color", colorNumber);
    },
  );

  it("renders the image avatar with an icon", () => {
    const { asFragment } = render(
      <Avatar name="Bob" id="@bob:example.org" Icon={VideoIcon} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
