/*
Copyright 2023 New Vector Ltd

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

import fs from "fs";

/**
 * There's currently a support issue between Storybook 7 and Percy
 * We can go around the problem by disabling `storyStoreV7` and running Percy
 * against the staticly built Storybook
 *
 * When https://github.com/percy/percy-storybook/issues/715 will be resolved
 * we need to remove this script and run `percy storybook:start --port=6006` instead
 */
const main = fs.readFileSync(".storybook/main.ts", "utf-8");
fs.writeFileSync(
  ".storybook/main.ts",
  main.replace("storyStoreV7: true,", "storyStoreV7: false,"),
  "utf-8"
);
