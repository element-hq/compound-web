import { OpenChangeReason, Placement } from "@floating-ui/react";
interface UseTooltipProps {
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
     * The placement of the release announcement.
     */
    placement: Placement;
    /**
     * The caption of the tooltip.
     */
    caption?: string;
    /**
     * The event handler for the open change.
     */
    onOpenChange?: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
    /**
     * Whether the trigger element is interactive.
     * When trigger is interactive:
     *      - tooltip will be shown after a 300ms delay.
     * When trigger is not interactive:
     *      - tooltip will be shown instantly when pointer enters trigger.
     *      - trigger will be wrapped in a span with a tab index from prop nonInteractiveTriggerTabIndex
     * @default true
     */
    isTriggerInteractive: boolean;
}
export declare function useTooltip({ open: controlledOpen, placement, onOpenChange, isTriggerInteractive, caption, }: UseTooltipProps): {
    arrowRef: import("react").MutableRefObject<null>;
    placement: Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: import("react").CSSProperties;
    refs: {
        reference: import("react").MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: import("react").MutableRefObject<HTMLElement | null>;
        setReference: (node: import("@floating-ui/react-dom").ReferenceType | null) => void;
        setFloating: (node: HTMLElement | null) => void;
    } & import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
    elements: {
        reference: import("@floating-ui/react-dom").ReferenceType | null;
        floating: HTMLElement | null;
    } & import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    context: {
        x: number;
        y: number;
        placement: Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: import("react").CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: import("react").MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: import("react").HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: (Omit<import("react").HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean | undefined;
        selected?: boolean | undefined;
    }) | undefined) => Record<string, unknown>;
    labelId: string;
    captionId: string | undefined;
    open: boolean;
    setOpen: (open: boolean, event?: Event | undefined, reason?: OpenChangeReason | undefined) => void;
};
export {};
//# sourceMappingURL=useTooltip.d.ts.map