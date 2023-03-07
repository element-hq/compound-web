import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "res",
  build: {
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
});
