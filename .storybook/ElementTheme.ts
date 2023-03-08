import { create } from "@storybook/theming";

export default create({
  base: "light",
  colorPrimary: "#1b1d22",
  colorSecondary: "#0467dd",

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Inconsolata", monospace',

  // Text colors
  textColor: "#1b1d22",
  appBg: "#ffffff",
  barBg: "#ffffff",

  brandTitle: "Compound Web",
  brandUrl: "https://vector-im.github.io/compound-web/",
  brandImage: "https://element.io/images/logo-ele-secondary.svg",
  brandTarget: "_self",
});
