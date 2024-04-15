/*
 *
 * Copyright 2024 New Vector Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * /
 */

import { createContext, useContext } from "react";
import { useTooltip } from "./useTooltip";

type ContextType = ReturnType<typeof useTooltip> | null;
/**
 * The context for the Tooltip components.
 */
export const TooltipContext = createContext<ContextType>(null);

/**
 * Provides the context for the Tooltip components.
 */
export function useTooltipContext() {
  const context = useContext(TooltipContext);

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  return context;
}
