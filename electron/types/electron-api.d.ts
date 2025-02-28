interface ElectronAPI {
  getAppVersion: () => string;
  getPlatform: () => string;
  sendMessage: (message: string) => void;
  onReply: (callback: (reply: string) => void) => () => void;
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

export {};
