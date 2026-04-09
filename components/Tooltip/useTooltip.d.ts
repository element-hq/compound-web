import { OpenChangeReason, Placement } from '@floating-ui/react';
import { JSX, AriaAttributes } from '../../../node_modules/react';
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
    /**
     * Additional aria-* attributes to pass through to the floating tooltip for
     * edge cases which require more user awareness like errors & alerts.
     */
    "aria-atomic"?: AriaAttributes["aria-atomic"];
    "aria-live"?: AriaAttributes["aria-live"];
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
export declare function useTooltip({ open: controlledOpen, disabled, onOpenChange, placement, isTriggerInteractive, caption, "aria-atomic": ariaAtomic, "aria-live": ariaLive, ...props }: UseTooltipProps): {
    arrowRef: import('../../../node_modules/react').RefObject<null>;
    placement: Placement;
    strategy: import('@floating-ui/utils').Strategy;
    middlewareData: import('@floating-ui/core').MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: React.CSSProperties;
    refs: {
        reference: import('../../../node_modules/react').MutableRefObject<import('@floating-ui/react-dom').ReferenceType | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: import('@floating-ui/react-dom').ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
    elements: {
        reference: import('@floating-ui/react-dom').ReferenceType | null;
        floating: HTMLElement | null;
    } & import('@floating-ui/react').ExtendedElements<import('@floating-ui/react').ReferenceType>;
    context: {
        placement: Placement;
        strategy: import('@floating-ui/utils').Strategy;
        x: number;
        y: number;
        middlewareData: import('@floating-ui/core').MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: OpenChangeReason) => void;
        events: import('@floating-ui/react').FloatingEvents;
        dataRef: React.MutableRefObject<import('@floating-ui/react').ContextData>;
        nodeId: string | undefined;
        floatingId: string | undefined;
        refs: import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
        elements: import('@floating-ui/react').ExtendedElements<import('@floating-ui/react').ReferenceType>;
    };
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    labelId: string | undefined;
    captionId: string | undefined;
    caption: string | JSX.Element | undefined;
    purpose: "label" | "description";
    open: boolean;
    setOpen: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
    tooltipProps: {
        "aria-atomic": (boolean | "true" | "false") | undefined;
        "aria-live": "off" | "assertive" | "polite" | undefined;
    };
};
export {};
//# sourceMappingURL=useTooltip.d.ts.map