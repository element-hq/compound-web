import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "storybook-addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: false,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        svgr({
          exportAsDefault: true,
          svgrOptions: {
            // Using 1em in order to make SVG size inherits from text size.
            icon: "1em",
            svgProps: {
              // Adding a class in case we want to add global overrides, but one
              // should probably stick to using CSS modules most of the time
              class: "cpd-icon",
            },
          },
        }),
      ],
    });
  },
};
