declare module "electron-reload" {
  interface ElectronReloadOptions {
    electron?: string;
    hardResetMethod?: "exit" | "notification";
    forceHardReset?: boolean;
  }

  function electronReload(
    paths: string | string[],
    options?: ElectronReloadOptions
  ): void;

  export = electronReload;
}
