import express, { Application } from "express";
import cors from "cors";
import { makeErrorHandler } from "./middleware/error.middleware";
import { orderController } from "./modules/orders/order.controller";

export const app = (logger: any): Application => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(makeErrorHandler(logger));
  app.use(cors({ origin: true, credentials: false }));

  app.use("/orders", orderController);

  return app;
};
