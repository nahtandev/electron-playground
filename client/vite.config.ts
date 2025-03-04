import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { clientRendererDevPort, mainWindowViteName } from "../config";

// https://vitejs.dev/config
export default defineConfig(async () => {
  return {
    plugins: [react()],
    root: "./",
    server: {
      strictPort: true,
      port: clientRendererDevPort,
    },
    base: "./",
    build: {
      outDir: path.resolve(__dirname, "../.vite/renderer", mainWindowViteName),
      emptyOutDir: false,
    },
    resolve: {
      preserveSymlinks: true,
    },
    clearScreen: false,
  };
});
