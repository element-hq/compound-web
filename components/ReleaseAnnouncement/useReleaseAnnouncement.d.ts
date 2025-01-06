import { Placement } from '@floating-ui/react';
import { MouseEventHandler } from '../../../node_modules/react';
interface UseReleaseAnnouncementProps {
    /**
     * Whether the release announcement is open.
     */
    open: boolean;
    /**
     * The header of the release announcement.
     */
    header: string;
    /**
     * The description of the release announcement.
     */
    description: string;
    /**
     * The label of the close button.
     */
    closeLabel: string;
    /**
     * The placement of the release announcement.
     */
    placement: Placement;
    /**
     * The event handler for the close button.
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
    /**
     * Whether to display an arrow.
     */
    displayArrow?: boolean;
}
/**
 * This hook provides the necessary props to create a release announcement.
 */
export declare function useReleaseAnnouncement({ open, header, description, closeLabel, placement, onClick, displayArrow, }: UseReleaseAnnouncementProps): {
    labelId: string | undefined;
    descriptionId: string | undefined;
    header: string;
    description: string;
    closeLabel: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    displayArrow: boolean | undefined;
    arrowRef: import('../../../node_modules/react').RefObject<null>;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => Record<string, unknown>;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
    getItemProps: (userProps?: Omit<React.HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean;
        selected?: boolean;
    }) => Record<string, unknown>;
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
//# sourceMappingURL=useReleaseAnnouncement.d.ts.map