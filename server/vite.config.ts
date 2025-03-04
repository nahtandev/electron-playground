import { spawn } from "node:child_process";
import { builtinModules } from "node:module";
import { defineConfig } from "vite";
import {
  APP_ENV,
  killAppProcess,
  logAppProccess,
  setAppProccess,
} from "../config";

// https://vitejs.dev/config
export default defineConfig((_) => {
  const external = [
    ...builtinModules,
    "electron",
    "typeorm",
    "better-sqlite3",
    "iconv-lite",
    "original-fs"
  ];

  return {
    plugins: [
      {
        name: "electron-restart-plugin",
        async buildStart() {
          await killAppProcess();
        },
        async writeBundle() {
          console.log("📦 Build end...");

          if (APP_ENV === "production") return;
          console.log("📦 Restarting Electron...");

          await new Promise((resolve) => setTimeout(resolve, 1000));

          try {
            const processus = spawn("electron-forge start", {
              shell: true,
              stdio: "pipe",
              env: {
                ...process.env,
                FORCE_COLOR: "1",
              },
            });

            setAppProccess(processus);
            logAppProccess();

            process.on("error", (error: any) => {
              console.error("❌ Failed to restart Electron:", error);
            });
          } catch (error) {
            console.error("❌ Failed to restart Electron:", error);
          }
        },
        closeBundle() {
          console.log("✅ Bundle closed");
        },
      },
    ],
    build: {
      minify: false,
      outDir: "../.vite/build",
      emptyOutDir: false,
      rollupOptions: {
        external,
      },

      lib: {
        entry: "main.ts",
        formats: ["cjs"],
        fileName: () => "main.js",
      },
    },
    clearScreen: false,
  };
});
