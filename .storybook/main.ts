import type { StorybookConfig } from "@storybook/react-vite";

const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-interactions",
  "@storybook/addon-designs",
  "@storybook/addon-themes",
];

if (process.env.NODE_ENV === "development") {
  addons.push("@storybook/addon-a11y");
}

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/!(__ComponentTemplate__)*.stories.@(js|jsx|ts|tsx)",
  ],
  addons,
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config) => {
    return {
      ...config,
      publicDir: "res",
    };
  },
};

export default config;
