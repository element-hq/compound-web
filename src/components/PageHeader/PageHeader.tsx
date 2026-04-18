/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, {
  forwardRef,
  type ComponentType,
  type PropsWithChildren,
  type ReactNode,
  type SVGAttributes,
} from "react";
import styles from "./PageHeader.module.css";
import { BigIcon } from "../Icon/BigIcon";
import { Heading } from "../Typography/Heading";

type PageHeaderProps = {
  Icon: ComponentType<SVGAttributes<SVGElement>>;
  /**
   * The heading text.
   */
  heading: string;
  /**
   * The t-shirt size of the header.
   * @default "lg"
   */
  size?: "md" | "lg";
  /**
   * The contents of the header. At a minimum, this should include a description
   * wrapped in a `<p>` element.
   */
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  function PageHeader(
    {
      children,
      className,
      Icon,
      heading,
      size = "lg",
      ...props
    }: PropsWithChildren<PageHeaderProps>,
    ref,
  ) {
    return (
      <div
        {...props}
        className={classnames(styles.header, className)}
        ref={ref}
        data-size={size}
      >
        <BigIcon size={size} className={styles.icon}>
          <Icon aria-hidden />
        </BigIcon>
        <Heading as="h1" weight="semibold" size={size === "lg" ? "md" : "sm"}>
          {heading}
        </Heading>
        {children}
      </div>
    );
  },
);
