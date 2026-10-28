/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  type JSX,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./MenuSticky.module.css";
import { MenuTitle } from "./MenuTitle";
import {
  type MenuScrollWatcher,
  MenuScrollWatcherContext,
} from "./MenuScrollWatcher";

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
  add: keyof Pick<MenuScrollWatcher, "addHeader" | "addFooter">,
): (element: HTMLDivElement | null) => void {
  const watcher = useContext(MenuScrollWatcherContext);
  const [part, setPart] = useState<HTMLDivElement | null>(null);
  useEffect(
    () => (watcher && part ? watcher[add](part) : undefined),
    [watcher, part, add],
  );
  return setPart;
}
