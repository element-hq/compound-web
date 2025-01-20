/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
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
