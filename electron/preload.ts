import { contextBridge, ipcRenderer } from "electron";

// Exposer des APIs sécurisées au processus de rendu
contextBridge.exposeInMainWorld("electronAPI", {
  // Vous pouvez ajouter ici des fonctions sécurisées pour communiquer avec le processus principal
  getAppVersion: () => process.versions.app,
  getPlatform: () => process.platform,

  // Communication bidirectionnelle
  sendMessage: (message: string) =>
    ipcRenderer.send("message-to-main", message),

  // Écoute des réponses du processus principal
  onReply: (callback: (reply: string) => void) => {
    ipcRenderer.on("main-reply", (_event, reply) => callback(reply));

    // Retourne une fonction de nettoyage
    return () => {
      ipcRenderer.removeAllListeners("main-reply");
    };
  },
});
