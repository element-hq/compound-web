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
import React, { PropsWithChildren } from "react";
import styles from "./__ComponentTemplate__.module.css";

type __ComponentTemplate__Props<C extends React.ElementType> = {
  as?: C;
  className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const __ComponentTemplate__ = <C extends React.ElementType = "p">({
  as,
  children,
  className,
  ...props
}: PropsWithChildren<__ComponentTemplate__Props<C>>) => {
  const Component = as || "div";
  // TODO: Update the class name to something related to the component name
  const classes = classnames(styles.root, className);
  return (
    <Component {...props} className={classes}>
      {children}
    </Component>
  );
};
