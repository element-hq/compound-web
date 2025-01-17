/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { expect, test } from "@playwright/test";

test.describe("EditInPlace", () => {
  test("should render save & cancel buttons correctly", async ({ page }) => {
    await page.goto(
      `iframe.html?viewMode=story&id=form-controls-editinplace--empty`,
      {
        waitUntil: "networkidle",
      },
    );

    await page.getByLabel("Label").focus();

    await expect(page).toHaveScreenshot({ fullPage: true });
  });
});
