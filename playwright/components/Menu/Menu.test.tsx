/*
 * Copyright 2025 New Vector Ltd
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { expect, test } from "@playwright/test";

test.describe("Menu", () => {
  test("should move the focus to the button", async ({ page }) => {
    await page.goto(
      `iframe.html?viewMode=story&id=menu--focus-trigger-on-close`,
      {
        waitUntil: "networkidle",
      },
    );

    await page.getByRole("menuitem", { name: "Profile" }).click();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  });
});
