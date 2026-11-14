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

  test("should not overlap multiple children", async ({ page }) => {
    await page.goto(
      "iframe.html?viewMode=story&id=menu-menuitem--with-a-long-label-and-children",
      { waitUntil: "networkidle" },
    );

    const first = page.getByText("Longer children too");
    await first.evaluate((el) => {
      const second = el.cloneNode() as HTMLElement;
      second.textContent = "Second child";
      el.after(second);
    });

    const a = (await first.boundingBox())!;
    const b = (await page.getByText("Second child").boundingBox())!;
    const overlaps =
      a.x < b.x + b.width &&
      b.x < a.x + a.width &&
      a.y < b.y + b.height &&
      b.y < a.y + a.height;
    expect(overlaps).toBe(false);
  });
});
