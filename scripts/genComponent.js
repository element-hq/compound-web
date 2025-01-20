/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { argv } from "process";
import fs from "fs";
import path from "path";

const NAME_ID = "__ComponentTemplate__";

const BASE_PATH = `src/utils/${NAME_ID}`;
const DIST_PATH = "src/components";

const YEAR_ID = "%YEAR%";
const COPYRIGHT_HOLDER_ID = "%COPYRIGHT_HOLDER%";

const YEAR = new Date().getFullYear();

const [, , COMPONENT_NAME, ...COPYRIGHTARRAY] = argv;

console.log(`Generating a new component: ${COMPONENT_NAME}`);

if (!COMPONENT_NAME) {
  throw new Error("You must provide a component name");
}

const COPYRIGHT_HOLDER = COPYRIGHTARRAY.join(" ").trim() || "New Vector Ltd";
console.log(`Attributing the copyright to: ${COPYRIGHT_HOLDER}\n`);

const fileExtensions = [".tsx", ".test.tsx", ".stories.tsx", ".module.css"];

fs.mkdirSync(path.join(DIST_PATH, COMPONENT_NAME), { recursive: true });

for (const extension of fileExtensions) {
  const content = fs.readFileSync(
    path.join(BASE_PATH, NAME_ID + extension),
    "utf-8",
  );

  const newFileContent = content
    .replaceAll(YEAR_ID, YEAR)
    .replaceAll(COPYRIGHT_HOLDER_ID, COPYRIGHT_HOLDER)
    .replaceAll(NAME_ID, COMPONENT_NAME);

  const filePath = path.join(
    DIST_PATH,
    COMPONENT_NAME,
    COMPONENT_NAME + extension,
  );
  fs.writeFileSync(filePath, newFileContent, "utf-8");
  console.log(`Creating ${filePath}`);
}

console.log("\n✅ Done!");
