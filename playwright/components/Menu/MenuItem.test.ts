/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { test, expect } from "@playwright/test";

test.describe("MenuItem", () => {
  test("should keep its width when hovered", async ({ page }) => {
    // A short label with children wider than the chevron
    const search = new URLSearchParams({
      viewMode: "story",
      id: "menu-menuitem--with-a-long-label-and-children",
      args: "label:Settings",
    });
    await page.goto(`iframe.html?${search.toString()}`, {
      waitUntil: "networkidle",
    });

    const item = page.getByRole("menuitem");
    // Size the item to its content, as it would be inside a menu
    await item.evaluate((el) => {
      el.parentElement!.style.inlineSize = "fit-content";
    });

    const { width } = (await item.boundingBox())!;
    await item.hover();
    await expect(page.getByText("Longer children too")).toBeHidden();
    expect((await item.boundingBox())!.width).toBe(width);
  });
});
