import { OrderEntity } from "../../modules/orders/order.model";
import { loadDatabaseConf } from "../../../config";
import { DataSource } from "typeorm";
import { BetterSqlite3ConnectionOptions } from "typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions";
import { log } from "../logger/logger";
import path from "path";

const databaseConf = loadDatabaseConf();

export const appDatasource = new DataSource({
  synchronize: true,
  type: "better-sqlite3",
  database: path.join(databaseConf.dbDir, databaseConf.mainDbName),
  logging: "all",
  logger: "advanced-console",
  entities: [OrderEntity],
  migrations: [],
} as BetterSqlite3ConnectionOptions);


appDatasource.initialize().then(() => {
  log.info("App database initialized");
})