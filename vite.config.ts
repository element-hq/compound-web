import { defineConfig } from "vite";
import { resolve } from "path";
import browserslistToEsbuild from "browserslist-to-esbuild";
import eslint from "vite-plugin-eslint";

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
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [eslint()],
});
