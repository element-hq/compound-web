/*
Copyright 2024-2026 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  useLayoutEffect,
  useRef,
  useState,
  type HTMLProps,
  type JSX,
  type MouseEventHandler,
  type KeyboardEvent,
} from "react";
import { IconButton } from "../Button";
import Chevron from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import styles from "./Breadcrumb.module.css";
import { Link } from "../Link/Link.tsx";
import classNames from "classnames";

interface BreadcrumbProps extends HTMLProps<HTMLElement> {
  /**
   * The label for the back button.
   */
  backLabel: string;
  /**
   * The click handler for the back button.
   * If undefined, the back button will be disabled.
   */
  onBackClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * The pages to display in the breadcrumb.
   * All the pages except the last one are displayed as links.
   */
  pages: string[];
  /**
   * The click handler for a page.
   * @param page - The page that was clicked.
   * @param index - The index of the page that was clicked.
   */
  onPageClick: (page: string, index: number) => void;
}

// Calculated from => Root node / last parent / current page name.
const MIN_PAGE_VISIBLE_COUNT = 3;

/**
 * A breadcrumb component.
 */
export function Breadcrumb({
  backLabel,
  onBackClick,
  pages,
  onPageClick,
  className,
  ...props
}: BreadcrumbProps): JSX.Element {
  const listRef = useRef<HTMLOListElement>(null);

  // We attempt to collapse breadcrumbs when there isn't
  // enough space to fully render all list items.
  // The logic is that we collapse the left-most pages to "..."
  // until everything can fit.
  const [collapsedCount, setCollapsedCount] = useState(0);
  const [, setMeasureTick] = useState(0);
  const maxCollapsed = Math.max(0, pages.length - MIN_PAGE_VISIBLE_COUNT);

  // Calculate a unique key for the page titles (\u0000 just being a character we wouldn't use)
  const pagesKey = pages.join("\u0000");

  // Observe the list width, setMeasureTick is used to force
  // a redraw when we see the width has changed.
  useLayoutEffect(() => {
    setCollapsedCount(0);
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    let lastWidth = list.clientWidth;
    const observer = new ResizeObserver(() => {
      if (list.clientWidth !== lastWidth) {
        lastWidth = list.clientWidth;
        setCollapsedCount(0);
        setMeasureTick((tick) => tick + 1);
      }
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, [pagesKey]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    // The list is end-aligned so overflow spills off the start edge, which
    // scrollWidth doesn't report. Check whether the first page sticks out of
    // the list instead (on either side, to handle RTL).
    const first = list.firstElementChild?.getBoundingClientRect();
    const bounds = list.getBoundingClientRect();
    const overflowing =
      first !== undefined &&
      (first.left < bounds.left || first.right > bounds.right);
    if (overflowing && collapsedCount < maxCollapsed) {
      setCollapsedCount(collapsedCount + 1);
    }
  });

  // Calculate the number of pages we want to hide and render them
  // as "..."
  const hiddenPages = pages.slice(1, 1 + collapsedCount);

  return (
    <nav className={classNames(styles.breadcrumb, className)} {...props}>
      <IconButton
        kind="secondary"
        size="28px"
        aria-label={backLabel}
        onClick={onBackClick}
        disabled={!onBackClick}
      >
        <Chevron />
      </IconButton>
      <ol className={styles.pages} ref={listRef}>
        {pages.map((page, index) => {
          if (collapsedCount > 0 && index > 0 && index <= collapsedCount) {
            // Render a single ellipsis in place of all the collapsed pages.
            return index === 1 ? (
              <li key="ellipsis" className={styles.ellipsis}>
                <span title={hiddenPages.join(" / ")}>…</span>
              </li>
            ) : null;
          }
          return (
            <Page
              key={index}
              page={page}
              isLastPage={index === pages.length - 1}
              onClick={() => onPageClick(page, index)}
            />
          );
        })}
      </ol>
    </nav>
  );
}

interface PageProps {
  /**
   * The page to display.
   */
  page: string;
  /**
   * Whether this is the last page in the breadcrumb.
   */
  isLastPage: boolean;
  /**
   * The click handler for the page, ignore for last page.
   */
  onClick: () => void;
}

/**
 * A breadcrumb page.
 * If not the last page, the page is displayed in a link.
 */
function Page({ page, isLastPage, onClick }: PageProps): JSX.Element {
  const onKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === " ") {
      onClick();
    }
  };

  return (
    <li>
      {isLastPage ? (
        <span className={styles["last-page"]} aria-current="page">
          {page}
        </span>
      ) : (
        <Link
          size="sm"
          role="button"
          onClick={onClick}
          onKeyDown={onKeyDown}
          tabIndex={0}
        >
          {page}
        </Link>
      )}
    </li>
  );
}
