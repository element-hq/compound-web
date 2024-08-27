import { PropsWithChildren, JSX } from '../../../node_modules/react';
import { CommonUseTooltipProps, TooltipDescription, TooltipLabel } from './useTooltip';
type TooltipProps = Omit<CommonUseTooltipProps, "isTriggerInteractive"> & (TooltipLabel | TooltipDescription) & {
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
export declare function Tooltip({ children, isTriggerInteractive, nonInteractiveTriggerTabIndex, ...props }: PropsWithChildren<TooltipProps>): JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map