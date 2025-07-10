import type { StorybookConfig } from "@storybook/react-vite";

const addons = [
  "@storybook/addon-links",
  "@storybook/addon-designs",
  "@storybook/addon-themes",
  "@storybook/addon-docs",
];

if (process.env.NODE_ENV === "development") {
  addons.push("@storybook/addon-a11y");
}

const config: StorybookConfig = {
  stories: ["../src/**/!(__ComponentTemplate__)*.stories.@(js|jsx|ts|tsx)"],

  addons,

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  viteFinal: (config) => {
    return {
      ...config,
      publicDir: "res",
    };
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
