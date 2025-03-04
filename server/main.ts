import "reflect-metadata";

import { app, BrowserWindow } from "electron";
import path from "path";
import express from "express";
import started from "electron-squirrel-startup";
import { extractAll } from "@electron/asar";
import { tmpdir } from "os";
import fs from "fs";

import {
  APP_ENV,
  clientRendererDevPort,
  clientRendererProdPort,
  mainWindowViteName,
  serverPort,
} from "../config";
import { app as createApp } from "./app";
import { log } from "./common/logger/logger";

const isDev = APP_ENV === "development";

if (started) {
  app.quit();
}

async function extractAppFiles(): Promise<string> {
  const asarPath = path.join(process.resourcesPath, "app.asar");
  const extractPath = path.join(
    tmpdir(),
    `${mainWindowViteName}-${Date.now()}`
  );

  // Create temp directory if it doesn't exist
  if (!fs.existsSync(extractPath)) {
    fs.mkdirSync(extractPath, { recursive: true });
  }

  // Extract ASAR archive
  await extractAll(asarPath, extractPath);

  return extractPath;
}

async function createWindow() {
  try {
    const mainWindow = new BrowserWindow({
      width: 1200,
      height: 800,
      webPreferences: {
        preload: path.join(__dirname, "./preload.js"),
        nodeIntegration: false,
        contextIsolation: true,
      },
    });

    if (isDev) {
      const clientAppDevUrl = `http://localhost:${clientRendererDevPort}`;
      mainWindow.loadURL(clientAppDevUrl);
      mainWindow.webContents.closeDevTools();
    } else {
      const server = express();
      const appFiles = await extractAppFiles();
      const clientFiles = path.join(
        appFiles,
        ".vite",
        "renderer",
        mainWindowViteName
      );
      server.use(express.static(clientFiles));

      // Serve index.html for all routes to support client-side routing
      server.get("*", (_req, res) => {
        res.sendFile(path.join(clientFiles, "index.html"));
      });

      // Clean up temp directory when app quits
      app.on("before-quit", () => {
        if (fs.existsSync(appFiles)) {
          fs.rmSync(appFiles, { recursive: true, force: true });
        }
      });

      server.listen(clientRendererProdPort, () => {});
      mainWindow.loadURL(`http://localhost:${clientRendererProdPort}`);
      mainWindow.webContents.closeDevTools();
    }
  } catch (error) {
    log.error(error);
  }
}

export async function startExpressServer() {
  try {
    const app = createApp(log);
    app.listen(serverPort, () => {
      log.info(`Production Server API listening on port ${serverPort}`);
    });

    app.on("error", (error: any) => {
      log.error("Server error:", error);
    });
  } catch (error) {
    log.error("Failed to start Express server:", error);
  }
}

app.whenReady().then(() => {
  startExpressServer();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
