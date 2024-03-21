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
  createContext,
  Dispatch,
  isValidElement,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from "react";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  FloatingFocusManager,
  offset,
  Placement,
  shift,
  useFloating,
  useInteractions,
  useMergeRefs,
  useRole,
  useId,
  FloatingArrow,
  arrow,
} from "@floating-ui/react";
import { Text } from "../Typography/Text";
import { Button } from "../Button";
import styles from "./ReleaseAnnouncement.module.css";

interface ReleaseAnnouncementProps {
  header: string;
  description: string;
  closeLabel: string;
  placement?: Placement;
}

export function ReleaseAnnouncement({
  children,
  placement = "bottom",
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

interface UseReleaseAnnouncementProps {
  header: string;
  description: string;
  closeLabel: string;
  placement: Placement;
  onClose?: () => void;
}

function useReleaseAnnouncement({
  header,
  description,
  closeLabel,
  placement,
  onClose,
}: UseReleaseAnnouncementProps) {
  const [open, setOpen] = useState(true);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();
  const arrowRef = useRef(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      // arrow height 12px + 4px padding
      offset(16),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5,
      }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const context = data.context;

  const role = useRole(context);
  const interactions = useInteractions([role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      header,
      description,
      closeLabel,
      onClose,
      arrowRef,
    }),
    [
      open,
      setOpen,
      interactions,
      data,
      labelId,
      descriptionId,
      header,
      description,
      closeLabel,
      onClose,
      arrowRef,
    ],
  );
}

type ContextType =
  | (ReturnType<typeof useReleaseAnnouncement> & {
      setLabelId: Dispatch<SetStateAction<string | undefined>>;
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
    })
  | null;

const ReleaseAnnouncementContext = createContext<ContextType>(null);

const useReleaseAnnouncementContext = () => {
  const context = useContext(ReleaseAnnouncementContext);

  if (context == null) {
    throw new Error(
      "ReleaseAnnouncement components must be wrapped in <ReleaseAnnouncement />",
    );
  }

  return context;
};

interface ReleaseAnnouncementAnchorProps {}

function ReleaseAnnouncementAnchor({
  children,
}: PropsWithChildren<ReleaseAnnouncementAnchorProps>) {
  const context = useReleaseAnnouncementContext();
  const childrenRef = (children as any).ref;
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

interface ReleaseAnnouncementContainerProps {}

function ReleaseAnnouncementContainer({
  children,
}: PropsWithChildren<ReleaseAnnouncementContainerProps>) {
  const {
    context: floatingContext,
    arrowRef,
    ...context
  } = useReleaseAnnouncementContext();

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <div
          ref={context.refs.setFloating}
          style={context.floatingStyles}
          aria-labelledby={context.labelId}
          aria-describedby={context.descriptionId}
          {...context.getFloatingProps()}
          className={styles.content}
        >
          <FloatingArrow
            ref={arrowRef}
            context={floatingContext}
            width={20}
            height={12}
          />
          {children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}

function ReleaseAnnouncementContent() {
  const {
    setLabelId,
    setDescriptionId,
    header,
    description,
    closeLabel,
    onClose,
    setOpen,
  } = useReleaseAnnouncementContext();
  const labelId = useId();
  const descriptionId = useId();

  // Only sets `aria-describedby` and `aria-labelledby` on the ReleaseAnnouncementContainer component
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(labelId);
    setDescriptionId(descriptionId);
    return () => {
      setLabelId(undefined);
      setDescriptionId(undefined);
    };
  }, [labelId, descriptionId, setLabelId, setDescriptionId]);

  return (
    <>
      <Text
        as="h3"
        id={labelId}
        className={styles.heading}
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
        onClick={() => {
          setOpen(false);
          onClose?.();
        }}
      >
        {closeLabel}
      </Button>
    </>
  );
}
