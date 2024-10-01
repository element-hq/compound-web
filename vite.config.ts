import { defineConfig } from "vitest/config";
import { resolve } from "path";
import browserslistToEsbuild from "browserslist-to-esbuild";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

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
      external: [
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "classnames",
        "vaul",
        "@floating-ui/react",
        "@radix-ui/react-context-menu",
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-form",
        "@radix-ui/react-progress",
        "@radix-ui/react-separator",
        "@radix-ui/react-slot",
        // This is a regex as we import sub-paths from the design tokens package and never the root one
        /^@vector-im\/compound-design-tokens\/.*/,
      ],

      // Without this, none of the exports are preserved in the bundle
      preserveEntrySignatures: "strict",
    },
  },

  plugins: [
    react({
      jsxRuntime: "automatic",
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
