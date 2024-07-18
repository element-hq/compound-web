import { OpenChangeReason, Placement } from '@floating-ui/react';
import { JSX } from '../../../node_modules/react';

export interface CommonUseTooltipProps {
    /**
     * The controlled open state of the tooltip.
     * If provided, the tooltip will be in controlled mode.
     * When true, the tooltip is always open. When false, the tooltip is always hidden.
     * When undefined, the tooltip will manage its own open state.
     * You will mostly want to omit this property. Will be used the vast majority
     * of the time during development.
     * @default undefined
     */
    open?: boolean;
    /**
     * Whether the tooltip should be forced to be in a closed state.
     */
    disabled?: boolean;
    /**
     * The caption of the tooltip.
     * JSX.Element can be used to provide accessibility content like kbd element.
     * Keep in mind, the caption should not be used for interactive content.
     */
    caption?: string | JSX.Element;
    /**
     * The event handler for the open change.
     */
    onOpenChange?: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
    /**
     * The placement of the tooltip.
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
     */
    isTriggerInteractive: boolean;
}
export interface TooltipLabel {
    /**
     * A label for the target element.
     */
    label: string;
}
export interface TooltipDescription {
    /**
     * A description for the target element.
     */
    description: string;
}
type UseTooltipProps = CommonUseTooltipProps & (TooltipLabel | TooltipDescription);
export declare function useTooltip({ open: controlledOpen, disabled, onOpenChange, placement, isTriggerInteractive, caption, ...props }: UseTooltipProps): {
    arrowRef: import('../../../node_modules/react').MutableRefObject<null>;
    placement: Placement;
    strategy: import('@floating-ui/utils').Strategy;
    middlewareData: import('@floating-ui/core').MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: import('../../../node_modules/react').CSSProperties;
    refs: {
        reference: import('../../../node_modules/react').MutableRefObject<import('@floating-ui/react-dom').ReferenceType | null>;
        floating: import('../../../node_modules/react').MutableRefObject<HTMLElement | null>;
        setReference: (node: import('@floating-ui/react-dom').ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
    elements: {
        reference: import('@floating-ui/react-dom').ReferenceType | null;
        floating: HTMLElement | null;
    } & import('@floating-ui/react').ExtendedElements<import('@floating-ui/react').ReferenceType>;
    context: {
        x: number;
        y: number;
        placement: Placement;
        strategy: import('@floating-ui/utils').Strategy;
        middlewareData: import('@floating-ui/core').MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: import('../../../node_modules/react').CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: OpenChangeReason) => void;
        events: import('@floating-ui/react').FloatingEvents;
        dataRef: import('../../../node_modules/react').MutableRefObject<import('@floating-ui/react').ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
        elements: import('@floating-ui/react').ExtendedElements<import('@floating-ui/react').ReferenceType>;
    };
    getReferenceProps: (userProps?: import('../../../node_modules/react').HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: import('../../../node_modules/react').HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<import('../../../node_modules/react').HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    contentId: string;
    labelId: string;
    captionId: string | undefined;
    caption: string | JSX.Element | undefined;
    purpose: "label" | "description";
    open: boolean;
    setOpen: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
};
export {};
//# sourceMappingURL=useTooltip.d.ts.map