import { JSX, ReactNode } from '../../../node_modules/.pnpm/react@19.3.1/node_modules/react';
interface MenuScrollSectionProps {
    /** Shown at the top of the section while it is in view. */
    title: string;
    /**
     * Content held at the foot of the scroll area while the section is in view,
     * such as a live reading for its items. Leaves with the section.
     */
    stickyBottomItem?: ReactNode;
    /** The section's items. */
    children: ReactNode;
}
/**
 * A titled group of items within a `MenuScrollArea`. Its title stays at the
 * top, and any `stickyBottomItem` at the foot, while the items scroll under
 * them; an item reached by keyboard is kept clear of both.
 */
export declare function MenuScrollSection({ title, stickyBottomItem, children, }: Readonly<MenuScrollSectionProps>): JSX.Element;
export {};
//# sourceMappingURL=MenuScrollSection.d.ts.map