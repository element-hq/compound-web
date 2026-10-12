/**
 * Defers a submenu's `open` prop until its parent menu has finished opening.
 *
 * A submenu that is open at the same time as its parent (`open={true}` on
 * mount) would otherwise be positioned before the parent's animation has
 * settled and, inside a `PortalRoot`, be marked `aria-hidden` by the modal
 * parent. Closing is never deferred.
 */
export declare function useDeferredSubMenuOpen(open: boolean | undefined): boolean | undefined;
//# sourceMappingURL=useDeferredSubMenuOpen.d.ts.map