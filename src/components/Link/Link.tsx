/*
Copyright 2023 New Vector Ltd

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

import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import classNames from "classnames";

type LinkProps = {
  className?: string;
  kind?: "primary" | "critical";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel">;

export const Link = ({
  children,
  className,
  kind = "primary",
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      {...props}
      rel="noreferrer noopener"
      className={classNames(styles.link, className)}
      data-kind={kind}
    >
      {children}
    </a>
  );
};
