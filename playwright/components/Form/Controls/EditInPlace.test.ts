/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { test } from "@playwright/test";
import { expect } from "@element-hq/element-web-playwright-common";

test.describe("EditInPlace", () => {
  test(
    "should render save & cancel buttons correctly",
    { tag: "@screenshot" },
    async ({ page }) => {
      await page.goto(
        `iframe.html?viewMode=story&id=form-controls-editinplace--empty`,
        {
          waitUntil: "networkidle",
        },
      );

      await page.getByLabel("Label").focus();

      await expect(page).toMatchScreenshot("focused.png", {
        fullPage: true,
      });
    },
  );
});
