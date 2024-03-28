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

import classNames from "classnames";
import React, { forwardRef, PropsWithChildren, ReactNode } from "react";
import ChevronRightIcon from "@vector-im/compound-design-tokens/icons/chevron-right.svg";
import * as RadixAccordion from "@radix-ui/react-accordion";

import styles from "./Accordion.module.css";

/**
 * See https://www.radix-ui.com/primitives/docs/components/accordion#root
 */
type AccordionProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof RadixAccordion.Root>;

/**
 * Thin wrapper around Radix UI Accordion component
 *
 * See radix documentation: https://www.radix-ui.com/primitives/docs/components/accordion
 */
export const Root = forwardRef<HTMLDivElement, AccordionProps>(function Root(
  { children, className, ...props }: PropsWithChildren<AccordionProps>,
  ref,
) {
  // TODO: Update the class name to something related to the component name
  const classes = classNames(styles.root, className);
  return (
    <RadixAccordion.Root {...props} className={classes} ref={ref}>
      {children}
    </RadixAccordion.Root>
  );
});

type TriggerProps = {
  /**
   * The CSS class name.
   */
  className?: string;
} & React.ComponentProps<typeof RadixAccordion.Trigger>;
const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(function Trigger(
  { children, className, ...props }: TriggerProps,
  forwardedRef,
) {
  return (
    <RadixAccordion.Header>
      <RadixAccordion.Trigger
        className={classNames(styles.trigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronRightIcon
          height={24}
          width={24}
          className={styles.icon}
          aria-hidden
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

type ItemProps = {
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * Unique identifier for this item within the accordion
   */
  value: string;
  /**
   * The element or text used as the header of the accordion
   * Will be wrapped in a button element by Radix
   */
  trigger: ReactNode | string;
} & React.ComponentProps<typeof RadixAccordion.Item>;
export const Item = forwardRef<HTMLDivElement, ItemProps>(function Item(
  {
    value,
    trigger,
    children,
    className,
    ...props
  }: PropsWithChildren<ItemProps>,
  ref,
) {
  const classes = classNames(styles.root, className);
  return (
    <RadixAccordion.Item {...props} className={classes} value={value} ref={ref}>
      <Trigger>{trigger}</Trigger>

      <RadixAccordion.Content className={styles.content}>
        {children}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
});
