/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */
import { expect, test } from "@playwright/test";

test.describe("Dropdown", () => {
  test("should be able to select a value", async ({ page }) => {
    await page.goto(`iframe.html?viewMode=story&id=dropdown--default`, {
      waitUntil: "networkidle",
    });

    await page.getByRole("combobox").click();
    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.getByRole("option", { name: "Option 2" }).click();
    await expect(page.getByRole("combobox")).toHaveText("Option 2");

    await page.getByRole("combobox").click();
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("should to use keyboard shortcut", async ({ page }) => {
    await page.goto(`iframe.html?viewMode=story&id=dropdown--default`, {
      waitUntil: "networkidle",
    });

    await page.getByRole("combobox").focus();
    await page.keyboard.press("ArrowDown");

    await expect(page).toHaveScreenshot({ fullPage: true });

    await page.keyboard.press("End");
    await expect(page.getByRole("option", { name: "Option 3" })).toBeFocused();

    await page.keyboard.press("Home");
    await expect(page.getByRole("option", { name: "Option 1" })).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.getByRole("combobox")).toHaveText("Option 1");
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
