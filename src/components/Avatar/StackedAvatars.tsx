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
import React, { cloneElement } from "react";
import styles from "./Avatar.module.css";
import { Avatar } from "./Avatar";

import AvatarClipPath from "./avatar-clip.mask.svg";
import { createPortal } from "react-dom";

type StackedAvatarsProps = {
  className?: string;
  size: React.ComponentProps<typeof Avatar>["size"];
  avatars: Omit<React.ComponentProps<typeof Avatar>[], "type" | "size">;
};

// const AVATAR_MASK_ID = "cpdAvatarClipSvg";

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
