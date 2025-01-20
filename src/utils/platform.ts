/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * Gets the platform on which the application is running.
 * If the userAgent could not be determined, this will default to "other"
 */
export function getPlatform(): "android" | "ios" | "other" {
  // The granularity of this value is kind of arbitrary: it distinguishes exactly
  // the platforms that this library needs to know about in order to correctly
  // implement the designs.

  // Some SSR environments don't provide access to this.
  const userAgent = globalThis.navigator?.userAgent;

  if (/android/i.test(userAgent)) {
    return "android";
    // We include 'Mac' here and double-check for touch support because iPads on
    // iOS 13 pretend to be a MacOS desktop
  } else if (
    /iPad|iPhone|iPod|Mac/.test(userAgent) &&
    "ontouchend" in document
  ) {
    return "ios";
  } else {
    return "other";
  }
}
