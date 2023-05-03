import { defineConfig } from "vite";
import { resolve } from "path";
import browserslistToEsbuild from "browserslist-to-esbuild";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  publicDir: "res",
  build: {
    target: browserslistToEsbuild(),
    assetsInlineLimit: 0, // To disable assets inlining as base64 in the bundle
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@vector-im/compound-web",
      fileName: "compound-web",
    },
    rollupOptions: {
      external: ["react", "react-dom", /.*\.svg$/],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
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
