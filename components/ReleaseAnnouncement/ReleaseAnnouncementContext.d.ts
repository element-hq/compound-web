import { useReleaseAnnouncement } from './useReleaseAnnouncement';
type ContextType = ReturnType<typeof useReleaseAnnouncement> | null;
/**
 * The context for the ReleaseAnnouncement components.
 */
export declare const ReleaseAnnouncementContext: import('../../../node_modules/react').Context<ContextType>;
/**
 * Provides the context for the ReleaseAnnouncement components.
 */
export declare function useReleaseAnnouncementContext(): {
    labelId: string | undefined;
    descriptionId: string | undefined;
    header: string;
    description: string;
    closeLabel: string;
    onClick: import('../../../node_modules/react').MouseEventHandler<HTMLButtonElement>;
    displayArrow: boolean | undefined;
    arrowRef: import('../../../node_modules/react').RefObject<null>;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
    placement: import('@floating-ui/utils').Placement;
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
        placement: import('@floating-ui/utils').Placement;
        strategy: import('@floating-ui/utils').Strategy;
        x: number;
        y: number;
        middlewareData: import('@floating-ui/core').MiddlewareData;
        isPositioned: boolean;
        update: () => void;
        floatingStyles: React.CSSProperties;
        open: boolean;
        onOpenChange: (open: boolean, event?: Event, reason?: import('@floating-ui/react').OpenChangeReason) => void;
        events: import('@floating-ui/react').FloatingEvents;
        dataRef: React.MutableRefObject<import('@floating-ui/react').ContextData>;
        nodeId: string | undefined;
        floatingId: string | undefined;
        refs: import('@floating-ui/react').ExtendedRefs<import('@floating-ui/react').ReferenceType>;
        elements: import('@floating-ui/react').ExtendedElements<import('@floating-ui/react').ReferenceType>;
    };
    open: boolean;
};
export {};
//# sourceMappingURL=ReleaseAnnouncementContext.d.ts.map