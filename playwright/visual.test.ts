/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { test } from "@element-hq/element-web-playwright-common/lib/fixtures/axe.js";
import { expect } from "@element-hq/element-web-playwright-common";
import fs from "fs";

interface StoryEntry {
  id: string;
  type: string;
  title: string;
  name: string;
  importPath: string;
  tags: string[];
}

interface Stories {
  [id: string]: StoryEntry;
}

test.describe.configure({ mode: "parallel" });

const storiesPath = new URL("../storybook-static/index.json", import.meta.url);
if (!fs.existsSync(storiesPath)) {
  console.error(
    "Storybook manifest not found, please rebuild with 'yarn build-storybook'",
  );
  process.exit(1);
}

const stories = JSON.parse(fs.readFileSync(storiesPath, "utf8"))
  .entries as Stories;

// Perform visual testing on each story
for (const story of Object.values(stories)) {
  // Ignore things that are not stories (e.g. doc pages)
  if (story.type === "story") {
    test(
      `${story.title} ${story.name}`,
      { tag: "@screenshot" },
      async ({ page, axe }) => {
        const search = new URLSearchParams({ viewMode: "story", id: story.id });
        await page.goto(`iframe.html?${search.toString()}`, {
          waitUntil: "networkidle",
        });
        await expect(page).toMatchScreenshot(
          `${story.title}-${story.name}-1.png`,
          {
            fullPage: true,
            css: ".hideInScreenshot { display: none !important; }",
          },
        );

        // Quite a few of our stories end up with axe violations. A lot of them are
        // just that components aren't mounted inside the container components they're
        // supposed to live in. Ideally the stories would probably put them in the right
        // context. Either way, we use this tag to exclude those components from axe
        // testing until they can be fixed.
        if (!story.tags.includes("axe-exclude")) {
          axe.disableRules([
            "landmark-one-main",
            "meta-viewport",
            "page-has-heading-one",
            "region",
          ]);

          await expect(axe).toHaveNoViolations();
        }
      },
    );
  }
}
