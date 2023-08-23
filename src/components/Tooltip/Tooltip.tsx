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

type TooltipProps = {
  /**
   * The tooltip text
   */
  text: string;
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
   * Must be used in conjunction with onOpenChange.
   * @default undefined
   */
  open?: boolean;
};

/**
 * A tooltip component
 */
export const Tooltip = ({
  children,
  text,
  side = "bottom",
  align = "center",
  onEscapeKeyDown,
  onPointerDownOutside,
  open,
}: PropsWithChildren<TooltipProps>) => {
  // TODO: Update the class name to something related to the component name
  return (
    <Provider>
      <Root open={open} delayDuration={300}>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            side={side}
            align={align}
            onEscapeKeyDown={onEscapeKeyDown}
            onPointerDownOutside={onPointerDownOutside}
            className={styles.tooltip}
          >
            {text}
            <Arrow width={10} height={6} className={styles.arrow} />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};
