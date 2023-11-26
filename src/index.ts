/*
Copyright 2023 The Matrix.org Foundation C.I.C.

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

/**
 * Export React components
 */

export { Alert } from "./components/Alert/Alert";
export { Avatar } from "./components/Avatar/Avatar";
export { AvatarStack } from "./components/Avatar/AvatarStack";
export { Badge } from "./components/Badge/Badge";
export { Button, IconButton } from "./components/Button";
export { Body } from "./components/Typography/Body";
export { Text } from "./components/Typography/Text";
export { Glass } from "./components/Glass/Glass";
export {
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "./components/Typography/Heading";
export { Link } from "./components/Link/Link";
export { Menu } from "./components/Menu/Menu";
export { MenuItem } from "./components/Menu/MenuItem";
export { Search } from "./components/Search/Search";
export { Separator } from "./components/Separator/Separator";
export { ToggleMenuItem } from "./components/Menu/ToggleMenuItem";
export { Tooltip } from "./components/Tooltip/Tooltip";

export {
  TextControl,
  /* Legacy export name */
  TextControl as Control,
  TextInput,
  ActionControl,
  ActionInput,
  PasswordControl,
  PasswordInput,
  MFAControl,
  MFAInput,
  CheckboxControl,
  CheckboxInput,
  /* Legacy export name */
  CheckboxInput as Checkbox,
  RadioControl,
  RadioInput,
  /* Legacy export name */
  RadioInput as Radio,
  ToggleControl,
  ToggleInput,
  /* Legacy export name */
  ToggleInput as Toggle,
  Root,
  Submit,
  Message,
  ErrorMessage,
  HelpMessage,
  ValidityState,
  Field,
  InlineField,
  Label,
} from "./components/Form";
export * as Form from "./components/Form";

/**
 * Export utility functions
 */

export { useIdColorHash } from "./components/Avatar/useIdColorHash";
export { getInitialLetter } from "./utils/string";

import "./styles/global.css";
