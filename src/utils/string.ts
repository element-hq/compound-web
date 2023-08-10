/*
Copyright 2023  New Vector Ltd

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

import GraphemeSplitter from "graphemer";

export const MX_USERNAME_PREFIX = "@";
export const MX_ROOM_PREFIX = "#";
export const MX_ALIAS_PREFIX = "+";

/**
 * The CommonJS output of the graphemer package looks wrong,
 * this is a workaround
 * To remove when https://github.com/flmnt/graphemer/issues/11 is fixed
 * @param value the constructor or wrapper with `default`
 * @returns the Graphemer constructor
 */
function interopDefault<T>(value: T): T {
  if ((value as unknown as { default: T }).default) {
    return (value as unknown as { default: T }).default;
  }

  return value;
}

/**
 * returns the first (non-sigil) character of 'name',
 * converted to uppercase
 * @param {string} name
 * @return {string} the first letter
 */
export function getInitialLetter(name: string): string {
  if (name.length < 1) {
    return "";
  }

  const initial = name[0];
  if ([MX_USERNAME_PREFIX, MX_ROOM_PREFIX, MX_ALIAS_PREFIX].includes(initial)) {
    name = name.substring(1);
  }

  // rely on a grapheme cluster splitter so that we don't break apart compound emojis
  const splitter = new (interopDefault(GraphemeSplitter))();
  const result = splitter.iterateGraphemes(name).next();
  return result.done ? "" : result.value;
}
