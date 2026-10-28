/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  createContext,
  type JSX,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./MenuSticky.module.css";
import { MenuTitle } from "./MenuTitle";

/*
These stick within their parent, so they hold only as long as the parent is in view.
A header goes first in its section; a footer last, in a parent apart from the
header, or it could ride up over it.
*/

/**
 * A section's title, held at the top of the scroll area while the section's
 * items scroll under it. Hidden, as the section's group carries the name.
 */
export function MenuStickyHeader({ title }: { title: string }): JSX.Element {
  const ref = useStickyPart("addHeader");
  return (
    <div ref={ref} aria-hidden className={styles.header}>
      <MenuTitle title={title} />
    </div>
  );
}

/** Content held at the foot of the scroll area while its section is in view. */
export function MenuStickyFooter({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const ref = useStickyPart("addFooter");
  return (
    <div ref={ref} role="none" className={styles.footer}>
      {children}
    </div>
  );
}

/**
 * Registers a part with the scroll area it is in, if any, for the area to keep
 * clear of.
 */
function useStickyPart(
  add: keyof Pick<StickyParts, "addHeader" | "addFooter">,
): (element: HTMLDivElement | null) => void {
  const parts = useContext(StickyPartsContext);
  const [part, setPart] = useState<HTMLDivElement | null>(null);
  useEffect(
    () => (parts && part ? parts[add](part) : undefined),
    [parts, part, add],
  );
  return setPart;
}

/**
 * The sticky headers and footers within an area, which it keeps an item
 * reached by keyboard clear of, and its fade above.
 */
export class StickyParts {
  private area: HTMLElement | null = null;
  private resizes: ResizeObserver | null = null;
  private readonly headers = new Set<HTMLElement>();
  private readonly footers = new Set<HTMLElement>();
  // Read on a resize rather than on every scroll.
  private paddingEnd = 0;
  private inset = 0;

  /**
   * Starts following the parts within an area.
   *
   * @param area - The element that scrolls.
   * @returns A function that stops following.
   */
  public attach(area: HTMLElement): () => void {
    this.area = area;
    this.resizes = new ResizeObserver(this.measure);
    this.resizes.observe(area);
    for (const part of [...this.headers, ...this.footers])
      this.resizes.observe(part);
    area.addEventListener("scroll", this.follow, { passive: true });
    this.measure();
    return (): void => {
      area.removeEventListener("scroll", this.follow);
      this.resizes?.disconnect();
      this.resizes = null;
      this.area = null;
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
    this.measure();
    return (): void => {
      parts.delete(part);
      this.resizes?.unobserve(part);
      this.measure();
    };
  }

  /** Sets the clearance the scroll padding keeps, from the parts' sizes. */
  private readonly measure = (): void => {
    const area = this.area;
    if (area === null) return;
    setLength(area, "--header-clearance", tallest(this.headers));
    const footer = tallest(this.footers);
    if (footer === undefined) {
      area.style.removeProperty("--footer-clearance");
      area.style.removeProperty("--sticky-padding-block-end");
    } else {
      this.paddingEnd = parseFloat(getComputedStyle(area).paddingBlockEnd) || 0;
      setLength(area, "--footer-clearance", footer + this.paddingEnd);
      // A footer sticks above the area's padding; its fill covers that.
      setLength(area, "--sticky-padding-block-end", this.paddingEnd);
    }
    this.follow();
  };

  /**
   * Marks a footer pinned while it is held at the foot, and ends the fade
   * above it then. A footer whose section is out of view leaves the fade at
   * the area's edge.
   */
  private readonly follow = (): void => {
    const area = this.area;
    if (area === null) return;
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
    setLength(area, "--footer-inset", inset > 0 ? inset : undefined);
    area.toggleAttribute("data-footer-pinned", inset > 0);
  };
}

/** The parts of the area a section is in, if it is in one. */
export const StickyPartsContext = createContext<StickyParts | null>(null);

function tallest(parts: Set<HTMLElement>): number | undefined {
  if (parts.size === 0) return undefined;
  return Math.max(...Array.from(parts, (part) => part.offsetHeight));
}

function setLength(
  element: HTMLElement,
  property: string,
  length: number | undefined,
): void {
  if (length === undefined) element.style.removeProperty(property);
  else element.style.setProperty(property, `${length}px`);
}
