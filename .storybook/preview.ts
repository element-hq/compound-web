import { withThemeByClassName } from "@storybook/addon-styling";

import "@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css";
import "../src/styles/global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "cpd-theme-light",
      dark: "cpd-theme-dark",
      "light-high-contrast": "cpd-theme-light-hc",
      "dark-high-contrast": "cpd-theme-dark-hc",
    },
    defaultTheme: "light",
  }),
];
