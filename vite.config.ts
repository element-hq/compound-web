import { defineConfig } from "vite";
import { resolve } from "path";
import browserslistToEsbuild from "browserslist-to-esbuild";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import babel from "vite-plugin-babel";

export default defineConfig({
  build: {
    target: browserslistToEsbuild(),
    assetsInlineLimit: 0, // To disable assets inlining as base64 in the bundle

    // We expect to be used as a dependency with a bundler, so we don't need to
    // minify and let the bundler deal with the sourcemaps
    sourcemap: true,
    minify: false,
    cssMinify: false,

    rollupOptions: {
      // We are *not* running in library mode because inlines all the assets.
      // Instead, we're running in normal mode & specifying the entrypoint here.
      // See: https://github.com/vitejs/vite/issues/3295
      input: [resolve(__dirname, "./src/index.ts")],

      // Must be in sync with the list of dependencies in the package.json
      // It includes all dependencies except @vector-im/compound-design-tokens
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "lodash",
        "classnames",
        "@radix-ui/react-form",
      ],

      // Without this, none of the exports are preserved in the bundle
      preserveEntrySignatures: "strict",

      output: {
        format: "es",
        // This keeps a flat structure in the output directory
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]",
      },
    },
  },

  experimental: {
    // This ensures we're using relative paths in the generated CSS
    renderBuiltUrl(filename: string) {
      return `./${filename}`;
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
    dts(),
    babel(),
  ],
});
