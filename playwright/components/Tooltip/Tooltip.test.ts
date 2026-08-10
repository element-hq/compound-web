/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { test } from "@playwright/test";
import { expect } from "@element-hq/element-web-playwright-common";

test.describe("Tooltip", () => {
  test(
    "should show next to mouse pointer",
    { tag: "@screenshot" },
    async ({ page }) => {
      await page.goto(
        `iframe.html?viewMode=story&id=tooltip--next-to-mouse-pointer`,
        {
          waitUntil: "networkidle",
        },
      );

      // Place cursor in the center
      await page.getByRole("button").hover();

      // Wait for tooltip
      await new Promise((r) => setTimeout(r, 2000));
      expect(page.getByText("This is a tooltip!")).toBeAttached();

      // Take a screenshot
      await expect(page).toMatchScreenshot("tooltip-next-to-pointer.png", {
        fullPage: true,
      });
    },
  );
});
