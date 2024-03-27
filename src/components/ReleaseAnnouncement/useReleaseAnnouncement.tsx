/*
Copyright 2024 New Vector Ltd

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

import {
  arrow,
  autoUpdate,
  limitShift,
  offset,
  Placement,
  shift,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { MouseEventHandler, useMemo, useRef } from "react";

interface UseReleaseAnnouncementProps {
  /**
   * Open or not the release announcement.
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
      arrowRef,
    ],
  );
}
