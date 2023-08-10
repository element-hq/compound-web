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
import React, { Suspense, forwardRef } from "react";
import { getInitialLetter } from "../../utils/string";
import { SuspenseImg } from "../../utils/SuspenseImg";
import styles from "./Avatar.module.css";
import { useIdColorHash } from "./useIdColorHash";

type AvatarProps = (
  | JSX.IntrinsicElements["button"]
  | JSX.IntrinsicElements["span"]
) & {
  /**
   * The avatar image URL, if any.
   */
  src?: React.ComponentProps<typeof SuspenseImg>["src"];
  /**
   * The Matrix ID, Room ID, or Alias to generate the color when no image source
   * is provided. Also used as a fallback when name is empty.
   */
  id: string;
  /**
   * The name used for the initial letter displayed when no image source is provided.
   */
  name: string;
  /**
   * Defines the avatar type, typically round, square is usually for spaces.
   * @default "round"
   */
  type?: "square" | "round";
  /**
   * The avatar size in CSS units, e.g. `"24px"`.
   */
  size?: CSSStyleDeclaration["height"];
  /**
   * On click handler, will turn the avatar into a button
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Key down handler, will turn the avatar into a button
   */
  onKeyDown?: (e: React.KeyboardEvent) => void;
  /**
   * Key up handler, will turn the avatar into a button
   */
  onKeyUp?: (e: React.KeyboardEvent) => void;
  /**
   * Callback when the image has failed to load.
   */
  onError?: React.ComponentProps<typeof SuspenseImg>["onError"];
};

/**
 * Some props warrant that the avatar become a button for accessibility purposes
 * @param props Avatar props
 * @returns whether the avatar should be a button or not
 */
function shouldBeAButton(props: Partial<AvatarProps>): boolean {
  return !!(props.onClick || props.onKeyDown || props.onKeyUp);
}

/**
 * Avatar component that will fallback to an initial letter over a coloured
 * background if no source is provided or if the source has failed to load.
 */
export const Avatar = forwardRef<
  HTMLSpanElement | HTMLButtonElement,
  AvatarProps
>(function Avatar(
  {
    src,
    id,
    name = "",
    type = "round",
    className = "",
    size,
    style = {},
    onError,
    ...props
  },
  ref,
) {
  const hash = useIdColorHash(id);
  const fallbackInitial = <>{getInitialLetter(name)}</>;

  return React.createElement(
    shouldBeAButton(props) ? "button" : "span",
    {
      ref,
      role: "img",
      title: id,
      "aria-label": "",
      ...props,
      "data-type": type,
      "data-color": hash,
      className: classnames(styles.avatar, className),
      style: {
        ...style,
        "--cpd-avatar-size": size,
      } as React.CSSProperties,
    },
    [
      <>
        {!src ? (
          fallbackInitial
        ) : (
          <Suspense fallback={fallbackInitial}>
            <SuspenseImg
              src={src}
              className={classnames(styles.image)}
              data-type={type}
              style={style}
              width={size}
              height={size}
              title={id}
              onError={onError}
            />
          </Suspense>
        )}
      </>,
    ],
  );
});
