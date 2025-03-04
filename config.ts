import { app } from "electron";
import {
  ChildProcess,
  ChildProcessWithoutNullStreams,
} from "node:child_process";
import path from "path";
import treeKill from "tree-kill";

export const clientRendererDevPort = 5170;
export const clientRendererProdPort = 6170;
export const mainWindowViteName = "client-app";
export const mainServerName = "server-app";
export const APP_ENV: "development" | "production" = "development";
export const serverPort = 7170;
const devDataDir = path.resolve(__dirname, "../../", "data");

export function loadDatabaseConf() {
  const isDevEnv = APP_ENV === "development";
  const prodDatabaseDir = !isDevEnv
    ? path.resolve(app?.getPath("userData"), "database")
    : devDataDir;
  return {
    dbDir: isDevEnv ? devDataDir : prodDatabaseDir,
    mainDbName: "main.sqlite",
    mediaDbName: "media.sqlite",
    isDevEnv,
  };
}

export let appProcess: ChildProcessWithoutNullStreams | undefined = undefined;

export function setAppProccess(proccess: ChildProcess) {
  if (appProcess) {
    killAppProcess(); // Kill the old process before starting a new one
  }
  appProcess = proccess;

  // Clean exit handling
  process.on("exit", (code) => {
    console.log(`Process exited with code ${code}`);
    appProcess = undefined;
  });

  // Gestion des erreurs
  process.on("error", (err) => {
    console.error("Process error:", err);
    killAppProcess();
  });
}

export function killAppProcess(): Promise<void> {
  return new Promise((resolve) => {
    if (!appProcess) {
      resolve();
      return;
    }

    const pid = appProcess.pid;
    if (!pid) {
      resolve();
      return;
    }

    // Use tree-kill to kill the process and all its children
    treeKill(pid, "SIGTERM", (err) => {
      if (err) {
        console.error("Error killing process:", err);
        // Fallback: force kill
        treeKill(pid, "SIGKILL", () => {
          appProcess = undefined;
          resolve();
        });
      } else {
        appProcess = undefined;
        resolve();
      }
    });
  });
}

export function logAppProccess() {
  if (!appProcess) return;
  appProcess.stdout.pipe(process.stdout);
  appProcess.stderr.pipe(process.stderr);
}
