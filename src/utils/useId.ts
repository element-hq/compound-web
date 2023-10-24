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

// eslint-disable-next-line no-restricted-imports
import * as React from "react";

// This abomination appears to be needed for consumers that rely on Webpack until
// https://github.com/webpack/webpack/issues/14814 is fixed
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const react18UseId = (React as any)["useId".toString()];

const getUniqueId = (() => {
  let index = 1;
  return () => `:r${index++}:`;
})();

const useIdPonyFill = (): string => {
  return React.useMemo(getUniqueId, []);
};

const useId = typeof react18UseId === "function" ? react18UseId : useIdPonyFill;

export default useId;
