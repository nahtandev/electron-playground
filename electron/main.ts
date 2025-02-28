import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import electronReload from "electron-reload";
import waitOn from "wait-on";

const isDev = process.env.NODE_ENV === "development";
const port = process.env.PORT || 3000;

// Active le hot reload en développement
if (isDev) {
  electronReload(__dirname, {
    electron: path.join(__dirname, "..", "node_modules", ".bin", "electron"),
    hardResetMethod: "exit",
  });
}

async function createWindow() {
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
    // Attendre que le serveur Next.js soit prêt
    await waitOn({ 
      resources: [`http://localhost:${port}`],
     });
    await win.loadURL(`http://localhost:${port}`);
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
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
