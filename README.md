<p align="center"><img src="https://compound.element.io/logo-readme.png" width="300" alt="" /></p>

# Compound Web

[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://vector-im.github.io/compound-web/) [![](https://img.shields.io/github/license/vector-im/compound)](https://github.com/vector-im/compound/blob/main/LICENSE)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/c8fecada/compound-web)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=vector-im_compound-web&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=vector-im_compound-web)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=vector-im_compound-web&metric=coverage)](https://sonarcloud.io/summary/new_code?id=vector-im_compound-web)

React implementation of Compound – Element's design system – See full documentation on https://compound.element.io and the [Figma component library](https://www.figma.com/file/rTaQE2nIUSLav4Tg3nozq7/Compound-Web-Components?type=design&node-id=129%3A4461&t=0cvCO0bpqRPGgkwa-1)

## Commands

| Command                    | Runs                                 |
| -------------------------- | ------------------------------------ |
| `yarn dev`                 | Runs a local development environment |
| `yarn test`                | Tests all components                 |
| `yarn lint`                | Lints all components                 |
| `yarn gen:component $name` | Bootstraps a new component           |

## Development

If you want to work on Compound Web as a linked package within a larger React application, TypeScript might complain about there being multiple copies of @types/react in the tree. You can work around this by linking Compound Web's copy of @types/react to your application's copy:

```bash
$ cd my-application/node_modules/@types/react
$ yarn link
$ cd ../../../../compound-web
$ yarn link @types/react
```

### Release

To release a new version of Compound Web:

1. Review the changes since last released and choose the [appropriate](https://semver.org/) version bump (major, minor, patch).
1. Run the [Release npm package](https://github.com/vector-im/compound-web/actions/workflows/npm_release.yml) action, inputting the version bump.
   The action will:
   - add a commit bumping the version in `package.json`
   - publish the package to npm
   - tag a release on Github
1. Manually add a changelog to the [release on github](https://github.com/vector-im/compound-web/releases).
