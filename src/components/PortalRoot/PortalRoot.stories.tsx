/*
Copyright 2026 Element Creations Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { type FC, type ReactNode, useEffect, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react-vite";
import UserProfileIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-profile";
import SettingsIcon from "@vector-im/compound-design-tokens/assets/web/icons/settings";

import { PortalRoot } from "./PortalRoot";
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

/** The class of the portal root's box, to scope the outline styles to it. */
const rootClass = "portal-root-story-root";

/** The outline marking the portal root and anything portalled into it. */
const rootOutline = "2px dashed var(--cpd-color-purple-900)";

/**
 * This component renders the children inside a `PortalRoot` if `enabled`. The
 * root is kept in state so that `PortalRoot` sees `null` on the first render
 * and the real element afterwards, which is how a real host would do it.
 *
 * The root and anything portalled into it get a purple dashed outline, so
 * floating parts that land in the root stand out from those that land in
 * `document.body`, even though both are positioned next to their trigger.
 */
const Host: FC<HostProps> = ({ enabled, selector, children }) => {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
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
      {/* Portalled elements can't be styled inline, so match them by
      selector. Important, as Radix sets an inline `outline: none` on menus. */}
      <style>{`.${rootClass} ${selector} { outline: ${rootOutline} !important; outline-offset: 2px; }`}</style>
      {enabled ? <PortalRoot root={root}>{content}</PortalRoot> : content}
      <div
        ref={setRoot}
        className={rootClass}
        style={{ ...boxStyle, border: rootOutline, minHeight: 32 }}
      >
        <span>
          Portal root: anything portalled in here gets the same purple dashed
          outline
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

\`null\` means the root is not available yet, so state that is only set once
the element has mounted can be passed straight in: floating parts follow it
once it is. Nested providers are fine: the innermost one wins.

### Caveats

- \`root\` must be in the same document as the triggers, or positioning will
  be off. Positioning itself is unaffected by the choice of root: floating
  parts are placed relative to their trigger either way. That is why
  anything portalled into the portal root in the stories below gets a purple
  dashed outline.
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
