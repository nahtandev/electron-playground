import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import electronReload from "electron-reload";
import waitOn from "wait-on";
import { spawn } from "child_process";

const isDev = process.env.NODE_ENV === "development";
const nextPort = 3000;
const nestPort = 5000;

let nestProcess: any = null;

// Active le hot reload en développement
if (isDev) {
  electronReload(__dirname, {
    electron: path.join(__dirname, "..", "node_modules", ".bin", "electron"),
    hardResetMethod: "exit",
  });
}

function startNestServer() {
  console.log("Nest server start")
  const serverPath = path.join(__dirname, "../..", "server");
  console.log("Server path:", serverPath)
  if (isDev && !nestProcess) {
    console.log("Starting NestJS server...");
    nestProcess = spawn("npm", ["run", "start:dev"], {
      cwd: serverPath,
      shell: true,
    });

    nestProcess.stdout.on("data", (data: Buffer) => {
      console.log(`NestJS: ${data}`);
    });

    nestProcess.stderr.on("data", (data: Buffer) => {
      console.error(`NestJS Error: ${data}`);
    });

    nestProcess.on("close", (code: number) => {
      console.log(`NestJS process exited with code ${code}`);
      nestProcess = null;
    });
  }
}

async function createWindow() {
  // Démarrer le serveur NestJS en développement
  startNestServer();

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // En développement, charge l'URL de développement de Next.js
  if (isDev) {
    // Attendre que les serveurs Next.js et NestJS soient prêts
    await waitOn({ 
      resources: [
        `http://localhost:${nextPort}`,
        `http://localhost:${nestPort}`
      ],
    });
    await win.loadURL(`http://localhost:${nextPort}`);
    win.webContents.openDevTools();
  } else {
    // En production, charge l'application Next.js exportée
    win.loadFile(path.join(__dirname, "..", "client", "out", "index.html"));
  }

  // Gestion des messages du renderer process
  ipcMain.on("message-to-main", (_event, message) => {
    console.log("Message reçu du renderer:", message);
    // Envoie une réponse au renderer
    win.webContents.send("main-reply", `Message reçu: ${message}`);
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  // Arrêter le serveur NestJS avant de quitter
  if (nestProcess) {
    nestProcess.kill();
    nestProcess = null;
  }

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
