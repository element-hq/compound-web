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

import React, { Suspense } from "react";
import { getInitialLetter } from "../../utils/string";
import { SuspenseImg } from "../../utils/SuspenseImg";
import styles from "./Avatar.module.css";
import { useUsernameColor } from "./useUsernameColor";

type AvatarProps = {
  src?: string;
  id: string;
  name: string;
  type?: "square" | "round";
  size?: CSSStyleDeclaration["height"];
};

export const Avatar = ({
  src,
  id,
  name = "",
  type = "round",
  size,
}: AvatarProps): JSX.Element => {
  const color = useUsernameColor(id);
  const style = {
    "--cpd-avatar-size": size,
  } as React.CSSProperties;
  const imagelessAvatar = (
    <span
      role="img"
      aria-label=""
      data-type={type}
      data-color={color}
      className={styles.avatar}
      style={style}
    >
      {getInitialLetter(name)}
    </span>
  );

  return !src ? (
    imagelessAvatar
  ) : (
    <Suspense fallback={imagelessAvatar}>
      <SuspenseImg
        src={src}
        className={styles.avatar}
        data-type={type}
        style={style}
      />
    </Suspense>
  );
};
