/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { useEffect } from "react";
import styles from "./Avatar.module.css";
import clipMask from "./avatar-clip.mask.svg?raw";

type AvatarStackProps = {
  className?: string;
};

const AVATAR_MASK_ID = "cpdAvatarClipSvg";
let AvatarStackUsageCount = 0;

/**
 * Renders a stack of avatars and clips the content appropriately.
 *
 * The `type` of avatars should always be set to `round`
 * And all the avatars should have the same size.
 */
export const AvatarStack: React.FC<
  React.PropsWithChildren<AvatarStackProps>
> = ({ children, className }) => {
  /**
   * The `clip-path` property in CSS supports a `path()` function, however
   * that has to use pixel values.
   * `clipPathUnits="objectBoundingBox"` only exists inside an SVG document.
   * Which is why we have the external `avatar-clip.mask.svg`.
   *
   * It is possible to load this SVG externally using `url(path/to/doc.svg#id)`
   * But this is only supported in Firefox
   * This leaves us with no choice but rendering SVG inline in the HTML document
   * And making sure there is always only a single instance regardless of the
   * amount of `AvatarStack` instance in the document.
   */
  useEffect(() => {
    if (AvatarStackUsageCount === 0) {
      const svgMask = `
        <div aria-hidden="true" id="${AVATAR_MASK_ID}" class="${styles["clip-path"]}">
          ${clipMask}
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", svgMask);
    }
    AvatarStackUsageCount++;
    return () => {
      AvatarStackUsageCount--;
      if (AvatarStackUsageCount <= 0) {
        // Cleanup the mask if there are no instances of `AvatarStack` left
        // on the page
        document.getElementById(AVATAR_MASK_ID)?.remove();
      }
    };
  }, []);

  return (
    <div className={classnames(styles["stacked-avatars"], className)}>
      {children}
    </div>
  );
};
