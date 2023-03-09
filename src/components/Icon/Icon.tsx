/*
Copyright 2023 New Vector Ltd.

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

import React from "react";
import { useDynamicSvgImport } from "./useDynamicSvgImport";

/**
 * TODO: Generate this union dynamically as part of the design tokens transformation
 */
type CompoundIcons = "thread";

export const Icon = ({
  size = 32,
  icon,
  ...props
}: {
  size?: number;
  icon: CompoundIcons;
} & React.SVGAttributes<SVGElement>): JSX.Element => {
  const { SvgIcon } = useDynamicSvgImport(icon);

  // TODO: Loading indicator?

  if (SvgIcon) {
    return <SvgIcon {...props} width={size} height={size} />;
  } else {
    /**
     * We render an empty SVG during loading of if the import errored-out
     * To fill in the space the icon should have taken, this avoids layout shifts
     */
    return <svg aria-hidden="true" width={size} height={size} />;
  }
};
