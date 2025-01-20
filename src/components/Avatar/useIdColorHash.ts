/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * Determines a number for a given Matrix ID or room ID, helps disambiguating users
 * who are trying to impersonate someone else.
 * @param id - a Matrix ID or room ID
 * @returns a hash of the ID provided
 */
export function useIdColorHash(id: string): number {
  const MIN = 1;
  const MAX = 6;
  // Sum up the values of all the char codes in the string
  const charCodeSum = id.split("").reduce((sum, char) => {
    return sum + char.charCodeAt(0);
  }, 0);
  return (charCodeSum % MAX) + MIN;
}
