/*
Copyright 2023 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { type ComponentProps, forwardRef } from "react";
import { getInitialLetter } from "../../utils/string";
import styles from "./Avatar.module.css";
import { useIdColorHash } from "./useIdColorHash";

type AvatarProps = (ComponentProps<"button"> | ComponentProps<"span">) & {
  /**
   * The avatar image URL, if any.
   */
  src?: React.ComponentProps<"img">["src"];
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
   * On click handler, will turn the avatar into a button element.
   */
  onClick?: (e: React.MouseEvent) => void;
  /**
   * Key down handler, will turn the avatar into a button element.
   */
  onKeyDown?: (e: React.KeyboardEvent) => void;
  /**
   * Key up handler, will turn the avatar into a button element.
   */
  onKeyUp?: (e: React.KeyboardEvent) => void;
  /**
   * Callback when the image has failed to load.
   */
  onError?: React.ComponentProps<"img">["onError"];
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
  return React.createElement(
    shouldBeAButton(props) ? "button" : "span",
    {
      ref,
      role: "img",
      // Default the aria-label to id
      "aria-label": id,
      ...props,
      "data-type": type,
      "data-color": useIdColorHash(id),
      className: classnames(styles.avatar, className, {
        [styles["avatar-imageless"]]: !src,
      }),
      style: {
        ...style,
        "--cpd-avatar-size": size,
      } as React.CSSProperties,
    },
    <React.Fragment>
      {!src ? (
        getInitialLetter(name)
      ) : (
        <img
          loading="lazy"
          alt=""
          src={src}
          referrerPolicy="no-referrer"
          className={classnames(styles.image)}
          data-type={type}
          style={style}
          width={size}
          height={size}
          onError={onError}
        />
      )}
    </React.Fragment>,
  );
});
