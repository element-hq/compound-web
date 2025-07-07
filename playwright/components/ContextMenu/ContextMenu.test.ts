/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { test } from "@playwright/test";
import { expect } from "@element-hq/element-web-playwright-common";

test.describe("ContextMenu", () => {
  test(
    "should open the context menu on right click",
    { tag: "@screenshot" },
    async ({ page }) => {
      await page.goto(
        `iframe.html?viewMode=story&id=menu-contextmenu--context-menu`,
        {
          waitUntil: "networkidle",
        },
      );

      await page
        .getByText("Right click or long press to open menu")
        .click({ button: "right" });
      await expect(page).toMatchScreenshot("open.png", { fullPage: true });
    },
  );

  test(
    "should render without title",
    { tag: "@screenshot" },
    async ({ page }) => {
      await page.goto(
        `iframe.html?viewMode=story&id=menu-contextmenu--context-menu-without-title`,
        {
          waitUntil: "networkidle",
        },
      );

      await page
        .getByText("Right click or long press to open menu")
        .click({ button: "right" });
      await expect(page).toMatchScreenshot("without-title.png", {
        fullPage: true,
      });
    },
  );
});
