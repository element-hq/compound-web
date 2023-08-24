import React, { PropsWithChildren } from "react";
import { Content } from "@radix-ui/react-tooltip";
type TooltipProps = {
    /**
     * The tooltip label
     */
    label: string;
    /**
     * The associated keyboard shortcut
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
     * You will mostly want to omit this property. Will be used the vast majority
     * of the time during development.
     * @default undefined
     */
    open?: boolean;
};
/**
 * A tooltip component
 */
export declare const Tooltip: ({ children, label, shortcut, side, align, onEscapeKeyDown, onPointerDownOutside, open, }: PropsWithChildren<TooltipProps>) => JSX.Element;
export {};
