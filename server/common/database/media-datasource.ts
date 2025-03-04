import { loadDatabaseConf } from "../../../config";
import { join } from "path";
import { DataSource } from "typeorm";
import { BetterSqlite3ConnectionOptions } from "typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions";
import { log } from "../logger/logger";

const databaseConf = loadDatabaseConf(); 

export const mediaDatasource = new DataSource({
  synchronize: true,
  type: "better-sqlite3",
  database: join(databaseConf.dbDir, databaseConf.mediaDbName),
  logging: "all",
  logger: "advanced-console",
  entities: [],
  migrations: [],
} as BetterSqlite3ConnectionOptions);

mediaDatasource.initialize().then(() => {
  log.info("Media database initialized");
})