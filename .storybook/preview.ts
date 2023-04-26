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
