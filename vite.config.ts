import { defineConfig } from "vitest/config";
import { resolve } from "path";
import browserslistToEsbuild from "browserslist-to-esbuild";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "CompoundWeb",
      fileName: "compound-web",
      formats: ["es", "cjs"],
    },

    target: browserslistToEsbuild(),

    // We expect to be used as a dependency with a bundler, so we don't need to
    // minify and let the bundler deal with the sourcemaps
    sourcemap: true,
    minify: false,
    cssMinify: false,

    rollupOptions: {
      // Must be in sync with the list of dependencies in the package.json
      // It includes all dependencies except @vector-im/compound-design-tokens
      external: [
        "react",
        "react-dom",
        "react-dom/server",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "classnames",
        "graphemer",
        "vaul",
        "@radix-ui/react-context-menu",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-form",
        "@radix-ui/react-tooltip",
      ],

      // Without this, none of the exports are preserved in the bundle
      preserveEntrySignatures: "strict",
    },
  },

  plugins: [
    react({
      jsxRuntime: "automatic",
    }),

    svgr({
      exportAsDefault: true,

      esbuildOptions: {
        // This makes sure we're using the same JSX runtime as React itself
        jsx: "automatic",
      },

      svgrOptions: {
        // Using 1em in order to make SVG size inherits from text size.
        icon: "1em",

        svgProps: {
          // Adding a class in case we want to add global overrides, but one
          // should probably stick to using CSS modules most of the time
          className: "cpd-icon",
        },
      },
    }),

    // Extract the types from the source files
    dts({
      compilerOptions: {
        declaration: true,
        declarationMap: true,
      },
      exclude: ["**/*.stories.tsx", "**/*.test.tsx", "**/*.test.ts"],
    }),
  ],

  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.?(c|m)[vt]s?(x)"],
    setupFiles: ["src/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
    },
  },
});
