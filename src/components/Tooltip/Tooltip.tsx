/*
Copyright 2023 New Vector Ltd

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

import React, { PropsWithChildren } from "react";
import {
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
  Provider,
} from "@radix-ui/react-tooltip";

import styles from "./Tooltip.module.css";
import classNames from "classnames";

type TooltipProps = {
  /**
   * The tooltip label
   */
  label: string;
  /**
   * The tooltip caption
   */
  caption?: string;
  /**
   * @deprecated replaced by `caption`
   */
  shortcut?: string;
  /**
   * The side where the tooltip is rendered
   * @default bottom
   */
  side?: React.ComponentProps<typeof Content>["side"];
  /**
   * The preferred alignment against the trigger.
   * May change when collisions occur.
   * @default center
   */
  align?: React.ComponentProps<typeof Content>["align"];
  /**
   * Event handler called when the escape key is down.
   */
  onEscapeKeyDown?: React.ComponentProps<typeof Content>["onEscapeKeyDown"];
  /**
   * Event handler called when a pointer event occurs outside
   * the bounds of the component.
   */
  onPointerDownOutside?: React.ComponentProps<
    typeof Content
  >["onPointerDownOutside"];
  /**
   * The controlled open state of the tooltip.
   * When true, the tooltip is always open. When false, the tooltip is always hidden.
   * When undefined, the tooltip will manage its own open state.
   * You will mostly want to omit this property. Will be used the vast majority
   * of the time during development.
   * @default undefined
   */
  open?: boolean;
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
   * Tab index to apply to the span wrapping non interactive tooltip triggers.
   * Only used when `isTriggerInteractive` is false.
   * @default 0
   */
  nonInteractiveTriggerTabIndex?: number;
};

/**
 * A tooltip component
 */
export const Tooltip = ({
  children,
  label,
  caption,
  shortcut,
  side = "bottom",
  align = "center",
  onEscapeKeyDown,
  onPointerDownOutside,
  isTriggerInteractive = true,
  nonInteractiveTriggerTabIndex = 0,
  open,
}: PropsWithChildren<TooltipProps>): JSX.Element => {
  return (
    <Provider>
      <Root open={open} delayDuration={isTriggerInteractive ? 300 : 0}>
        <Trigger asChild>
          {isTriggerInteractive ? (
            children
          ) : (
            <span tabIndex={nonInteractiveTriggerTabIndex}>{children}</span>
          )}
        </Trigger>
        <Portal>
          <Content
            side={side}
            align={align}
            onEscapeKeyDown={onEscapeKeyDown}
            onPointerDownOutside={onPointerDownOutside}
            className={styles.tooltip}
          >
            {label}
            {/* Forcing dark theme, so that we have the correct contrast when
                using the text color secondary on a solid dark background. 
                This is temporary and should only remain until we figure out 
                the approach to on-solid tokens */}
            {(caption || shortcut) && (
              <span className={classNames(styles.caption, "cpd-theme-dark")}>
                {caption ?? shortcut}
              </span>
            )}
            <Arrow width={10} height={6} className={styles.arrow} />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};
