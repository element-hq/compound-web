import { Placement } from "@floating-ui/react";
import { MouseEventHandler } from "react";
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
}
/**
 * This hook provides the necessary props to create a release announcement.
 */
export declare function useReleaseAnnouncement({ open, header, description, closeLabel, placement, onClick, }: UseReleaseAnnouncementProps): {
    labelId: string;
    descriptionId: string;
    header: string;
    description: string;
    closeLabel: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    arrowRef: import("react").MutableRefObject<null>;
    getReferenceProps: (userProps?: import("react").HTMLProps<Element> | undefined) => Record<string, unknown>;
    getFloatingProps: (userProps?: import("react").HTMLProps<HTMLElement> | undefined) => Record<string, unknown>;
    getItemProps: (userProps?: (Omit<import("react").HTMLProps<HTMLElement>, "selected" | "active"> & {
        active?: boolean | undefined;
        selected?: boolean | undefined;
    }) | undefined) => Record<string, unknown>;
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
        onOpenChange: (open: boolean, event?: Event | undefined, reason?: import("@floating-ui/react").OpenChangeReason | undefined) => void;
        events: import("@floating-ui/react").FloatingEvents;
        dataRef: import("react").MutableRefObject<import("@floating-ui/react").ContextData>;
        nodeId: string | undefined;
        floatingId: string;
        refs: import("@floating-ui/react").ExtendedRefs<import("@floating-ui/react").ReferenceType>;
        elements: import("@floating-ui/react").ExtendedElements<import("@floating-ui/react").ReferenceType>;
    };
    open: boolean;
};
export {};
//# sourceMappingURL=useReleaseAnnouncement.d.ts.map