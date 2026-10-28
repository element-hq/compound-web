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
   * Starts following an area.
   *
   * @param area - The element that scrolls.
   * @returns A function that stops following, and clears what it wrote.
   */
  public attach(area: HTMLElement): () => void {
    this.area = area;
    // The content's length changes with the size of any child.
    this.resizes = new ResizeObserver(this.onResize);
    this.resizes.observe(area);
    this.observeChildren();
    for (const part of [...this.headers, ...this.footers])
      this.resizes.observe(part);
    this.additions = new MutationObserver(() => {
      this.observeChildren();
      this.onResize();
    });
    this.additions.observe(area, { childList: true });
    area.addEventListener("scroll", this.onScroll, { passive: true });
    this.onResize();
    return (): void => {
      area.removeEventListener("scroll", this.onScroll);
      this.resizes?.disconnect();
      this.additions?.disconnect();
      this.resizes = null;
      this.additions = null;
      this.area = null;
      area.removeAttribute("data-more-below");
      area.removeAttribute("data-footer-pinned");
      for (const property of [
        HEADER_CLEARANCE,
        FOOTER_CLEARANCE,
        FOOTER_INSET,
        PADDING_BLOCK_END,
      ])
        area.style.removeProperty(property);
      for (const footer of this.footers) footer.removeAttribute("data-pinned");
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
      part.removeAttribute("data-pinned");
      this.resizes?.unobserve(part);
      this.onResize();
    };
  }

  private observeChildren(): void {
    if (this.area === null || this.resizes === null) return;
    for (const child of this.area.children) this.resizes.observe(child);
  }

  /** Sets the clearance the scroll padding keeps, from the parts' sizes. */
  private readonly onResize = (): void => {
    const area = this.area;
    if (area === null) return;
    setLength(area, HEADER_CLEARANCE, tallest(this.headers));
    const footer = tallest(this.footers);
    if (footer === undefined) {
      area.style.removeProperty(FOOTER_CLEARANCE);
      area.style.removeProperty(PADDING_BLOCK_END);
    } else {
      this.paddingEnd = parseFloat(getComputedStyle(area).paddingBlockEnd) || 0;
      setLength(area, FOOTER_CLEARANCE, footer + this.paddingEnd);
      // A footer sticks above the area's padding; its fill covers that.
      setLength(area, PADDING_BLOCK_END, this.paddingEnd);
    }
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
