# Contributing to Compound Web

Thank you for your interest in contributing to Compound Web! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Guidelines](#component-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

This project follows Element's code of conduct. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js (version specified in `.node-version`)
- Yarn package manager
- Git

### Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/compound-web.git
cd compound-web
```

2. **Install dependencies**

```bash
yarn install
```

3. **Start the development server**

```bash
yarn dev
```

This will start Storybook at `http://localhost:6006`

## Development Workflow

### Creating a New Component

1. **Generate component scaffold**

```bash
yarn gen:component ComponentName
```

This creates the basic structure with all necessary files.

2. **Read the guidelines**

Before implementing, review the [Component Design Guidelines](./docs/COMPONENT_DESIGN_GUIDELINES.md) to ensure your component follows established patterns.

3. **Implement the component**

- Write the TypeScript implementation
- Add CSS using design tokens
- Create Storybook stories
- Write unit tests
- Ensure accessibility compliance

4. **Test your component**

```bash
# Run unit tests
yarn test

# Run linting
yarn lint

# Run visual tests (via Docker)
yarn e2e:docker
```

### Modifying Existing Components

1. Check if there's an existing issue or create one
2. Make your changes following the design guidelines
3. Update tests and stories as needed
4. Ensure all tests pass
5. Update documentation if the API changes

## Component Guidelines

All components must follow the [Component Design Guidelines](./docs/COMPONENT_DESIGN_GUIDELINES.md). Key requirements:

### Structure

```
ComponentName/
├── ComponentName.tsx           # Implementation
├── ComponentName.module.css    # Styles
├── ComponentName.stories.tsx   # Storybook stories
├── ComponentName.test.tsx      # Unit tests
└── index.ts                    # Exports
```

### Design Principles

- **Use Design Tokens**: All colors, spacing, and typography must use design tokens
- **Accessibility First**: Components must be WCAG 2.1 AA compliant
- **TypeScript**: Full type safety with exported prop types
- **Testing**: Comprehensive unit and visual tests
- **Documentation**: Clear JSDoc comments and Storybook stories

### Code Style

```tsx
// ✅ Good: Using design tokens and proper TypeScript
export interface ButtonProps {
  /**
   * The type of button.
   * @default "primary"
   */
  kind?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ kind = "primary", children, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={styles.button}
        data-kind={kind}
        {...props}
      >
        {children}
      </button>
    );
  }
);
```

```tsx
// ❌ Avoid: Hard-coded values, poor typing
export const Button = ({ type, text }) => {
  return (
    <button style={{ padding: "16px", color: "#000" }}>
      {text}
    </button>
  );
};
```

## Pull Request Process

### Before Submitting

1. **Ensure all tests pass**

```bash
yarn test
yarn lint
yarn e2e:docker
```

2. **Update documentation**
   - Add/update JSDoc comments
   - Update Storybook stories
   - Update relevant documentation files

3. **Check your changes**
   - Review the diff
   - Ensure no unrelated changes
   - Verify design token usage
   - Test accessibility

### PR Guidelines

1. **Title**: Use a clear, descriptive title
   - `feat: Add Alert component`
   - `fix: Button focus state in dark theme`
   - `docs: Update component guidelines`

2. **Description**: Include:
   - What changes were made and why
   - Link to related issues
   - Screenshots/videos for visual changes
   - Breaking changes (if any)

3. **Checklist**:
   - [ ] Follows [Component Design Guidelines](./docs/COMPONENT_DESIGN_GUIDELINES.md)
   - [ ] Includes unit tests
   - [ ] Includes Storybook stories
   - [ ] Passes all tests and linting
   - [ ] Accessibility tested
   - [ ] Documentation updated
   - [ ] No breaking changes (or documented)

### Review Process

- Maintainers will review your PR
- Address feedback and requested changes
- Once approved, a maintainer will merge

## Testing

### Unit Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage
yarn test --coverage
```

### Visual Tests

```bash
# Run visual tests via Docker (recommended)
yarn e2e:docker

# Update visual test snapshots
yarn e2e:docker -u
```

### Accessibility Testing

- Use Storybook's a11y addon
- Test with keyboard navigation
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify color contrast

## Documentation

### Component Documentation

Each component should have:

1. **JSDoc comments** on props and component
2. **Storybook stories** showing all variants
3. **README** (if complex component)

### Updating Guidelines

If you're improving the guidelines:

1. Edit files in the `docs/` directory
2. Keep examples clear and practical
3. Update the table of contents if needed
4. Test that all links work

## Questions?

- **Issues**: Open an issue on GitHub
- **Discussions**: Use GitHub Discussions
- **Documentation**: Check the [docs](./docs/) folder

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (see LICENSE files).

---

Thank you for contributing to Compound Web! 🎉
