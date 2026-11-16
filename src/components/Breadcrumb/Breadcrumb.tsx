/*
Copyright 2024 New Vector Ltd.

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
  // Number of pages hidden after the first page, to fit the available space.
  const [collapsedCount, setCollapsedCount] = useState(0);
  // Bumped on resize so that a re-measure always happens, even when
  // collapsedCount is already 0 (setting it to 0 again would not re-render).
  const [, setMeasureTick] = useState(0);
  // Set when the pages still don't fit once fully collapsed: the list is then
  // aligned to the end so the start is clipped and the current page stays visible.
  const [clipStart, setClipStart] = useState(false);
  // Always keep the first page, the direct parent and the current page.
  const maxCollapsed = Math.max(0, pages.length - 3);

  // Reset whenever the pages or the available width change, then collapse
  // one page at a time (from the left) until the list fits.
  const pagesKey = pages.join("\u0000");
  useLayoutEffect(() => {
    setCollapsedCount(0);
    setClipStart(false);
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    let lastWidth = list.clientWidth;
    const observer = new ResizeObserver(() => {
      if (list.clientWidth !== lastWidth) {
        lastWidth = list.clientWidth;
        setCollapsedCount(0);
        setClipStart(false);
        setMeasureTick((tick) => tick + 1);
      }
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, [pagesKey]);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (clipStart || list.scrollWidth <= list.clientWidth) return;
    if (collapsedCount < maxCollapsed) {
      setCollapsedCount(collapsedCount + 1);
    } else {
      setClipStart(true);
    }
  });

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
      <ol
        className={classNames(styles.pages, {
          [styles["clip-start"]]: clipStart,
        })}
        ref={listRef}
      >
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
