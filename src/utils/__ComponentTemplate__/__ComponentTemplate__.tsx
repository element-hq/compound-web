/*
Copyright %YEAR% %COPYRIGHT_HOLDER%

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import classnames from "classnames";
import React, { forwardRef, type PropsWithChildren } from "react";
import styles from "./__ComponentTemplate__.module.css";

type __ComponentTemplate__Props = {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const __ComponentTemplate__ = forwardRef<
  HTMLDivElement,
  __ComponentTemplate__Props
>(function __ComponentTemplate__(
  {
    children,
    className,
    ...props
  }: PropsWithChildren<__ComponentTemplate__Props>,
  ref,
) {
  // TODO: Update the class name to something related to the component name
  const classes = classnames(styles.root, className);
  return (
    <div {...props} className={classes} ref={ref}>
      {children}
    </div>
  );
});
