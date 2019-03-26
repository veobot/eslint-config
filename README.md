# @veobot/eslint-config

> Veo Robotics ESLint rules for all JavaScript / TypeScript projects

---

[![npm version](https://badge.fury.io/js/%40veobot%2Feslint-config.svg)](https://badge.fury.io/js/%40veobot%2Feslint-config)

## Installation

Install the package and all of its peer dependencies:

```bash
$ npx install-peerdeps --dev @veobot/eslint-config
```

Afterwards, create a `.eslintrc` file in your root project folder and add the following:

```json
{
  "extends": "@veobot"
}
```

## Configuration

To override anything, simply add a `rules` property to your `.eslintrc`
file and add new or existing rules to it with your preferred settings:

```json
{
  "extends": "@veobot",
  "rules": {
    "arrow-spacing": "off"
  }
}
```

## Testing

To run tests for this package, install the development dependencies with
`yarn install` from this folder and then run `yarn test`.

## License

MIT License. See LICENSE file for details.
