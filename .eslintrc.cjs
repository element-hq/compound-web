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
    "prettier/prettier": "error",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@floating-ui/react",
            importNames: ["useId"],
            message:
              "Please use useId from React directly: Compound only supports React 18+ and floating-ui's wrapper breaks mocks that make the IDs consistent in tests.",
          },
        ],
      },
    ],
  },
  plugins: ["prettier", "react", "@typescript-eslint", "matrix-org"],
  settings: {
    react: {
      version: "18",
    },
  },
};
