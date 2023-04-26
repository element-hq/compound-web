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
  themes: {
    default: "light",
    list: [
      { name: "light", class: "cpd-theme-light", color: "#fff" },
      { name: "dark", class: "cpd-theme-dark", color: "#101317" },
      {
        name: "light-high-contrast",
        class: "cpd-theme-light-hc",
        color: "#fff",
      },
      {
        name: "dark-high-contrast",
        class: "cpd-theme-dark-hc",
        color: "#101317",
      },
    ],
  },
};
