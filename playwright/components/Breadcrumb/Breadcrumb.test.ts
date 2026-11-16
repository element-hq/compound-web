/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */
import { test, expect, type Page } from "@playwright/test";

const ALL_PAGES = ["Root", "Page 1", "Page 2", "Page 3", "Current page"];

async function openStory(page: Page, id: string): Promise<void> {
  await page.goto(`iframe.html?viewMode=story&id=breadcrumb--${id}`, {
    waitUntil: "networkidle",
  });
}

/** Resize the container the breadcrumb is rendered in. */
async function setWidth(page: Page, width: number): Promise<void> {
  await page.getByRole("navigation").evaluate((nav, w) => {
    nav.parentElement!.style.inlineSize = `${w}px`;
  }, width);
}

/** The text of every rendered page item, including the ellipsis. */
function items(page: Page) {
  return page.getByRole("navigation").getByRole("listitem");
}

test.describe("Breadcrumb", () => {
  test("shows every page when there is enough room", async ({ page }) => {
    await openStory(page, "collapsed");
    await setWidth(page, 600);

    await expect(items(page)).toHaveText(ALL_PAGES);
  });

  test("collapses pages from the left, keeping the root and parent", async ({
    page,
  }) => {
    await openStory(page, "collapsed");
    await setWidth(page, 300);

    await expect(items(page)).toHaveText([
      "Root",
      "…",
      "Page 3",
      "Current page",
    ]);
    // The ellipsis names the pages it hides.
    await expect(page.getByTitle("Page 1 / Page 2")).toBeVisible();
  });

  test("collapses only as much as needed", async ({ page }) => {
    await openStory(page, "collapsed");
    await setWidth(page, 600);
    await expect(items(page)).toHaveText(ALL_PAGES);

    // Make the container 10px too narrow for every page. Swapping "Page 1"
    // for the ellipsis frees up more than that, so only one page collapses.
    const slack = await page.getByRole("list").evaluate((list) => {
      const first = list.firstElementChild!.getBoundingClientRect();
      const last = list.lastElementChild!.getBoundingClientRect();
      return list.getBoundingClientRect().width - (last.right - first.left);
    });
    await setWidth(page, 600 - slack - 10);

    await expect(items(page)).toHaveText([
      "Root",
      "…",
      "Page 2",
      "Page 3",
      "Current page",
    ]);
  });

  test("restores and re-collapses pages as the width changes", async ({
    page,
  }) => {
    await openStory(page, "collapsed");

    await setWidth(page, 300);
    await expect(items(page)).toHaveText([
      "Root",
      "…",
      "Page 3",
      "Current page",
    ]);

    await setWidth(page, 600);
    await expect(items(page)).toHaveText(ALL_PAGES);

    // Regression: collapsing again after being fully expanded.
    await setWidth(page, 300);
    await expect(items(page)).toHaveText([
      "Root",
      "…",
      "Page 3",
      "Current page",
    ]);
  });

  test("clips from the left when collapsing is not enough", async ({
    page,
  }) => {
    await openStory(page, "clipped");

    await expect(items(page)).toHaveText([
      "Root",
      "…",
      "Page 3",
      "Current page",
    ]);

    const list = (await page.getByRole("list").boundingBox())!;
    const root = (await page
      .getByRole("button", { name: "Root" })
      .boundingBox())!;
    const current = (await page.getByText("Current page").boundingBox())!;

    // The root is pushed off the start edge...
    expect(root.x).toBeLessThan(list.x);
    // ...while the current page stays fully inside the list.
    expect(current.x).toBeGreaterThanOrEqual(list.x);
    expect(current.x + current.width).toBeLessThanOrEqual(
      list.x + list.width + 0.5,
    );
  });
});
