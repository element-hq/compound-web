/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { createContext, useContext } from "react";
import { type UseTooltipReturn } from "./useTooltip";

type ContextType = UseTooltipReturn | null;
/**
 * The context for the Tooltip components.
 */
export const TooltipContext = createContext<ContextType>(null);

/**
 * Provides the context for the Tooltip components.
 */
export function useTooltipContext(): UseTooltipReturn {
  const context = useContext(TooltipContext);

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  return context;
}
