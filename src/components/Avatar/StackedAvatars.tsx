/*
Copyright 2023  New Vector Ltd

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

import classnames from "classnames";
import React, { cloneElement, useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import styles from "./Avatar.module.css";
import { Avatar } from "./Avatar";

import AvatarClipPath from "./avatar-clip.mask.svg";

type StackedAvatarsProps = {
  className?: string;
  size: React.ComponentProps<typeof Avatar>["size"];
};

const AVATAR_MASK_ID = "cpdAvatarClipSvg";
let stackedAvatarsUsageCount = 0;

/**
 * Renders a stack of avatars and clips the content appropriately.
 *
 * The `type` and `size` property of the children will be overriden so they
 * are all round and have the same size.
 */
export const StackedAvatars = ({
  children,
  size,
  className,
}: React.PropsWithChildren<StackedAvatarsProps>): React.JSX.Element => {
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
   * amount of `StackedAvatars` instance in the document.
   */
  useEffect(() => {
    if (stackedAvatarsUsageCount === 0) {
      const svgMask = renderToStaticMarkup(
        <AvatarClipPath id={AVATAR_MASK_ID} />
      );
      document.body.insertAdjacentHTML("beforeend", svgMask);
    }
    stackedAvatarsUsageCount++;
    return () => {
      stackedAvatarsUsageCount--;
      if (stackedAvatarsUsageCount <= 0) {
        // Cleanup the mask if there are no instances of `StackedAvatars` left
        // on the page
        document.getElementById(AVATAR_MASK_ID)?.remove();
      }
    };
  }, []);

  return (
    <div className={classnames(styles["stacked-avatars"], className)}>
      {React.Children.map(children, (child) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cloneElement(child as any, {
          type: "round", // Only supports `round` avatars
          size, // Forces all avatars to be of the same size
        })
      )}
    </div>
  );
};
