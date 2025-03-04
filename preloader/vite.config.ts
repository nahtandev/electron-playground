import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    sourcemap: false,
    outDir: "../.vite/build",
    rollupOptions: {
      output: {
        format: "commonjs",
      },
    },
    lib: {
      entry: "preload.ts",
      formats: ["cjs"],
      fileName: () => "preload.js",
    },
  },
});
