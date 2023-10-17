import { withThemeByClassName } from "@storybook/addon-themes";
import { Decorator, Parameters } from "@storybook/react";

import "@fontsource/inconsolata/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@vector-im/compound-design-tokens/assets/web/css/compound-design-tokens.css";
import "../src/styles/global.css";

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
};

export const decorators: Decorator[] = [
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
