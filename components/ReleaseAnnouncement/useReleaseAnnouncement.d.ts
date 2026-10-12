import { Placement, UseFloatingReturn, UseInteractionsReturn } from '@floating-ui/react';
import { MouseEventHandler, RefObject } from '../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
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
 * What `useReleaseAnnouncement` returns, and what the release announcement
 * context holds. Spelled out rather than inferred: declaration files must be
 * able to name every type in it, which fails for Floating UI's types when
 * Compound is built from inside a `node_modules` directory (as a git
 * dependency is).
 */
export type UseReleaseAnnouncementReturn = UseInteractionsReturn & UseFloatingReturn & Omit<UseReleaseAnnouncementProps, "placement"> & {
    labelId: string;
    descriptionId: string;
    arrowRef: RefObject<null>;
};
/**
 * This hook provides the necessary props to create a release announcement.
 */
export declare function useReleaseAnnouncement({ open, header, description, closeLabel, placement, onClick, displayArrow, }: UseReleaseAnnouncementProps): UseReleaseAnnouncementReturn;
export {};
//# sourceMappingURL=useReleaseAnnouncement.d.ts.map