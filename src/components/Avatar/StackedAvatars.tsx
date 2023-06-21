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
import React from "react";
import styles from "./Avatar.module.css";
import { Avatar } from "./Avatar";

import AvatarClipPath from "./avatar-clip.mask.svg";
import { createPortal } from "react-dom";

type StackedAvatarsProps = {
  className?: string;
  size: React.ComponentProps<typeof Avatar>["size"];
  avatars: Omit<React.ComponentProps<typeof Avatar>[], "type" | "size">;
};

const AVATAR_MASK_ID = "cpdAvatarClipSvg";

/**
 * Renders a stack of avatars and clips the content appropriately.
 *
 * This component only supports `round` avatars and forces all avatars to be
 * rendered at the same size
 */
export const StackedAvatars = ({
  avatars,
  size,
  className,
}: StackedAvatarsProps): React.JSX.Element => {
  return (
    <div className={classnames(styles["stacked-avatars"], className)}>
      {avatars.map((avatar) => (
        <Avatar key={avatar.id} {...avatar} size={size} type="round" />
      ))}
      {/* Adds the SVG to the document if it's not been added already
          It is then used via `clip-path` in CSS 
      */}
      {!document.getElementById(AVATAR_MASK_ID) &&
        createPortal(<AvatarClipPath id={AVATAR_MASK_ID} />, document.body)}
    </div>
  );
};
