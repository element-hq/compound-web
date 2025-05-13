<p align="center"><img src="https://compound.element.io/logo-readme.png" width="300" alt="" /></p>

# Compound Web

[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://compound.element.io/) [![](https://img.shields.io/github/license/vector-im/compound)](https://github.com/vector-im/compound/blob/main/LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=compound-web&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=compound-web)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=compound-web&metric=coverage)](https://sonarcloud.io/summary/new_code?id=compound-web)

React implementation of Compound – Element's design system – See full documentation on https://compound.element.io

## Development

| Command                    | Runs                          |
| -------------------------- | ----------------------------- |
| `yarn dev`                 | Runs a local Storybook server |
| `yarn lint`                | Lints all components          |
| `yarn gen:component $name` | Bootstraps a new component    |

### Testing

| Command              | Runs                              |
| -------------------- | --------------------------------- |
| `yarn test`          | Runs unit tests                   |
| `yarn e2e:docker`    | Runs end-to-end tests             |
| `yarn e2e:docker -u` | Updates end-to-end test snapshots |

All components are expected to come with comprehensive unit tests and visual tests. We use Playwright to run visual tests on every story present in Storybook, so story coverage is really important! It helps us validate component implementations against the designs and prevents visual regressions at the same time.

We recommend running the end-to-end tests via Docker as shown above to get consistent text rendering for screenshots.

### Linking

If you want to work on Compound Web as a linked package within a larger React application, TypeScript might complain about there being multiple copies of @types/react in the tree. You can work around this by linking Compound Web's copy of @types/react to your application's copy:

```bash
$ cd my-application/node_modules/@types/react
$ yarn link
$ cd ../../../../compound-web
$ yarn link @types/react
```

## Release

To release a new version of Compound Web:

1. Review the changes since last released and choose the [appropriate](https://semver.org/) version bump (major, minor, patch).
1. Run the [Release npm package](https://github.com/vector-im/compound-web/actions/workflows/npm_release.yml) action, inputting the version bump.
   The action will:
   - add a commit bumping the version in `package.json`
   - publish the package to npm
   - tag a release on Github
1. Manually add a changelog to the [release on github](https://github.com/vector-im/compound-web/releases).

## Copyright & License

Copyright (c) 2023-2025 New Vector Ltd

This software is multi licensed by New Vector Ltd (Element). It can be used either:

(1) for free under the terms of the GNU Affero General Public License (as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version); OR

(2) under the terms of a paid-for Element Commercial License agreement between you and Element (the terms of which may vary depending on what you and Element have agreed to).
Unless required by applicable law or agreed to in writing, software distributed under the Licenses is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the Licenses for the specific language governing permissions and limitations under the Licenses.
