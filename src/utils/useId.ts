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

import * as React from "react";

const react18UseId = (React as { useId?: () => string }).useId;

const getUniqueId = (() => {
  let index = 1;
  return () => `:r${index++}:`;
})();

const useIdPonyFill = (): string => {
  return React.useMemo(getUniqueId, []);
};

const useId = typeof react18UseId === "function" ? react18UseId : useIdPonyFill;

export default useId;
