/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  type ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { useMergeRefs } from "@floating-ui/react";
import styles from "./MenuScrollArea.module.css";

/**
 * A part of a menu that scrolls by itself, fading out at an edge with more
 * beyond it. Menus scroll this way already; use it for a region within one,
 * such as a list below a heading that should stay put.
 *
 * Content stuck to an edge of the area, like a sticky heading, is kept clear
 * of the fade by setting `--cpd-menu-scroll-inset-block-start` or
 * `--cpd-menu-scroll-inset-block-end` on the area to its size.
 */
export const MenuScrollArea = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, theirRef) => {
  const [area, setArea] = useState<HTMLDivElement | null>(null);
  const ref = useMergeRefs([setArea, theirRef]);
  useEffect(() => (area ? watchScrollEdges(area) : undefined), [area]);

  return (
    <div
      role="none"
      {...props}
      ref={ref}
      className={classnames(styles.area, className)}
    >
      {children}
    </div>
  );
});

MenuScrollArea.displayName = "MenuScrollArea";

// Set on the element rather than rendered, as it changes on every scroll.
function watchScrollEdges(area: HTMLElement): () => void {
  const measure = (): void => {
    area.toggleAttribute("data-more-above", area.scrollTop > 0);
    // Scroll positions can be fractional.
    area.toggleAttribute(
      "data-more-below",
      area.scrollTop + area.clientHeight < area.scrollHeight - 1,
    );
  };
  // The content's length changes with the size of any child.
  const resizes = new ResizeObserver(measure);
  const observeChildren = (): void => {
    for (const child of area.children) resizes.observe(child);
  };
  const additions = new MutationObserver(() => {
    observeChildren();
    measure();
  });
  resizes.observe(area);
  observeChildren();
  additions.observe(area, { childList: true });
  area.addEventListener("scroll", measure, { passive: true });
  measure();
  return (): void => {
    area.removeEventListener("scroll", measure);
    resizes.disconnect();
    additions.disconnect();
  };
}
