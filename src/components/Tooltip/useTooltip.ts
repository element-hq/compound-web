/*
 * Copyright 2024 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
  arrow,
  autoUpdate,
  flip,
  offset,
  type OpenChangeReason,
  type Placement,
  shift,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import {
  useMemo,
  useRef,
  useState,
  type JSX,
  type AriaAttributes,
  useEffect,
} from "react";
import { hoverDelay } from "./TooltipProvider";

export interface CommonUseTooltipProps {
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
   * Whether the tooltip should be forced to be in a closed state.
   */
  // TODO: Deprecate this? It seems redundant to open: false.
  disabled?: boolean;
  /**
   * The caption of the tooltip.
   * JSX.Element can be used to provide accessibility content like kbd element.
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
   * The placement of the tooltip.
   * @default "bottom"
   */
  placement?: Placement;
  /**
   * Whether the trigger element is interactive.
   * When trigger is interactive:
   *      - tooltip will be shown after a 300ms delay.
   * When trigger is not interactive:
   *      - tooltip will be shown instantly when pointer enters trigger.
   *      - trigger will be wrapped in a span with a tab index from prop nonInteractiveTriggerTabIndex
   */
  isTriggerInteractive: boolean;

  /**
   * Additional aria-* attributes to pass through to the floating tooltip for
   * edge cases which require more user awareness like errors & alerts.
   */
  "aria-atomic"?: AriaAttributes["aria-atomic"];
  "aria-live"?: AriaAttributes["aria-live"];
}

export interface TooltipLabel {
  /**
   * A label for the target element.
   */
  label: string;
}

export interface TooltipDescription {
  /**
   * A description for the target element.
   */
  description: string;
}

type UseTooltipProps = CommonUseTooltipProps &
  (TooltipLabel | TooltipDescription);

export function useTooltip({
  open: controlledOpen,
  disabled = false,
  onOpenChange,
  placement = "bottom",
  isTriggerInteractive,
  caption,
  "aria-atomic": ariaAtomic,
  "aria-live": ariaLive,
  ...props
}: UseTooltipProps) {
  const labelId = useId();
  const captionId = useId();
  const arrowRef = useRef(null);

  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  // Use controlledOpen if it is provided, otherwise use uncontrolledOpen
  const open = disabled ? false : (controlledOpen ?? uncontrolledOpen);
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
  const { delay, initialDelay } = useDelayGroup(context);
  // We can tell if no delay group has been provided, because the delay will
  // default to zero
  if (initialDelay !== hoverDelay)
    throw new Error("Tooltips must be wrapped in a global <TooltipProvider>");

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen === undefined,
    // Show tooltip after a delay when trigger is interactive
    delay: isTriggerInteractive ? delay : {},
    mouseOnly: true,
  });

  const focus = useFocus(context, {
    enabled: controlledOpen === undefined,
  });

  // On touch screens, show the tooltip on a long press
  const pressTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(pressTimer.current), []);
  const press = useMemo(() => {
    const onTouchEnd = () => {
      if (pressTimer.current === undefined)
        pressTimer.current = window.setTimeout(() => {
          setOpen(false);
          pressTimer.current = undefined;
        }, 1500);
      else window.clearTimeout(pressTimer.current);
    };
    return {
      // Set these props on the anchor element
      reference: {
        onTouchStart: () => {
          if (pressTimer.current !== undefined)
            window.clearTimeout(pressTimer.current);
          pressTimer.current = window.setTimeout(() => {
            setOpen(true);
            pressTimer.current = undefined;
          }, 500);
        },
        onTouchEnd,
        onTouchCancel: onTouchEnd,
      },
    };
  }, []);

  const dismiss = useDismiss(context);

  const purpose = "label" in props ? "label" : "description";
  // A descriptive tooltip should set role="tooltip" and aria-describedby
  const role = useRole(context, {
    enabled: purpose === "description",
    role: "tooltip",
  });

  // A label tooltip should set aria-labelledby with no role regardless of
  // whether the tooltip is visible.
  // (Source: https://zoebijl.github.io/apg-tooltip/#tooltip-main-label)
  // useRole doesn't support this use case correctly, so we do it manually.
  const label = useMemo(
    () =>
      purpose === "label"
        ? {
            // Set these props on the anchor element
            reference: {
              "aria-labelledby": labelId,
              "aria-describedby": caption ? captionId : undefined,
            },
          }
        : {},
    [purpose, labelId, captionId],
  );

  const interactions = useInteractions([
    hover,
    focus,
    press,
    dismiss,
    role,
    label,
  ]);

  return useMemo(
    () => ({
      labelId,
      captionId: caption ? captionId : undefined,
      caption,
      purpose: purpose as "label" | "description",
      open,
      setOpen,
      tooltipProps: {
        "aria-atomic": ariaAtomic,
        "aria-live": ariaLive,
      },
      ...interactions,
      ...data,
      arrowRef,
    }),
    [
      labelId,
      captionId,
      caption,
      role,
      open,
      setOpen,
      interactions,
      data,
      arrowRef,
    ],
  );
}
