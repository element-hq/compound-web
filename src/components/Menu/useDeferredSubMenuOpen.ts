/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { useEffect, useState } from "react";

/** Duration of the parent menu's slide-in animation (ms). */
const MENU_ANIMATION_DURATION = 180;

/**
 * Defers a submenu's `open` prop until its parent menu has finished opening.
 *
 * A submenu that is open at the same time as its parent (`open={true}` on
 * mount) would otherwise be positioned before the parent's animation has
 * settled and, inside a `PortalRoot`, be marked `aria-hidden` by the modal
 * parent. Closing is never deferred.
 */
export function useDeferredSubMenuOpen(
  open: boolean | undefined,
): boolean | undefined {
  const [deferredOpen, setDeferredOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(
        () => setDeferredOpen(true),
        MENU_ANIMATION_DURATION,
      );
      return () => clearTimeout(timer);
    } else {
      setDeferredOpen(false);
    }
  }, [open]);

  return open ? deferredOpen : open;
}
