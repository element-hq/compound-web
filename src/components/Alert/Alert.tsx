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
import { Text } from "../Typography/Text";
import { IconButton } from "../Button";

type AlertProps = {
  /**
   * The type of alert
   */
  type: "success" | "critical" | "info";
  /**
   * The headline of the alert.
   */
  title: string;
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * Actions that will be displayed to the right of the content
   * Wraps and stacks actions under content when alert's size is <=600px
   * eg
   * ```
   * <Alert
   *  title='Title'
   *  actions={<Button onClick={doSomething}>Yes</Button>}
   * />
   * ```
   */
  actions?: React.ReactNode;
  /**
   * Event callback when dismissing the alert. Determines the display of the
   * "close" button at the top right of the alert.
   * @param e the event parameters
   */
  onClose?: (e: React.MouseEvent) => void;
};

/**
 * An alert component component that is dismissable when passing an `onClose`
 * property.
 */
export const Alert: React.FC<PropsWithChildren<AlertProps>> = ({
  type,
  title,
  children,
  className,
  actions,
  onClose,
  ...props
}: PropsWithChildren<AlertProps>) => {
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
    [type],
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
        <div className={styles["text-content"]}>
          <Text size="md" weight="semibold">
            {title}
          </Text>
          <Text size="sm" weight="regular">
            {children}
          </Text>
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {/* TODO: Setup an i18n function for the aria label below */}
      {onClose && (
        <IconButton
          onClick={onClose}
          aria-label="Close"
          role="button"
          className={styles.close}
        >
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
};
