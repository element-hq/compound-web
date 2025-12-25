# Documentation Overview

This document provides a quick overview of the Compound Web documentation structure and how to navigate it.

## 📁 Documentation Structure

```
compound-web/
├── README.md                           # Main project README
├── CONTRIBUTING.md                     # Contribution guidelines
└── docs/
    ├── README.md                       # Documentation index
    ├── COMPONENT_DESIGN_GUIDELINES.md  # Comprehensive component guidelines
    └── DOCUMENTATION_OVERVIEW.md       # This file
```

## 🎯 Quick Navigation

### I want to...

#### **Contribute a new component**
1. Read [CONTRIBUTING.md](../CONTRIBUTING.md)
2. Review [Component Design Guidelines](./COMPONENT_DESIGN_GUIDELINES.md)
3. Run `yarn gen:component ComponentName`
4. Follow the structure and patterns

#### **Understand design principles**
- See [Component Design Guidelines - Design Principles](./COMPONENT_DESIGN_GUIDELINES.md#design-principles)

#### **Learn about accessibility requirements**
- See [Component Design Guidelines - Accessibility](./COMPONENT_DESIGN_GUIDELINES.md#accessibility)

#### **Understand component structure**
- See [Component Design Guidelines - Component Structure](./COMPONENT_DESIGN_GUIDELINES.md#component-structure)

#### **Learn about testing**
- See [Component Design Guidelines - Testing Requirements](./COMPONENT_DESIGN_GUIDELINES.md#testing-requirements)
- See [CONTRIBUTING.md - Testing](../CONTRIBUTING.md#testing)

#### **Use design tokens**
- See [Component Design Guidelines - Spacing and Layout](./COMPONENT_DESIGN_GUIDELINES.md#spacing-and-layout)
- See [Component Design Guidelines - Color and Typography](./COMPONENT_DESIGN_GUIDELINES.md#color-and-typography)

#### **Submit a pull request**
- See [CONTRIBUTING.md - Pull Request Process](../CONTRIBUTING.md#pull-request-process)

## 📚 Document Descriptions

### [README.md](../README.md)
The main project README containing:
- Project overview and badges
- Quick start commands
- Development and testing instructions
- Release process
- Links to detailed documentation

### [CONTRIBUTING.md](../CONTRIBUTING.md)
Comprehensive guide for contributors covering:
- Getting started with development
- Development workflow
- Component creation process
- Pull request guidelines
- Testing procedures
- Code style examples

### [docs/README.md](./README.md)
Documentation index providing:
- Overview of all documentation
- Quick start guides
- Design principles summary
- Testing standards
- Links to resources

### [docs/COMPONENT_DESIGN_GUIDELINES.md](./COMPONENT_DESIGN_GUIDELINES.md)
The most comprehensive guide covering:
- Component structure and file organization
- Design principles (consistency, composability, flexibility)
- Spacing and layout standards
- Color and typography usage
- Accessibility requirements (WCAG 2.1 AA)
- Component API design patterns
- Testing requirements and examples
- Compliant and non-compliant code examples

## 🔄 Documentation Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                     New Contributor                          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Read README.md      │
         │   (Project Overview)  │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │ Read CONTRIBUTING.md  │
         │  (Setup & Workflow)   │
         └───────────┬───────────┘
                     │
                     ▼
    ┌────────────────────────────────────┐
    │  Read COMPONENT_DESIGN_GUIDELINES  │
    │    (Detailed Implementation)       │
    └────────────────┬───────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Review Existing      │
         │  Components (Button,  │
         │  Alert, etc.)         │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │  Start Development    │
         └───────────────────────┘
```

## 🎨 Key Concepts

### Design Tokens
All styling must use design tokens from `@vector-im/compound-design-tokens`:
- Colors: `--cpd-color-*`
- Spacing: `--cpd-space-*`
- Typography: `--cpd-font-*`

### Accessibility
All components must be WCAG 2.1 AA compliant:
- Keyboard navigation
- Screen reader support
- Proper ARIA attributes
- Color contrast requirements

### Testing
Three types of tests are required:
1. **Unit Tests** - Vitest + React Testing Library
2. **Visual Tests** - Playwright + Storybook
3. **Accessibility Tests** - Storybook a11y addon

### Component Structure
Standard structure for all components:
```
ComponentName/
├── ComponentName.tsx           # Implementation
├── ComponentName.module.css    # Styles
├── ComponentName.stories.tsx   # Storybook
├── ComponentName.test.tsx      # Tests
└── index.ts                    # Exports
```

## 🔗 External Resources

- **Live Storybook**: https://compound.element.io/
- **Design Tokens**: https://github.com/vector-im/compound-design-tokens
- **Main Repository**: https://github.com/vector-im/compound-web
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

## 📝 Maintaining Documentation

When updating documentation:

1. **Keep it current** - Update when patterns change
2. **Add examples** - Show both good and bad practices
3. **Link between docs** - Help users navigate
4. **Test the examples** - Ensure code samples work
5. **Get feedback** - Ask contributors what's unclear

## ❓ Questions?

If you can't find what you're looking for:

1. Check the [Component Design Guidelines](./COMPONENT_DESIGN_GUIDELINES.md) table of contents
2. Look at existing components for examples
3. Open an issue on GitHub
4. Ask in GitHub Discussions

---

**Last Updated**: December 2024  
**Maintained by**: Element Design System Team
