/*
Copyright 2024 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { HTMLProps, JSX, MouseEventHandler, KeyboardEvent } from "react";
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
   */
  onBackClick: MouseEventHandler<HTMLButtonElement>;
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
  return (
    <nav className={classNames(styles.breadcrumb, className)} {...props}>
      <IconButton
        subtleBackground={true}
        size="28px"
        aria-label={backLabel}
        onClick={onBackClick}
      >
        <Chevron />
      </IconButton>
      <ol className={styles.pages}>
        {pages.map((page, index) => (
          <Page
            key={index}
            page={page}
            isLastPage={index === pages.length - 1}
            onClick={() => onPageClick(page, index)}
          />
        ))}
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
          size="small"
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
