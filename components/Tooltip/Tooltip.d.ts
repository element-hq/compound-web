import { Placement } from "@floating-ui/react";
import { PropsWithChildren, JSX } from '../../../node_modules/react';
import { useTooltip } from "./useTooltip";
type UseTooltipParam = Parameters<typeof useTooltip>[0];
interface TooltipProps extends Omit<UseTooltipParam, "placement" | "isTriggerInteractive"> {
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
export declare function Tooltip({ children, placement, isTriggerInteractive, nonInteractiveTriggerTabIndex, label, ...props }: PropsWithChildren<TooltipProps>): JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map