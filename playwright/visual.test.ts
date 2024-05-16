/*
Copyright 2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { expect, test } from "@playwright/test";
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
    test(`${story.title} ${story.name}`, async ({ page }) => {
      const search = new URLSearchParams({ viewMode: "story", id: story.id });
      await page.goto(`iframe.html?${search.toString()}`, {
        waitUntil: "networkidle",
      });
      await expect(page).toHaveScreenshot({ fullPage: true });
    });
  }
}
