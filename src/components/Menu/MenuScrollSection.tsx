/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type JSX, type ReactNode } from "react";
import { MenuStickyFooter, MenuStickyHeader } from "./MenuSticky";

interface MenuScrollSectionProps {
  /** Shown at the top of the section while it is in view, and names it. */
  title: string;
  /**
   * Content held at the foot of the scroll area while the section is in view,
   * such as a live reading for its items. Leaves with the section.
   */
  stickyBottomItem?: ReactNode;
  /** The section's items. */
  children: ReactNode;
}

/**
 * A titled group of items within a `MenuScrollArea`. Its title stays at the
 * top, and any `stickyBottomItem` at the foot, while the items scroll under
 * them; an item reached by keyboard is kept clear of both.
 */
export function MenuScrollSection({
  title,
  stickyBottomItem,
  children,
}: MenuScrollSectionProps): JSX.Element {
  const hasStickyBottom =
    stickyBottomItem !== undefined &&
    stickyBottomItem !== null &&
    stickyBottomItem !== false;

  // A menu may only contain items, separators and groups, so the title is a
  // hidden part of a named group.
  return (
    <div role="group" aria-label={title}>
      <MenuStickyHeader title={title} />
      {/* The footer's own parent, so it can't ride up over the title. */}
      <div role="none">
        {children}
        {hasStickyBottom && (
          <MenuStickyFooter>{stickyBottomItem}</MenuStickyFooter>
        )}
      </div>
    </div>
  );
}
