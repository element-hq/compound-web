/**
 * Follows a scroll area's scrolling and size, and those of the sticky headers
 * and footers within it. Writes what it finds onto the elements rather than
 * rendering it, as it changes on every scroll:
 *
 * - `data-more-below` on the area while there is more to scroll to below.
 * - Its sticky parts' heights, for the scroll padding to keep an item reached
 *   by keyboard clear of them.
 * - `data-pinned` on a footer while it is held at the foot, and the fade's
 *   inset above it then.
 * - The area's bottom padding, which sticky content stops above, and its gap,
 *   which the fade takes back.
 */
export declare class MenuScrollWatcher {
    private area;
    private resizes;
    private additions;
    private readonly headers;
    private readonly footers;
    private paddingEnd;
    private inset;
    /**
     * This methods core purpose is setting up listeners.
     * There are a couple of CSS properties that need to update (f.ex. if a element is the sticky footer)
     * based on the layout/scroll position.
     *
     * Worth metioning: the size (and size changes) of elements and the container also play a role, not
     * just the scroll offset.
     *
     * @param area - The element that scrolls.
     * @returns A function that stops following, and clears what it wrote.
     */
    attach(area: HTMLElement): () => void;
    /**
     * @param header - A header sticky at the top of its section.
     * @returns A function that removes it.
     */
    addHeader: (header: HTMLElement) => (() => void);
    /**
     * @param footer - A footer sticky at the foot of its section.
     * @returns A function that removes it.
     */
    addFooter: (footer: HTMLElement) => (() => void);
    private add;
    /**
     * Add all first level children to the resize observer.
     */
    private observeChildren;
    /** Sets the clearance the scroll padding keeps, from the parts' sizes. */
    private readonly onResize;
    private readonly onScroll;
    /**
     * Marks a footer pinned while it is held at the foot, and ends the fade
     * above it then. A footer whose section is out of view leaves the fade at
     * the area's edge.
     */
    private followFooters;
}
/** The watcher of the scroll area a section is in, if it is in one. */
export declare const MenuScrollWatcherContext: import('../../../node_modules/.pnpm/react@19.3.0/node_modules/react').Context<MenuScrollWatcher | null>;
//# sourceMappingURL=MenuScrollWatcher.d.ts.map