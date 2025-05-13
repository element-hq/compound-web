/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { expect, test } from "@playwright/test";

test.describe("ContextMenu", () => {
  test("should open the context menu on right click", async ({ page }) => {
    await page.goto(
      `iframe.html?viewMode=story&id=menu-contextmenu--context-menu`,
      {
        waitUntil: "networkidle",
      },
    );

    await page
      .getByText("Right click or long press to open menu")
      .click({ button: "right" });
    await expect(page).toHaveScreenshot({ fullPage: true });
  });

  test("should render without title", async ({ page }) => {
    await page.goto(
      `iframe.html?viewMode=story&id=menu-contextmenu--context-menu-without-title`,
      {
        waitUntil: "networkidle",
      },
    );

    await page
      .getByText("Right click or long press to open menu")
      .click({ button: "right" });
    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
