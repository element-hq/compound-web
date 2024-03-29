/*
Copyright 2024 New Vector Ltd

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

import React, {
  cloneElement,
  isValidElement,
  PropsWithChildren,
  RefObject,
} from "react";
import {
  FloatingPortal,
  FloatingFocusManager,
  Placement,
  useMergeRefs,
  FloatingArrow,
} from "@floating-ui/react";
import { Text } from "../Typography/Text";
import { Button } from "../Button";
import styles from "./ReleaseAnnouncement.module.css";
import {
  useReleaseAnnouncementContext,
  ReleaseAnnouncementContext,
} from "./ReleaseAnnouncementContext";
import { useReleaseAnnouncement } from "./useReleaseAnnouncement";

type UseReleaseAnnouncementParam = Parameters<typeof useReleaseAnnouncement>[0];

interface ReleaseAnnouncementProps
  extends Omit<UseReleaseAnnouncementParam, "placement"> {
  /**
   * The placement of the component
   * @default "right"
   */
  placement?: Placement;
}

/**
 * The ReleaseAnnouncement component purpose is to inform the user of a new available feature.
 * This component is a floating component that will appear next to an anchor.
 * @param children - Act as an anchor, the component will be displayed alongside of it.
 * @param placement - The placement of the component
 */
export function ReleaseAnnouncement({
  /**
   * The children anchor should be a single valid React element.
   */
  children,
  placement = "right",
  ...props
}: PropsWithChildren<ReleaseAnnouncementProps>) {
  const context = useReleaseAnnouncement({ placement, ...props });

  return (
    <ReleaseAnnouncementContext.Provider value={context}>
      <ReleaseAnnouncementAnchor>{children}</ReleaseAnnouncementAnchor>
      <ReleaseAnnouncementContainer>
        <ReleaseAnnouncementContent />
      </ReleaseAnnouncementContainer>
    </ReleaseAnnouncementContext.Provider>
  );
}

/**
 * The anchor for the ReleaseAnnouncement components.
 * The Release Announcement will appear next to this element.
 * @param children - should be a single valid React element
 * @constructor
 */
function ReleaseAnnouncementAnchor({ children }: Readonly<PropsWithChildren>) {
  const context = useReleaseAnnouncementContext();

  // The children can have a ref and we don't want to discard it
  // Doing a dirty cast to get the optional ref
  const childrenRef = (children as unknown as { ref?: RefObject<HTMLElement> })
    ?.ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  if (!isValidElement(children)) {
    throw new Error(
      "ReleaseAnnouncement anchor must be a single valid React element",
    );
  }

  return cloneElement(
    children,
    context.getReferenceProps({
      ref,
      ...children.props,
      "data-state": context.open ? "open" : "closed",
    }),
  );
}

/**
 * The container for the ReleaseAnnouncement components.
 * Manage focus and positioning of the children.
 * @param children
 */
function ReleaseAnnouncementContainer({ children }: PropsWithChildren) {
  const {
    context: floatingContext,
    arrowRef,
    ...rest
  } = useReleaseAnnouncementContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext} modal={false}>
        <div
          ref={rest.refs.setFloating}
          style={rest.floatingStyles}
          aria-labelledby={rest.labelId}
          aria-describedby={rest.descriptionId}
          {...rest.getFloatingProps()}
          className={styles.content}
        >
          <FloatingArrow
            ref={arrowRef}
            context={floatingContext}
            // design absolute value
            width={20}
            height={12}
            className={styles.arrow}
          />
          {children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}

/**
 * The content of the ReleaseAnnouncement component.
 * ---------------------------------------------------------------
 * - The header in a bold text                  -------------    -
 * - A description in a regular text           | Close button |  -
 * - Description can be on multiple lines       -------------    -
 * ---------------------------------------------------------------
 */
function ReleaseAnnouncementContent() {
  const { labelId, descriptionId, header, description, closeLabel, onClick } =
    useReleaseAnnouncementContext();

  return (
    <>
      <Text
        as="h3"
        id={labelId}
        className={styles.header}
        size="lg"
        weight="semibold"
      >
        {header}
      </Text>
      <Text
        as="span"
        id={descriptionId}
        className={styles.description}
        size="sm"
        weight="regular"
      >
        {description}
      </Text>
      <Button
        size="sm"
        kind="secondary"
        className={styles.button}
        onClick={onClick}
      >
        {closeLabel}
      </Button>
    </>
  );
}
