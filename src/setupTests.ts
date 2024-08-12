/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";
import ResizeObserverPolyfill from "resize-observer-polyfill";

/**
 * Polyfilling for `ResizeObserver` as this isn't provided by jsdom
 */
global.ResizeObserver = ResizeObserverPolyfill;

/**
 * Polyfilling for `react-dom/server` as those aren't shipped with jsdom16 and above
 */
Object.assign(global, { TextDecoder, TextEncoder });
