/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  type ComponentProps,
  type JSX,
  useEffect,
  useState,
} from "react";
import { useMergeRefs } from "@floating-ui/react";
import styles from "./MenuScrollArea.module.css";

/**
 * A part of a menu that scrolls by itself, fading out at the bottom while
 * there is more below. Menus scroll this way already; use it for a region
 * within one, such as a list below a heading that should stay put.
 *
 * Content stuck to the bottom of the area is kept clear of the fade by
 * setting `--cpd-menu-scroll-inset-block-end` on the area to its height.
 */
export function MenuScrollArea({
  className,
  children,
  ref: theirRef,
  ...props
}: ComponentProps<"div">): JSX.Element {
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
}

/**
 * Keeps `data-more-below` on the area while there is more to scroll to below,
 * following its scrolling and the size of it and its content. Set on the
 * element rather than rendered, as it changes on every scroll.
 *
 * @param area - The element that scrolls.
 * @returns A function that stops watching.
 */
function watchScrollEdges(area: HTMLElement): () => void {
  const measure = (): void => {
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
