/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { createContext, useContext } from "react";
import { type UseReleaseAnnouncementReturn } from "./useReleaseAnnouncement";

type ContextType = UseReleaseAnnouncementReturn | null;
/**
 * The context for the ReleaseAnnouncement components.
 */
export const ReleaseAnnouncementContext = createContext<ContextType>(null);

/**
 * Provides the context for the ReleaseAnnouncement components.
 */
export function useReleaseAnnouncementContext(): UseReleaseAnnouncementReturn {
  const context = useContext(ReleaseAnnouncementContext);

  if (context == null) {
    throw new Error(
      "ReleaseAnnouncement components must be wrapped in <ReleaseAnnouncement />",
    );
  }

  return context;
}
