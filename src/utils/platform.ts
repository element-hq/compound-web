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
