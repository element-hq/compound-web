/*
Copyright 2023  New Vector Ltd

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

import classNames from "classnames";
import React, { PropsWithChildren, useCallback } from "react";

import CheckCircleIcon from "@vector-im/compound-design-tokens/icons/check-circle.svg";
import ErrorIcon from "@vector-im/compound-design-tokens/icons/error.svg";
import InfoIcon from "@vector-im/compound-design-tokens/icons/info.svg";
import CloseIcon from "@vector-im/compound-design-tokens/icons/close.svg";

import styles from "./Alert.module.css";

type AlertProps = {
  type: "success" | "critical" | "info";
  title: string;
  className?: string;
  onClose?: (e: React.MouseEvent) => void;
};

export const Alert = ({
  type,
  title,
  children,
  className,
  onClose,
  ...props
}: PropsWithChildren<AlertProps>): JSX.Element => {
  const classes = classNames(styles.alert, className);

  const renderIcon = useCallback(
    (props: React.ComponentProps<typeof ErrorIcon>) => {
      switch (type) {
        case "critical":
          return <ErrorIcon {...props} />;
        case "info":
          return <InfoIcon {...props} />;
        case "success":
          return <CheckCircleIcon {...props} />;
      }
    },
    [type]
  );

  return (
    <div {...props} className={classes} data-type={type}>
      {renderIcon({
        width: 24,
        height: 24,
        className: styles.icon,
        "aria-hidden": true,
      })}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.caption}>{children}</p>
      </div>
      {/* TODO: Setup an i18n function for the aria label below */}
      {onClose && (
        <CloseIcon
          width={16}
          height={16}
          onClick={onClose}
          aria-label="Close"
          role="button"
          className={styles.close}
        />
      )}
    </div>
  );
};
