/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  createContext,
  type FC,
  type ReactNode,
  useContext,
} from "react";

/**
 * Where the floating parts of Compound's components are rendered.
 *
 * Menus, context menus, tooltips and release announcements are not rendered
 * in place: they are portalled out of their trigger's subtree so that they can
 * float above the rest of the page. Without a `PortalRoot` they go into
 * `document.body`.
 */
export type PortalRootElement = HTMLElement | ShadowRoot;

const PortalRootContext = createContext<PortalRootElement | null | undefined>(
  undefined,
);

/**
 * The element that the floating parts of Compound's components are portalled
 * into, as set by the nearest enclosing `PortalRoot`. `undefined` where there
 * is no `PortalRoot` and they go into `document.body`; `null` where there is
 * one whose root is not available yet.
 *
 * Internal to Compound: it is deliberately not exported from the package.
 */
export function usePortalRoot(): PortalRootElement | null | undefined {
  return useContext(PortalRootContext);
}

interface Props {
  /**
   * The element to portal into. Pass `null` while it is not available yet
   * (state set from a callback ref, say): floating parts follow it once it is.
   * @default document.body
   */
  root: PortalRootElement | null;
  children: ReactNode;
}

/**
 * Sends the floating parts of the Compound components beneath it (menus,
 * context menus, tooltips, release announcements) into `root` instead of
 * `document.body`.
 *
 * This is for hosts whose content does not live in the main document: a
 * component rendered inside a shadow root, or moved into another window such
 * as a Document Picture-in-Picture window, where a menu portalled into the
 * main document would appear in the wrong place, or the wrong window. The
 * usual choice of `root` is the body of the document the content currently
 * lives in, so that floating parts are still free to extend past the host's
 * own box.
 *
 * `root` must be in the same document as the triggers, or positioning will be
 * off. The innermost `PortalRoot` wins.
 */
export const PortalRoot: FC<Props> = ({ root, children }) => (
  <PortalRootContext.Provider value={root}>
    {children}
  </PortalRootContext.Provider>
);

PortalRoot.displayName = "PortalRoot";
