/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type FC, type ReactNode, useEffect, useState } from "react";
import {
  autoUpdate,
  FloatingPortal,
  offset,
  useFloating,
} from "@floating-ui/react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import SettingsIcon from "@vector-im/compound-design-tokens/assets/web/icons/settings";

import { PortalRoot, usePortalRoot } from "./PortalRoot";
import { Menu } from "../Menu/Menu";
import { MenuItem } from "../Menu/MenuItem";
import { Tooltip } from "../Tooltip/Tooltip";
import { TooltipProvider } from "../Tooltip/TooltipProvider";
import { Button, IconButton } from "../Button";

const boxStyle: React.CSSProperties = {
  border: "1px dashed var(--cpd-color-border-interactive-secondary)",
  borderRadius: "var(--cpd-space-2x)",
  padding: "var(--cpd-space-4x)",
  display: "flex",
  flexDirection: "column",
  gap: "var(--cpd-space-3x)",
  font: "var(--cpd-font-body-sm-regular)",
  color: "var(--cpd-color-text-secondary)",
};

/**
 * Reports where an element ended up in the DOM, so that the stories can show
 * the difference a `PortalRoot` makes even though the floating parts are
 * positioned next to their trigger either way.
 */
const Landed: FC<{ root: HTMLElement | null; selector: string }> = ({
  root,
  selector,
}) => {
  const [where, setWhere] = useState("…");
  useEffect(() => {
    // Portals mount their contents a commit later than their trigger, so
    // watch the document rather than looking only once
    const check = (): void => {
      // Look in this host's own root first: on the docs page every story
      // shares one document, so other stories' floating parts are around too
      if (root?.querySelector(selector)) setWhere("the portal root");
      else if (document.body.querySelector(selector)) setWhere("document.body");
      else setWhere("not rendered");
    };
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [root, selector]);
  return (
    <span>
      The floating part was rendered in <strong>{where}</strong>.
    </span>
  );
};

interface HostProps {
  /** Whether to wrap the host's content in a `PortalRoot`. */
  enabled: boolean;
  /** The CSS selector of the floating part to look for. */
  selector: string;
  children: ReactNode;
}

/**
 * A host with a portal root of its own, next to the content it hosts. The
 * root is kept in state so that `PortalRoot` sees `null` on the first render
 * and the real element afterwards, which is how a real host would do it.
 */
const pageIsDark = (): boolean =>
  document.documentElement.classList.contains("cpd-theme-dark") ||
  document.documentElement.classList.contains("cpd-theme-dark-hc");

/**
 * The theme class opposite to the page's, so that floating parts portalled
 * into the portal root stand out from those portalled into `document.body`.
 * Storybook's theme switcher puts its class on the `html` element, and may do
 * so after the story's first render, so this follows it as it changes.
 */
function useContrastingTheme(): string {
  const [dark, setDark] = useState(pageIsDark);
  useEffect(() => {
    const update = (): void => setDark(pageIsDark());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return dark ? "cpd-theme-light" : "cpd-theme-dark";
}

const Host: FC<HostProps> = ({ enabled, selector, children }) => {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const theme = useContrastingTheme();
  const content = (
    <div style={boxStyle}>
      <span>Host</span>
      <div>{children}</div>
      <Landed root={root} selector={selector} />
    </div>
  );
  return (
    // Room on both sides, as the menu flips upwards when it first measures
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      {enabled ? <PortalRoot root={root}>{content}</PortalRoot> : content}
      <div
        ref={setRoot}
        className={theme}
        style={{
          ...boxStyle,
          minHeight: 32,
          // Resolved inside the themed box, so it shows the contrasting theme
          background: "var(--cpd-color-bg-canvas-default)",
        }}
      >
        <span>
          Portal root: uses the opposite theme to the page, so anything
          portalled in here does too
        </span>
      </div>
    </div>
  );
};

const OpenMenu: FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <Menu
      open={open}
      onOpenChange={setOpen}
      title="Settings"
      trigger={<Button Icon={SettingsIcon}>Open menu</Button>}
      align="start"
    >
      <MenuItem Icon={UserProfileIcon} label="Profile" onSelect={() => {}} />
      <MenuItem Icon={SettingsIcon} label="Preferences" onSelect={() => {}} />
    </Menu>
  );
};

const meta = {
  title: "PortalRoot",
  component: PortalRoot,
  tags: ["autodocs", "axe-exclude"],
  // The stories render their own hosts; these only satisfy the props table.
  args: { root: null, children: null },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component: `
Compound's menus, context menus, tooltips and release announcements are not
rendered in place. They are portalled out of their trigger's subtree so that
they can float above the rest of the page, and by default they land in
\`document.body\`.

That is the wrong place when the content does not live in the main document:
inside a shadow root, or in another window such as a Document
Picture-in-Picture window. Wrap such content in a \`PortalRoot\` to define a
custom \`root\` (as a \`prop\`) to portal into.

\`\`\`tsx
const [root, setRoot] = useState<HTMLElement | null>(null);

<PortalRoot root={root}>
  <Menu … />
</PortalRoot>
\`\`\`

\`null\` is treated as no \`PortalRoot\` at all, so a ref or state that is
not populated yet can be passed straight in. Nested providers are fine: the
innermost one wins.

### \`usePortalRoot\`

Returns the element set by the nearest enclosing \`PortalRoot\`, or
\`undefined\` where there is none. Use it from your own portalling components
so that they follow Compound's:

\`\`\`tsx
const root = usePortalRoot();
// Keyed because FloatingPortal picks its container once, on mount, and the
// root may arrive a render later than the content it hosts
return (
  <FloatingPortal key={root ? "root" : "body"} root={root}>
    …
  </FloatingPortal>
);
// or: createPortal(…, root ?? document.body)
\`\`\`

### Caveats

- \`root\` must be in the same document as the triggers, or positioning will
  be off. Positioning itself is unaffected by the choice of root: floating
  parts are placed relative to their trigger either way. That is why the
  portal root in the stories below uses the opposite theme to the page.
- Styles are not carried across. A root inside a shadow root needs Compound's
  stylesheet as well.
`,
      },
    },
  },
} satisfies Meta<typeof PortalRoot>;
export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A menu whose host provides a `PortalRoot`. The menu opens next to its
 * trigger as usual, but is a descendant of the portal root rather than of
 * `document.body`.
 */
export const WithCustomPortalRoot: Story = {
  render: () => (
    <Host enabled selector="[role='menu']">
      <OpenMenu />
    </Host>
  ),
};

/**
 * The same menu without a `PortalRoot`, for comparison: it goes into
 * `document.body`.
 */
export const WithoutPortalRoot: Story = {
  render: () => (
    <Host enabled={false} selector="[role='menu']">
      <OpenMenu />
    </Host>
  ),
};

/**
 * Tooltips follow the `PortalRoot` too. The `TooltipProvider` can sit on
 * either side of it.
 *
 * Note: tooltips backgrounds are `black` in `light`-theme and `lightGray` in `dark`-theme.
 */
export const WithTooltip: Story = {
  render: () => (
    <Host enabled selector="[role='tooltip']">
      <TooltipProvider>
        <Tooltip description="Open the settings" open placement="right">
          <IconButton aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </TooltipProvider>
    </Host>
  ),
};

/**
 * A popover of your own, built on floating-ui like Compound's tooltips. It
 * calls `usePortalRoot` so that it portals into the same place as they do.
 *
 *  Note: The custom-popover for this example uses: `bg-action-primary-rest` as the background.
 *  It will be `black` in `light`-theme and `lightGray` in `dark`-theme
 */
const CustomPopover: FC = () => {
  const root = usePortalRoot();
  const { refs, floatingStyles } = useFloating({
    open: true,
    placement: "right",
    middleware: [offset(8)],
    whileElementsMounted: autoUpdate,
  });
  return (
    <>
      <Button ref={refs.setReference} kind="secondary" size="md">
        Custom popover trigger
      </Button>
      <FloatingPortal key={root ? "root" : "body"} root={root}>
        <div
          ref={refs.setFloating}
          data-testid="custom-popover"
          style={{
            ...floatingStyles,
            padding: "var(--cpd-space-2x) var(--cpd-space-3x)",
            borderRadius: "var(--cpd-space-2x)",
            background: "var(--cpd-color-bg-action-primary-rest)",
            color: "var(--cpd-color-text-on-solid-primary)",
            font: "var(--cpd-font-body-sm-medium)",
          }}
        >
          My own popover
        </div>
      </FloatingPortal>
    </>
  );
};

/**
 * A popover of your own that calls `usePortalRoot` lands in the same place as
 * Compound's floating parts. It is positioned next to its trigger in the host,
 * but sits in the portal root in the DOM.
 */
export const WithUsePortalRoot: Story = {
  render: () => (
    <Host enabled selector="[data-testid='custom-popover']">
      <CustomPopover />
    </Host>
  ),
};
