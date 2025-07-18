/*
Copyright 2023, 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { TooltipContext, useTooltipContext } from "./TooltipContext";
import {
  FloatingArrow,
  FloatingPortal,
  useMergeRefs,
} from "@floating-ui/react";
import React, {
  type PropsWithChildren,
  type Ref,
  type JSX,
  isValidElement,
  cloneElement,
  useMemo,
  type ReactNode,
  type FC,
  type ReactElement,
} from "react";

import classNames from "classnames";
import styles from "./Tooltip.module.css";
import {
  type CommonUseTooltipProps,
  type TooltipDescription,
  type TooltipLabel,
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

const hasLabel = (
  props: TooltipLabel | TooltipDescription,
): props is TooltipLabel => "label" in props && !!props.label;

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
          {hasLabel(props) ? props.label : props.description}
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
        style={rest.floatingStyles}
        {...rest.tooltipProps}
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
      const props = context.getReferenceProps({
        // To support React 18, we need to explicitly pass the children's props. See  https://github.com/element-hq/compound/issues/333
        // In React 19, this is not necessary. `getReferenceProps` is able to get the props directly from the ref.
        ...(typeof children.props === "object" ? children.props : {}),
        ref,
      });
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
          {cloneElement(children as ReactElement<Record<string, unknown>>, {
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
