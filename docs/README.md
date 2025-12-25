# Compound Web Documentation

Welcome to the Compound Web documentation! This directory contains comprehensive guides and references for contributing to and using the Compound Web component library.

## 📚 Documentation Index

### For Contributors

- **[Component Design Guidelines](./COMPONENT_DESIGN_GUIDELINES.md)** - Comprehensive guide for creating and maintaining components
  - Component structure and organization
  - Design principles and best practices
  - Spacing, layout, and typography standards
  - Accessibility requirements (WCAG 2.1 AA)
  - Component API design patterns
  - Testing requirements and examples

## 🚀 Quick Start

### For Component Development

1. **Read the Guidelines**: Start with the [Component Design Guidelines](./COMPONENT_DESIGN_GUIDELINES.md)
2. **Review Existing Components**: Look at components like `Button` or `Alert` for reference
3. **Use the Generator**: Run `yarn gen:component ComponentName` to scaffold a new component
4. **Follow the Structure**: Ensure your component includes:
   - TypeScript implementation
   - CSS modules with design tokens
   - Storybook stories
   - Unit tests
   - Accessibility features

### For Design System Users

- **Storybook**: Visit [compound.element.io](https://compound.element.io/) for live component demos
- **Installation**: See the main [README](../README.md) for installation instructions
- **Design Tokens**: Components use tokens from `@vector-im/compound-design-tokens`

## 🎨 Design Principles

Compound Web follows these core principles:

1. **Consistency** - Unified visual language across all components
2. **Accessibility** - WCAG 2.1 AA compliant by default
3. **Composability** - Components work together seamlessly
4. **Flexibility** - Customizable while maintaining design integrity
5. **Performance** - Optimized for production use

## 🧪 Testing Standards

All components must include:

- **Unit Tests**: Using Vitest and React Testing Library
- **Visual Tests**: Playwright tests for all Storybook stories
- **Accessibility Tests**: Automated a11y checks via Storybook addon
- **Coverage**: Minimum 80% code coverage

## 📖 Additional Resources

- [Main Repository](https://github.com/vector-im/compound-web)
- [Design System Website](https://compound.element.io/)
- [Design Tokens](https://github.com/vector-im/compound-design-tokens)
- [Storybook](https://compound.element.io/)

## 🤝 Contributing

We welcome contributions! Please:

1. Read the [Component Design Guidelines](./COMPONENT_DESIGN_GUIDELINES.md)
2. Check existing issues and PRs
3. Follow the established patterns
4. Include tests and documentation
5. Submit a PR with a clear description

## 📝 Documentation Updates

This documentation is maintained by the Compound Web team. If you find errors or have suggestions:

- Open an issue on GitHub
- Submit a PR with improvements
- Reach out to the maintainers

---

**Last Updated**: December 2024  
**Maintained by**: Element Design System Team
