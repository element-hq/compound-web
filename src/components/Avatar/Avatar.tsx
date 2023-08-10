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
  src?: React.ComponentProps<typeof SuspenseImg>["src"];
  id: string;
  name: string;
  type?: "square" | "round";
  size?: CSSStyleDeclaration["height"];
  onClick?: (e: React.MouseEvent) => void;
  onError?: React.ComponentProps<typeof SuspenseImg>["onError"];
};

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
    onClick,
    ...props
  },
  ref,
) {
  const hash = useIdColorHash(id);
  const fallbackInitial = <>{getInitialLetter(name)}</>;

  return React.createElement(
    // Preventing `span` elements to have an `onClick` as it is usually
    // terrible for accesibility
    onClick ? "button" : "span",
    {
      ref,
      role: "img",
      title: id,
      "aria-label": "",
      ...props,
      "data-type": type,
      "data-color": hash,
      className: classnames(styles.avatar, className),
      onClick,
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
