/*
Copyright 2023-2024 New Vector Ltd

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

import { TooltipContext, useTooltipContext } from "./TooltipContext";
import {
  FloatingArrow,
  FloatingPortal,
  Placement,
  useMergeRefs,
} from "@floating-ui/react";
import React, {
  PropsWithChildren,
  Ref,
  JSX,
  isValidElement,
  cloneElement,
} from "react";

import classNames from "classnames";
import styles from "./Tooltip.module.css";
import { useTooltip } from "./useTooltip";

type UseTooltipParam = Parameters<typeof useTooltip>[0];

interface TooltipProps
  extends Omit<UseTooltipParam, "placement" | "isTriggerInteractive"> {
  /**
   * The placement of the component
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
   * @default true
   */
  isTriggerInteractive?: boolean;
  /**
   * The tab index for the non interactive trigger.
   * @default 0
   */
  nonInteractiveTriggerTabIndex?: number;
  /**
   * The tooltip label
   */
  label: string;
}

/**
 * A tooltip component
 */
export function Tooltip({
  children,
  placement = "bottom",
  isTriggerInteractive = true,
  nonInteractiveTriggerTabIndex = 0,
  label,
  ...props
}: PropsWithChildren<TooltipProps>): JSX.Element {
  const context = useTooltip({ placement, isTriggerInteractive, ...props });

  return (
    <TooltipContext.Provider value={context}>
      <TooltipAnchor>
        {isTriggerInteractive ? (
          children
        ) : (
          <span tabIndex={nonInteractiveTriggerTabIndex}>{children}</span>
        )}
      </TooltipAnchor>
      <TooltipContent>
        <span id={context.labelId}>{label}</span>
        <Caption />
      </TooltipContent>
    </TooltipContext.Provider>
  );
}

function Caption() {
  const { caption, captionId } = useTooltipContext();

  if (!caption) return null;

  const isCaptionString = typeof caption === "string";
  /**
   * Forcing dark theme, so that we have the correct contrast when
   * using the text color secondary on a solid dark background.
   * This is temporary and should only remain until we figure out
   * the approach to on-solid tokens
   **/
  if (isCaptionString) {
    return (
      <span
        id={captionId}
        className={classNames(styles.caption, "cpd-theme-dark")}
      >
        {caption}
      </span>
    );
  }

  return cloneElement(caption, {
    id: captionId,
    className: classNames(
      caption.props.className,
      styles.caption,
      "cpd-theme-dark",
    ),
  });
}

/**
 * The content of the tooltip
 * @param children
 */
function TooltipContent({
  children,
}: Readonly<PropsWithChildren>): JSX.Element | null {
  const { context: floatingContext, arrowRef, ...rest } = useTooltipContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <div
        ref={rest.refs.setFloating}
        aria-labelledby={rest.labelId}
        aria-describedby={rest.captionId || rest.labelId}
        style={rest.floatingStyles}
        {...rest.getFloatingProps()}
        className={styles.tooltip}
      >
        <FloatingArrow
          ref={arrowRef}
          context={floatingContext}
          // design absolute value
          width={10}
          height={6}
          className={styles.arrow}
        />
        {children}
      </div>
    </FloatingPortal>
  );
}

/**
 * The anchor of the tooltip
 * @param children
 */
function TooltipAnchor({ children }: Readonly<PropsWithChildren>): JSX.Element {
  const context = useTooltipContext();

  // The children can have a ref and we don't want to discard it
  // Doing a dirty cast to get the optional ref
  const childrenRef = (children as unknown as { ref?: Ref<HTMLElement> })?.ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  if (!isValidElement(children)) {
    throw new Error("Tooltip anchor must be a single valid React element");
  }

  return cloneElement(
    children,
    context.getReferenceProps({
      ref,
      ...children.props,
    }),
  );
}
