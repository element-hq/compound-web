# Component Design Guidelines

This document outlines the design guidelines and best practices for developing components in the Compound Web project. Following these guidelines ensures consistency, maintainability, and alignment with the design vision across all components.

---

## Table of Contents

1. [Overview](#overview)
2. [Component Structure](#component-structure)
3. [Design Principles](#design-principles)
4. [Spacing and Layout](#spacing-and-layout)
5. [Color and Typography](#color-and-typography)
6. [Accessibility](#accessibility)
7. [Component API Design](#component-api-design)
8. [Testing Requirements](#testing-requirements)
9. [Examples](#examples)

---

## Overview

Compound Web is a React implementation of Element's design system. All components should:

- Follow the design tokens defined in `@vector-im/compound-design-tokens`
- Be fully accessible (WCAG 2.1 AA compliant)
- Include comprehensive unit and visual tests
- Support theming (light, dark, and high-contrast variants)
- Be documented with Storybook stories

---

## Component Structure

Each component should follow this directory structure:

```
ComponentName/
├── ComponentName.tsx           # Main component implementation
├── ComponentName.module.css    # Component-specific styles
├── ComponentName.stories.tsx   # Storybook stories
├── ComponentName.test.tsx      # Unit tests
├── index.ts                    # Public exports
├── __snapshots__/              # Visual test snapshots (auto-generated)
└── SubComponent/               # Optional sub-components
    └── ...
```

### File Naming Conventions

- Use PascalCase for component files: `Button.tsx`, `IconButton.tsx`
- Use kebab-case for utility files: `use-tooltip.ts`
- CSS modules should match component names: `Button.module.css`

---

## Design Principles

### 1. **Consistency**

Components should maintain visual and behavioral consistency across the design system:

- Use design tokens for all styling values (colors, spacing, typography)
- Follow established patterns from existing components
- Maintain consistent prop naming conventions

### 2. **Composability**

Design components to be composable and reusable:

```tsx
// Good: Composable components
<Button Icon={UserIcon}>Profile</Button>

// Avoid: Monolithic components with too many variants
<Button type="profile-with-icon" />
```

### 3. **Flexibility**

Components should be flexible enough to handle various use cases:

- Support polymorphic components using the `as` prop when appropriate
- Allow className overrides for edge cases
- Provide sensible defaults while allowing customization

### 4. **Performance**

- Use `React.memo()` for components that render frequently
- Avoid unnecessary re-renders
- Lazy-load heavy dependencies when possible

---

## Spacing and Layout

### Spacing Scale

Use the design token spacing scale for all margins and padding:

- `--cpd-space-0x`: 0px
- `--cpd-space-1x`: 4px
- `--cpd-space-2x`: 8px
- `--cpd-space-3x`: 12px
- `--cpd-space-4x`: 16px
- `--cpd-space-5x`: 20px
- `--cpd-space-6x`: 24px
- `--cpd-space-8x`: 32px
- `--cpd-space-10x`: 40px
- `--cpd-space-12x`: 48px

### Layout Guidelines

```css
/* Good: Using design tokens */
.component {
  padding: var(--cpd-space-4x);
  margin-block-end: var(--cpd-space-3x);
}

/* Avoid: Hard-coded values */
.component {
  padding: 16px;
  margin-bottom: 12px;
}
```

- Use logical properties (`margin-block`, `padding-inline`) for better RTL support
- Maintain consistent spacing between related elements
- Use gap properties for flex/grid layouts

---

## Color and Typography

### Colors

Always use design tokens for colors:

```css
.component {
  color: var(--cpd-color-text-primary);
  background-color: var(--cpd-color-bg-canvas-default);
  border-color: var(--cpd-color-border-interactive-primary);
}
```

Common color tokens:
- Text: `--cpd-color-text-primary`, `--cpd-color-text-secondary`
- Background: `--cpd-color-bg-canvas-default`, `--cpd-color-bg-subtle-primary`
- Interactive: `--cpd-color-border-interactive-primary`, `--cpd-color-bg-action-primary-rest`

### Typography

Use the Typography component or design token font styles:

```tsx
import { Text, Heading } from "@vector-im/compound-web";

<Heading size="lg">Title</Heading>
<Text size="md">Body text</Text>
```

Font tokens:
- `--cpd-font-family-sans`: Inter (default)
- `--cpd-font-family-mono`: Inconsolata
- Font sizes: `--cpd-font-size-body-sm`, `--cpd-font-size-body-md`, `--cpd-font-size-body-lg`

---

## Accessibility

All components must meet WCAG 2.1 AA standards.

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Implement proper focus management
- Use `tabIndex={0}` for focusable elements, `-1` for programmatically focusable elements

```tsx
<button
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  tabIndex={0}
  aria-label="Close dialog"
>
  <CloseIcon />
</button>
```

### ARIA Attributes

- Use semantic HTML elements when possible (`<button>`, `<nav>`, `<main>`)
- Add ARIA labels for icon-only buttons
- Implement ARIA states (`aria-expanded`, `aria-selected`, `aria-disabled`)
- Use `aria-hidden="true"` for decorative icons

```tsx
<Button Icon={SearchIcon} aria-label="Search">
  <SearchIcon aria-hidden="true" />
</Button>
```

### Color Contrast

- Ensure text has sufficient contrast (4.5:1 for normal text, 3:1 for large text)
- Test components in high-contrast themes
- Don't rely solely on color to convey information

### Screen Readers

- Provide meaningful labels and descriptions
- Use `aria-live` regions for dynamic content
- Test with screen readers (NVDA, JAWS, VoiceOver)

---

## Component API Design

### Props Naming

Follow these conventions for prop names:

- Boolean props: Use `is*`, `has*`, or `should*` prefixes
  ```tsx
  isDisabled, hasIcon, shouldAutoFocus
  ```
- Event handlers: Use `on*` prefix
  ```tsx
  onClick, onChange, onSubmit
  ```
- Size variants: Use `size` prop with t-shirt sizes
  ```tsx
  size?: "sm" | "md" | "lg"
  ```
- Visual variants: Use `kind` or `variant` prop
  ```tsx
  kind?: "primary" | "secondary" | "tertiary"
  ```

### TypeScript Types

- Export all component prop types
- Use discriminated unions for complex prop relationships
- Provide JSDoc comments for props

```tsx
/**
 * A button component that can be transformed into a link.
 */
export interface ButtonProps {
  /**
   * The type of button.
   */
  kind?: "primary" | "secondary" | "tertiary";
  
  /**
   * The size of the button.
   * @default "lg"
   */
  size?: "sm" | "lg";
  
  /**
   * Whether this button triggers a destructive action.
   * @default false
   */
  destructive?: boolean;
}
```

### Polymorphic Components

For components that can render as different elements, use the `as` prop pattern:

```tsx
interface ButtonComponent {
  <C extends React.ElementType>(
    props: { as: C } & ButtonPropsFor<C>,
  ): React.ReactElement;
  (props: ButtonPropsFor<"button">): React.ReactElement;
}

export const Button = forwardRef(function Button<
  C extends React.ElementType = "button",
>({ as, ...props }, ref) {
  // Implementation
}) as ButtonComponent;
```

### Ref Forwarding

Always forward refs for components that render DOM elements:

```tsx
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    return <button ref={ref} {...props} />;
  }
);
```

---

## Testing Requirements

### Unit Tests

Every component must have comprehensive unit tests:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is keyboard accessible", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByRole("button").focus();
    await userEvent.keyboard("{Enter}");
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Visual Tests

Create Storybook stories for all component variants:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    kind: "primary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button with Icon",
    Icon: UserIcon,
  },
};
```

### Test Coverage

- Aim for >80% code coverage
- Test all prop combinations
- Test keyboard interactions
- Test accessibility features
- Test error states

---

## Examples

### Compliant Component Example

```tsx
/*
Copyright 2024 New Vector Ltd.
SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
*/

import classNames from "classnames";
import React, { forwardRef, type ComponentType } from "react";
import styles from "./Alert.module.css";

export interface AlertProps {
  /**
   * The type of alert.
   * @default "info"
   */
  type?: "info" | "success" | "warning" | "error";
  
  /**
   * The title of the alert.
   */
  title: string;
  
  /**
   * Optional icon to display.
   */
  Icon?: ComponentType<React.SVGAttributes<SVGElement>>;
  
  /**
   * The alert content.
   */
  children: React.ReactNode;
}

/**
 * An alert component for displaying important messages.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert({ type = "info", title, Icon, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        role="alert"
        className={classNames(styles.alert, styles[type])}
        {...props}
      >
        {Icon && (
          <Icon
            className={styles.icon}
            width={20}
            height={20}
            aria-hidden="true"
          />
        )}
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    );
  }
);
```

### Non-Compliant Example (Avoid)

```tsx
// ❌ Avoid: Hard-coded values, no accessibility, poor typing
export const BadAlert = ({ type, text }) => {
  return (
    <div style={{ padding: "16px", backgroundColor: "#f0f0f0" }}>
      <p style={{ fontSize: "14px" }}>{text}</p>
    </div>
  );
};
```

---

## Additional Resources

- [Compound Design System](https://compound.element.io/)
- [Design Tokens Repository](https://github.com/vector-im/compound-design-tokens)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## Contributing

When contributing new components:

1. Review this guide thoroughly
2. Check existing components for patterns
3. Create a draft PR early for feedback
4. Ensure all tests pass
5. Update documentation as needed

For questions or clarifications, please open an issue or reach out to the maintainers.
