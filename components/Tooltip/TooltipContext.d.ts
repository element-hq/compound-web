import { useTooltip } from "./useTooltip";
type ContextType = ReturnType<typeof useTooltip> | null;
/**
 * The context for the Tooltip components.
 */
export declare const TooltipContext: import('../../../node_modules/react').Context<ContextType>;
/**
 * Provides the context for the Tooltip components.
 */
export declare function useTooltipContext(): {
    arrowRef: import('../../../node_modules/react').MutableRefObject<null>;
    placement: import("@floating-ui/utils").Placement;
    strategy: import("@floating-ui/utils").Strategy;
    middlewareData: import("@floating-ui/core").MiddlewareData;
    x: number;
    y: number;
    isPositioned: boolean;
    update: () => void;
    floatingStyles: import('../../../node_modules/react').CSSProperties;
    refs: {
        reference: import('../../../node_modules/react').MutableRefObject<import("@floating-ui/react-dom").ReferenceType | null>;
        floating: import('../../../node_modules/react').MutableRefObject<HTMLElement | null>;
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
        placement: import("@floating-ui/utils").Placement;
        strategy: import("@floating-ui/utils").Strategy;
        middlewareData: import("@floating-ui/core").MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: import('../../../node_modules/react').CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event | undefined, reason?: import("@floating-ui/react").OpenChangeReason | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: import('../../../node_modules/react').MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    getReferenceProps: (userProps?: import('../../../node_modules/react').HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: import('../../../node_modules/react').HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: (Omit<import('../../../node_modules/react').HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean | undefined;
        selected?: boolean | undefined;
    }) | undefined) => Record<string, unknown>;
    labelId: string;
    captionId: string | undefined;
    caption: string | import('../../../node_modules/react').JSX.Element | undefined;
    open: boolean;
    setOpen: (open: boolean, event?: Event | undefined, reason?: import("@floating-ui/react").OpenChangeReason | undefined) => void;
};
export {};
//# sourceMappingURL=TooltipContext.d.ts.map