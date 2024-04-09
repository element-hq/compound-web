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
   * @default "right"
   */
  placement?: Placement;
  isTriggerInteractive?: boolean;
  nonInteractiveTriggerTabIndex?: number;
  label: string;
  caption?: string;
}

export function Tooltip2({
  children,
  placement = "bottom",
  isTriggerInteractive = true,
  nonInteractiveTriggerTabIndex = 0,
  label,
  caption,
  ...props
}: PropsWithChildren<TooltipProps>) {
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
        {/* Forcing dark theme, so that we have the correct contrast when
              using the text color secondary on a solid dark background.
              This is temporary and should only remain until we figure out
              the approach to on-solid tokens */}
        {caption && (
          <span className={classNames(styles.caption, "cpd-theme-dark")}>
            {caption}
          </span>
        )}
      </TooltipContent>
    </TooltipContext.Provider>
  );
}

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
        aria-describedby={rest.captionId}
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

function TooltipAnchor({
  children,
  ...props
}: Readonly<PropsWithChildren>): JSX.Element {
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
      ...props,
      ...children.props,
      "data-state": context.open ? "open" : "closed",
    }),
  );
}
