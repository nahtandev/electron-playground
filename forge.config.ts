import type { ForgeConfig } from "@electron-forge/shared-types";
import { MakerSquirrel } from "@electron-forge/maker-squirrel";
import { MakerDeb } from "@electron-forge/maker-deb";
import { FusesPlugin } from "@electron-forge/plugin-fuses";
import { FuseV1Options, FuseVersion } from "@electron/fuses";

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    prune: true,
    ignore: [
      /^[/\\]?(preloader|server|data)([/\\].*)?$/,
      /^[/\\]?client([/\\].*)?$/,
      
      // Configuration and system files
      /^[/\\]?\.(gitignore|eslintrc\.json|env)$/,
      /^[/\\]?(config|forge\.config|forge\.env\.d|tsconfig)(\.ts|\.json)$/
    ],
  },
  makers: [new MakerSquirrel({}), new MakerDeb({})],
  plugins: [
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

export default config;
