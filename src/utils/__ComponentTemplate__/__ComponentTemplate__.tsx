/*
Copyright %YEAR% %COPYRIGHT_HOLDER%

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
import React, { forwardRef, PropsWithChildren } from "react";
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
