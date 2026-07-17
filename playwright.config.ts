/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { defineConfig, devices } from "@playwright/test";

const port = 6006;
const baseUrl = `http://localhost:${port}`;

const baseChromium = {
  ...devices["Desktop Chrome"],
  viewport: { width: 720, height: 720 },
};

export default defineConfig({
  testDir: "playwright",
  use: {
    baseURL: baseUrl,
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...baseChromium,
      },
    },
    {
      name: "forced-colors",
      use: {
        ...baseChromium,
        contextOptions: {
          forcedColors: "active",
        },
      },
    },
  ],
  webServer: {
    command: `npx serve -c ../.serverc.json -p ${port} -L storybook-static/`,
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
  },
  reporter: process.env.CI
    ? [
        ["html"],
        ["github"],
        [
          "@element-hq/element-web-playwright-common/lib/stale-screenshot-reporter.js",
        ],
      ]
    : [["html"]],
});
