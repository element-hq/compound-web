/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { createContext } from "react";

const HEADER_CLEARANCE = "--cpd-menu-scroll-header-clearance";
const FOOTER_CLEARANCE = "--cpd-menu-scroll-footer-clearance";
const FOOTER_INSET = "--cpd-menu-scroll-footer-inset";
const PADDING_BLOCK_END = "--cpd-menu-scroll-padding-block-end";
const GAP = "--cpd-menu-scroll-gap";

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
export class MenuScrollWatcher {
  private area: HTMLElement | null = null;
  private resizes: ResizeObserver | null = null;
  private additions: MutationObserver | null = null;
  private readonly headers = new Set<HTMLElement>();
  private readonly footers = new Set<HTMLElement>();
  // Read on a resize rather than on every scroll.
  private paddingEnd = 0;
  private inset = 0;

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
  public attach(area: HTMLElement): () => void {
    this.area = area;
    // Our goal here is to make sure we call `this.onResize` & `this.onScroll` when needed. (nothing else happens here really)
    // It is needed: whenever anything changes that might update layout (CSS or size related) properties.

    // Start with the trivial `onScroll` case. The only scrolling item is area.
    area.addEventListener("scroll", this.onScroll, { passive: true });

    // We use a ResizeObserver to simplify listening to all the relevant HTML element size changes.
    // (All following comments just mention why we observe the specific element)
    this.resizes = new ResizeObserver(this.onResize);

    // main area size can impact if a section is scrolled out of view (none of the sticky items
    // of thise section will be shown)
    this.resizes.observe(area);
    // The sizes of the direct children also impacts what is visible in our current visible scroll window.
    // e.g. increasing the hight of the first child moves our visible window.
    this.observeChildren();
    // The sticky (footer, header) elements resize observations
    // are done manually. (they are not necassarly direct children.)
    for (const part of [...this.headers, ...this.footers])
      this.resizes.observe(part);
    // A MutationObserver emits for changes to the DOM tree (additions/removals).
    // We update our observations and call onResize if a child
    // gets added/removed as this can also update if we show/dont show a section with
    // a sticky component.
    this.additions = new MutationObserver(() => {
      this.observeChildren();
      this.onResize();
    });
    this.additions.observe(area, { childList: true });
    // The observers only report changes. Call onResize manually to compute the initial state.
    this.onResize();
    return (): void => {
      area.removeEventListener("scroll", this.onScroll);
      this.resizes?.disconnect();
      this.additions?.disconnect();
      this.resizes = null;
      this.additions = null;
      this.area = null;
      // Clear everything written onto the elements, so a detached area looks
      // as it would without a watcher. The parts stay registered: they remove
      // themselves when they unmount.
      delete area.dataset.moreBelow;
      delete area.dataset.footerPinned;
      for (const property of [
        HEADER_CLEARANCE,
        FOOTER_CLEARANCE,
        FOOTER_INSET,
        PADDING_BLOCK_END,
        GAP,
      ])
        area.style.removeProperty(property);
      for (const footer of this.footers) delete footer.dataset.pinned;
      this.inset = 0;
    };
  }

  /**
   * @param header - A header sticky at the top of its section.
   * @returns A function that removes it.
   */
  public addHeader = (header: HTMLElement): (() => void) =>
    this.add(this.headers, header);

  /**
   * @param footer - A footer sticky at the foot of its section.
   * @returns A function that removes it.
   */
  public addFooter = (footer: HTMLElement): (() => void) =>
    this.add(this.footers, footer);

  private add(parts: Set<HTMLElement>, part: HTMLElement): () => void {
    parts.add(part);
    this.resizes?.observe(part);
    this.onResize();
    return (): void => {
      parts.delete(part);
      delete part.dataset.pinned;
      this.resizes?.unobserve(part);
      this.onResize();
    };
  }

  /**
   * Add all first level children to the resize observer.
   */
  private observeChildren(): void {
    if (this.area === null || this.resizes === null) return;
    for (const child of this.area.children) this.resizes.observe(child);
  }

  /** Sets the clearance the scroll padding keeps, from the parts' sizes. */
  private readonly onResize = (): void => {
    const area = this.area;
    if (area === null) return;
    setLength(area, HEADER_CLEARANCE, tallest(this.headers));
    // Sticky content stops above the area's padding: the fade is moved down
    // past it, and a pinned footer's fill covers it.
    const style = getComputedStyle(area);
    this.paddingEnd = Number.parseFloat(style.paddingBlockEnd) || 0;
    setLength(
      area,
      PADDING_BLOCK_END,
      this.paddingEnd > 0 ? this.paddingEnd : undefined,
    );
    // "normal" outside a flex or grid area.
    const gap = Number.parseFloat(style.rowGap) || 0;
    setLength(area, GAP, gap > 0 ? gap : undefined);
    const footer = tallest(this.footers);
    setLength(
      area,
      FOOTER_CLEARANCE,
      footer === undefined ? undefined : footer + this.paddingEnd,
    );
    this.onScroll();
  };

  private readonly onScroll = (): void => {
    const area = this.area;
    if (area === null) return;
    // Scroll positions can be fractional.
    area.toggleAttribute(
      "data-more-below",
      area.scrollTop + area.clientHeight < area.scrollHeight - 1,
    );
    // Most areas hold no footer: they read no layout here.
    if (this.footers.size > 0 || this.inset > 0) this.followFooters(area);
  };

  /**
   * Marks a footer pinned while it is held at the foot, and ends the fade
   * above it then. A footer whose section is out of view leaves the fade at
   * the area's edge.
   */
  private followFooters(area: HTMLElement): void {
    const box = area.getBoundingClientRect();
    const foot = box.bottom - this.paddingEnd;
    let inset = 0;
    for (const footer of this.footers) {
      const { top, bottom } = footer.getBoundingClientRect();
      const pinned = top < box.bottom && Math.abs(bottom - foot) < 1;
      footer.toggleAttribute("data-pinned", pinned);
      if (pinned) inset = Math.max(inset, box.bottom - top);
    }
    // Only on a change: a new inset redraws the masked area.
    if (inset === this.inset) return;
    this.inset = inset;
    setLength(area, FOOTER_INSET, inset > 0 ? inset : undefined);
    area.toggleAttribute("data-footer-pinned", inset > 0);
  }
}

/** The watcher of the scroll area a section is in, if it is in one. */
export const MenuScrollWatcherContext = createContext<MenuScrollWatcher | null>(
  null,
);

// Unrounded, unlike offsetHeight, so a part a fraction taller isn't cut.
function tallest(parts: Set<HTMLElement>): number | undefined {
  if (parts.size === 0) return undefined;
  return Math.max(
    ...Array.from(parts, (part) => part.getBoundingClientRect().height),
  );
}

function setLength(
  element: HTMLElement,
  property: string,
  length: number | undefined,
): void {
  if (length === undefined) element.style.removeProperty(property);
  else element.style.setProperty(property, `${length}px`);
}
