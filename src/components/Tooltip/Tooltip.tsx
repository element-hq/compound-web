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
  useMergeRefs,
} from "@floating-ui/react";
import React, {
  PropsWithChildren,
  Ref,
  JSX,
  isValidElement,
  cloneElement,
  useMemo,
  ReactNode,
  FC,
  ReactElement,
} from "react";

import classNames from "classnames";
import styles from "./Tooltip.module.css";
import {
  CommonUseTooltipProps,
  TooltipDescription,
  TooltipLabel,
  useTooltip,
} from "./useTooltip";

// Unfortunately Omit doesn't distribute nicely over sum types, so we have to
// piece together the useTooltip options type by hand
type TooltipProps = Omit<CommonUseTooltipProps, "isTriggerInteractive"> &
  (TooltipLabel | TooltipDescription) & {
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
  };

/**
 * A tooltip component
 */
export function Tooltip({
  children,
  isTriggerInteractive = true,
  nonInteractiveTriggerTabIndex = 0,
  ...props
}: PropsWithChildren<TooltipProps>): JSX.Element {
  const context = useTooltip({ isTriggerInteractive, ...props });

  return (
    <TooltipContext.Provider value={context}>
      <TooltipAnchor
        isTriggerInteractive={isTriggerInteractive}
        nonInteractiveTriggerTabIndex={nonInteractiveTriggerTabIndex}
      >
        {children}
      </TooltipAnchor>
      <TooltipContent>
        <span id={context.labelId}>
          {"label" in props ? props.label : props.description}
        </span>
        <Caption />
      </TooltipContent>
    </TooltipContext.Provider>
  );
}

function Caption() {
  const { caption, captionId } = useTooltipContext();
  if (!caption) return null;

  const isCaptionString = typeof caption === "string";
  const Container = isCaptionString ? "span" : "div";

  /**
   * Forcing dark theme, so that we have the correct contrast when
   * using the text color secondary on a solid dark background.
   * This is temporary and should only remain until we figure out
   * the approach to on-solid tokens
   **/
  return (
    <Container
      id={captionId}
      className={classNames(styles.caption, "cpd-theme-dark")}
    >
      {caption}
    </Container>
  );
}

/**
 * The content of the tooltip
 * @param children
 */
function TooltipContent({
  children,
}: Readonly<PropsWithChildren>): JSX.Element | null {
  const {
    context: floatingContext,
    open,
    arrowRef,
    purpose,
    ...rest
  } = useTooltipContext();

  // Label tooltips are kept in the DOM even when not visually open
  if (!open && purpose !== "label") return null;

  return (
    <FloatingPortal>
      <div
        ref={rest.refs.setFloating}
        aria-labelledby={rest.labelId}
        aria-describedby={rest.captionId || rest.labelId}
        style={rest.floatingStyles}
        {...rest.getFloatingProps()}
        className={classNames(styles.tooltip, {
          [styles.invisible]: purpose === "label" && !open,
        })}
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

interface TooltipAnchorProps {
  children: ReactNode;
  isTriggerInteractive: boolean;
  nonInteractiveTriggerTabIndex?: number;
}

/**
 * The anchor of the tooltip
 * @param children
 */
const TooltipAnchor: FC<TooltipAnchorProps> = ({
  children,
  isTriggerInteractive,
  nonInteractiveTriggerTabIndex,
}) => {
  const context = useTooltipContext();

  // The children can have a ref and we don't want to discard it
  // Doing a dirty cast to get the optional ref
  const childrenRef = (children as unknown as { ref?: Ref<HTMLElement> })?.ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  const element = useMemo(() => {
    if (!isValidElement(children)) return;

    if (isTriggerInteractive) {
      const props = context.getReferenceProps({ ref, ...children.props });
      return cloneElement(children, props);
    } else {
      // For a non-interactive trigger, we want most of the props to go on the
      // span element that we provide, since that's what receives focus, but it
      // should still be the trigger that receives the label/description. It
      // would be wrong to label the span element, as it lacks a role.
      const props = context.getReferenceProps({
        ref,
        tabIndex: nonInteractiveTriggerTabIndex,
      });
      const {
        "aria-labelledby": labelId,
        "aria-describedby": descriptionId,
        ...spanProps
      } = props;
      return (
        <span tabIndex={nonInteractiveTriggerTabIndex} {...spanProps}>
          {cloneElement(children as ReactElement, {
            "aria-labelledby": labelId,
            "aria-describedby": descriptionId,
          })}
        </span>
      );
    }
  }, [context, ref, children]);

  if (!element) {
    throw new Error("Tooltip anchor must be a single valid React element");
  }

  return element;
};
