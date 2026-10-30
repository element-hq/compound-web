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
import {
  MenuScrollWatcher,
  MenuScrollWatcherContext,
} from "./MenuScrollWatcher";

/**
 * A part of a menu that scrolls by itself, fading out at the bottom while
 * there is more below. Menus scroll this way already; use it for a region
 * within one, such as a list below a heading that should stay put.
 *
 * Content stuck to the bottom of the area is kept clear of the fade by
 * setting `--cpd-menu-scroll-inset-block-end` on the area to its height.
 * A `MenuScrollSection`'s sticky parts are kept clear of it without that.
 */
export function MenuScrollArea({
  className,
  children,
  ref: theirRef,
  ...props
}: ComponentProps<"div">): JSX.Element {
  const [area, setArea] = useState<HTMLDivElement | null>(null);
  const ref = useMergeRefs([setArea, theirRef]);
  // Made before the area is: a section's parts register in their own effects,
  // which run before the area's.
  const [watcher] = useState(() => new MenuScrollWatcher());
  useEffect(() => (area ? watcher.attach(area) : undefined), [area, watcher]);

  return (
    <MenuScrollWatcherContext.Provider value={watcher}>
      <div
        role="none"
        {...props}
        ref={ref}
        className={classnames(styles.area, className)}
      >
        {children}
      </div>
    </MenuScrollWatcherContext.Provider>
  );
}
