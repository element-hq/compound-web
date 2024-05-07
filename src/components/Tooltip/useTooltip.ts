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
  OpenChangeReason,
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
import { useMemo, useRef, useState, JSX } from "react";

interface UseTooltipProps {
  /**
   * The controlled open state of the tooltip.
   * If provided, the tooltip will be in controlled mode.
   * When true, the tooltip is always open. When false, the tooltip is always hidden.
   * When undefined, the tooltip will manage its own open state.
   * You will mostly want to omit this property. Will be used the vast majority
   * of the time during development.
   * @default undefined
   */
  open?: boolean;
  /**
   * The placement of the release announcement.
   */
  placement: Placement;
  /**
   * The caption of the tooltip.
   * JSX.Element can be used to provide accessibility content like kbd element.
   * **The props need to be forwarded to the caption element.**
   * Keep in mind, the caption should not be used for interactive content.
   */
  caption?: string | JSX.Element;
  /**
   * The event handler for the open change.
   */
  onOpenChange?: (
    open: boolean,
    event?: Event | undefined,
    reason?: OpenChangeReason | undefined,
  ) => void;
  /**
   * Whether the trigger element is interactive.
   * When trigger is interactive:
   *      - tooltip will be shown after a 300ms delay.
   * When trigger is not interactive:
   *      - tooltip will be shown instantly when pointer enters trigger.
   *      - trigger will be wrapped in a span with a tab index from prop nonInteractiveTriggerTabIndex
   * @default true
   */
  isTriggerInteractive: boolean;
}

export function useTooltip({
  open: controlledOpen,
  placement,
  onOpenChange,
  isTriggerInteractive,
  caption,
}: UseTooltipProps) {
  // Set on `aria-labelledby` attribute
  const labelId = useId();
  // Set on `aria-describedby` attribute
  const captionId = useId();
  const arrowRef = useRef(null);

  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  // Use controlledOpen if it is provided, otherwise use uncontrolledOpen
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = (
    open: boolean,
    event?: Event | undefined,
    reason?: OpenChangeReason | undefined,
  ) => {
    onOpenChange?.(open, event, reason);
    // we are in uncontrolled mode
    if (controlledOpen === undefined) setUncontrolledOpen(open);
  };

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      // arrow height 6px
      offset(6),
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
    // Show tooltip after a delay when trigger is interactive
    delay: { open: isTriggerInteractive ? 300 : 0 },
  });
  const focus = useFocus(context, {
    enabled: controlledOpen === undefined,
    visibleOnly: false,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      labelId,
      captionId: caption ? captionId : undefined,
      caption,
      open,
      setOpen,
      ...interactions,
      ...data,
      arrowRef,
    }),
    [labelId, captionId, caption, open, setOpen, interactions, data, arrowRef],
  );
}
