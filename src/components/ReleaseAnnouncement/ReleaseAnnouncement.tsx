/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
  cloneElement,
  isValidElement,
  type JSX,
  type PropsWithChildren,
  type Ref,
} from "react";
import {
  FloatingPortal,
  FloatingFocusManager,
  type Placement,
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
  extends Omit<UseReleaseAnnouncementParam, "placement" | "displayArrow"> {
  /**
   * The placement of the component
   * @default "right"
   */
  placement?: Placement;
  /**
   * Whether to display an arrow.
   * @default true
   */
  displayArrow?: boolean;
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
  displayArrow = true,
  ...props
}: PropsWithChildren<ReleaseAnnouncementProps>): JSX.Element {
  const context = useReleaseAnnouncement({ placement, displayArrow, ...props });

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
function ReleaseAnnouncementAnchor({
  children,
}: Readonly<PropsWithChildren>): JSX.Element {
  const context = useReleaseAnnouncementContext();

  // The children can have a ref and we don't want to discard it
  // Doing a dirty cast to get the optional ref
  const childrenRef = (children as unknown as { ref?: Ref<HTMLElement> })?.ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef]);

  if (!isValidElement(children)) {
    throw new Error(
      "ReleaseAnnouncement anchor must be a single valid React element",
    );
  }

  const referenceProps = context.getReferenceProps({
    ref,
    // If the ReleaseAnnouncement is open, we need manually aria-describedby.
    // The RA has the dialog role and it's not adding automatically the aria-describedby.
    ...(context.open && {
      "aria-describedby": context.getFloatingProps().id as string,
    }),
  });

  // getReferenceProps includes aria-expanded (being true when the popup is shown)
  // but axe only allows this on certain elements and we use release anncounements on
  // all sorts of elements. Semantically, I don't think it makes sense because the point
  // of aria-expanded is a hint to the user that there is something that can be expanded.
  // The user can't cause a release announcement to be shown, it just appears when it thinks
  // it's time, so I think adding it here is misleading.
  delete referenceProps["aria-expanded"];

  return cloneElement(children, referenceProps);
}

/**
 * The container for the ReleaseAnnouncement components.
 * Manage focus and positioning of the children.
 * @param children
 */
function ReleaseAnnouncementContainer({
  children,
}: PropsWithChildren): JSX.Element | null {
  const {
    context: floatingContext,
    arrowRef,
    displayArrow,
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
          {displayArrow && (
            <FloatingArrow
              ref={arrowRef}
              context={floatingContext}
              // design absolute value
              width={20}
              height={12}
              className={styles.arrow}
            />
          )}
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
function ReleaseAnnouncementContent(): JSX.Element {
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
