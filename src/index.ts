/*
Copyright 2025 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
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
export { ContextMenu } from "./components/Menu/ContextMenu";
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
export { IndicatorIcon } from "./components/Icon/IndicatorIcon/IndicatorIcon";
export { BigIcon } from "./components/Icon/BigIcon";
export { Link } from "./components/Link/Link";
export { NavBar, NavItem } from "./components/Nav";
export { Menu } from "./components/Menu/Menu";
export { MenuItem } from "./components/Menu/MenuItem";
export { MenuTitle } from "./components/Menu/MenuTitle";
export { RadioMenuItem } from "./components/Menu/RadioMenuItem";
export { Progress } from "./components/Progress/Progress";
export { Search } from "./components/Search/Search";
export { Separator } from "./components/Separator/Separator";
export { ToggleMenuItem } from "./components/Menu/ToggleMenuItem";
export { CheckboxMenuItem } from "./components/Menu/CheckboxMenuItem";
export { Tooltip } from "./components/Tooltip/Tooltip";
export { TooltipProvider } from "./components/Tooltip/TooltipProvider";
export { ReleaseAnnouncement } from "./components/ReleaseAnnouncement";
export { Toast } from "./components/Toast/Toast";
export { Dropdown } from "./components/Dropdown";
export { InlineSpinner } from "./components/InlineSpinner";
export { Breadcrumb } from "./components/Breadcrumb";
export { VisualList, VisualListItem } from "./components/VisualList";
export { ChatFilter } from "./components/ChatFilter";
export { UnreadCounter, Pill, Unread } from "./components/ActivityMarker";

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
  EditInPlace,
  SettingsToggleInput,
  SettingsToggleControl,
} from "./components/Form";
export * as Form from "./components/Form";

/**
 * Export utility functions
 */

export { useIdColorHash } from "./components/Avatar/useIdColorHash";
export { getInitialLetter } from "./utils/string";

import "./styles/global.css";
