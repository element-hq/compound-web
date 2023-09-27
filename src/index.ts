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

export { ActionControl } from "./components/ActionControl/ActionControl";
export { Alert } from "./components/Alert/Alert";
export { Avatar } from "./components/Avatar/Avatar";
export { AvatarStack } from "./components/Avatar/AvatarStack";
export { Badge } from "./components/Badge/Badge";
export { Button } from "./components/Button/Button";
export { Body } from "./components/Typography/Body";
export { Text } from "./components/Typography/Text";
export { Checkbox } from "./components/Checkbox/Checkbox";
export { Control } from "./components/Form/Control";
export { Field } from "./components/Form/Field";
export {
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "./components/Typography/Heading";
export { IconButton } from "./components/IconButton/IconButton";
export { Label } from "./components/Form/Label";
export { Link } from "./components/Link/Link";
export { Message } from "./components/Form/Message";
export { PasswordControl } from "./components/Form/Controls/Password";
export { Radio } from "./components/Radio/Radio";
export { Root } from "./components/Form/Root";
export { Submit } from "./components/Form/Submit";
export { Toggle } from "./components/Toggle/Toggle";
export { Tooltip } from "./components/Tooltip/Tooltip";
export { ValidityState } from "./components/Form/ValidityState";

/**
 * Export utility functions
 */

export { useIdColorHash } from "./components/Avatar/useIdColorHash";
export { getInitialLetter } from "./utils/string";

import "./styles/global.css";
