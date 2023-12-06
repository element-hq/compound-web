import React, { PropsWithChildren } from "react";
import { Content } from "@radix-ui/react-tooltip";
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
    onPointerDownOutside?: React.ComponentProps<typeof Content>["onPointerDownOutside"];
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
export declare const Tooltip: ({ children, label, caption, shortcut, side, align, onEscapeKeyDown, onPointerDownOutside, isTriggerInteractive, nonInteractiveTriggerTabIndex, open, }: PropsWithChildren<TooltipProps>) => JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map