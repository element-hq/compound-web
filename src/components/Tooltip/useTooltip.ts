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

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  Placement,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useMemo, useRef, useState } from "react";

interface UseTooltipProps {
  /**
   * Whether the tooltip is open.
   */
  open?: boolean;
  /**
   * The placement of the release announcement.
   */
  placement: Placement;
  onOpenChange?: (open: boolean) => void;
  isTriggerInteractive: boolean;
}

export function useTooltip({
  open: controlledOpen,
  placement,
  onOpenChange: setControlledOpen,
  isTriggerInteractive,
}: UseTooltipProps) {
  // Set on `aria-labelledby` attribute
  const labelId = useId();
  // Set on `aria-describedby` attribute
  const captionId = useId();
  const arrowRef = useRef(null);

  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  // Use controlledOpen if it is provided, otherwise use uncontrolledOpen
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      // arrow height 6px + 2px padding
      offset(8),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "start",
        padding: 5,
      }),
      shift({ padding: 5 }),
      // add the little arrow along with the floating content
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const context = data.context;
  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen === undefined,
    delay: { open: isTriggerInteractive ? 300 : 0 },
  });
  const focus = useFocus(context, {
    enabled: controlledOpen === undefined,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      labelId,
      captionId,
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
    }),
    [labelId, captionId, open, setOpen, interactions, data, arrowRef],
  );
}
