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

import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import styles from "./ActionControl.module.css";

import { Control, Field, Root } from "../Form";

type ActionControlProps = {
  className?: string;
  Icon: unknown; // Don't know how to type this?
  onActionClick: (e: React.MouseEvent) => void;
  actionLabel: string;
  disabled?: boolean;
} & React.ComponentProps<typeof Control>;

export const ActionControl = ({
  children,
  Icon,
  className,
  actionLabel,
  onActionClick,
  ...props
}: PropsWithChildren<ActionControlProps>) => {
  // TODO: Update the class name to something related to the component name
  const classes = classnames(styles.actioncontrol, className);
  // TODO: I don't know how to type this properly
  const IconComp = Icon as typeof React.Component;
  return (
    <div className={classes}>
      <Control {...props} className={styles.input}>
        {children}
      </Control>
      <IconComp
        onClick={onActionClick}
        className={styles.icon}
        aria-label={actionLabel}
      />
    </div>
  );
};

export const StandaloneActionControl = (
  props: PropsWithChildren<ActionControlProps>
): JSX.Element => {
  return (
    <Root>
      <Field name="action">
        <ActionControl {...props} />
      </Field>
    </Root>
  );
};
