/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-restricted-imports": ["error", {
      "paths": [{
        "name": "react",
        "importNames": ["useId"],
        "message": "'useId' is only available in React 18. Please use the ponyfill from 'utils/useId' instead."
      }],
    }],
    "prettier/prettier": "error",
  },
  plugins: ["prettier", "react", "@typescript-eslint", "matrix-org"],
  settings: {
    react: {
      version: "17",
    },
  },
};
