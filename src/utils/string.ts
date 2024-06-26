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

export const MX_USERNAME_PREFIX = "@";
export const MX_ROOM_PREFIX = "#";
export const MX_ALIAS_PREFIX = "+";

const graphemeSegmenter = new Intl.Segmenter();

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
  const result = graphemeSegmenter.segment(name)[Symbol.iterator]().next();
  return result.done ? "" : result.value.segment;
}
