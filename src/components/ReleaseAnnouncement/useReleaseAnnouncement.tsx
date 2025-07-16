/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
  arrow,
  autoUpdate,
  limitShift,
  offset,
  type Placement,
  shift,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { type MouseEventHandler, useMemo, useRef } from "react";

interface UseReleaseAnnouncementProps {
  /**
   * Whether the release announcement is open.
   */
  open: boolean;
  /**
   * The header of the release announcement.
   */
  header: string;
  /**
   * The description of the release announcement.
   */
  description: string;
  /**
   * The label of the close button.
   */
  closeLabel: string;
  /**
   * The placement of the release announcement.
   */
  placement: Placement;
  /**
   * The event handler for the close button.
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
  /**
   * Whether to display an arrow.
   */
  displayArrow?: boolean;
}

/**
 * This hook provides the necessary props to create a release announcement.
 */
export function useReleaseAnnouncement({
  open,
  header,
  description,
  closeLabel,
  placement,
  onClick,
  displayArrow,
}: UseReleaseAnnouncementProps) {
  // Set on `aria-labelledby` attribute
  const labelId = useId();
  // Set on `aria-describedby` attribute
  const descriptionId = useId();
  const arrowRef = useRef(null);

  const data = useFloating({
    placement,
    open,
    whileElementsMounted: autoUpdate,
    middleware: [
      // arrow height 12px + 4px padding
      offset(16),
      shift({ limiter: limitShift({ offset: 50 }) }),
      // add the little arrow along with the floating content
      displayArrow &&
        arrow({
          element: arrowRef,
        }),
    ],
  });

  // The role is used to determine the correct aria role for the floating content.
  const role = useRole(data.context);
  const interactions = useInteractions([role]);

  // Put in the context all the useful data and interactions
  return useMemo(
    () => ({
      open,
      ...data,
      ...interactions,
      labelId,
      descriptionId,
      header,
      description,
      closeLabel,
      onClick,
      displayArrow,
      arrowRef,
    }),
    [
      open,
      role,
      interactions,
      data,
      labelId,
      descriptionId,
      header,
      description,
      closeLabel,
      onClick,
      displayArrow,
      arrowRef,
    ],
  );
}
