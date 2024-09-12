import { JSX, PropsWithChildren } from '../../../node_modules/react';
import { Placement } from '@floating-ui/react';
import { useReleaseAnnouncement } from './useReleaseAnnouncement';
type UseReleaseAnnouncementParam = Parameters<typeof useReleaseAnnouncement>[0];
interface ReleaseAnnouncementProps extends Omit<UseReleaseAnnouncementParam, "placement" | "displayArrow"> {
    /**
     * The placement of the component
     * @default "right"
     */
    placement?: Placement;
    /**
     * Whether to display an arrow.
     * @default true
     */
    displayArrow?: boolean;
}
/**
 * The ReleaseAnnouncement component purpose is to inform the user of a new available feature.
 * This component is a floating component that will appear next to an anchor.
 * @param children - Act as an anchor, the component will be displayed alongside of it.
 * @param placement - The placement of the component
 */
export declare function ReleaseAnnouncement({ 
/**
 * The children anchor should be a single valid React element.
 */
children, placement, displayArrow, ...props }: PropsWithChildren<ReleaseAnnouncementProps>): JSX.Element;
export {};
//# sourceMappingURL=ReleaseAnnouncement.d.ts.map