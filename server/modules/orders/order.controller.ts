import express from "express";
import orderService from "./order.service";

export const orderController = express.Router();

orderController.get("/", async (_req, res, next) => {
  const orders = await orderService.findAll();
  res.send(orders);
});

orderController.get("/:id", async (req, res, next) => {
  const order = await orderService.findOne(parseInt(req.params.id));
  res.send(order);
});

orderController.post("/", async (req, res, next) => {
  await orderService.create(req.body.name);
  res.status(200).json({ success: true });
});

orderController.put("/:id", async (req, res, next) => {
  await orderService.update(parseInt(req.params.id), req.body.name);
  res.status(200).json({ success: true });
});

orderController.delete("/:id", async (req, res, next) => {
  await orderService.delete(parseInt(req.params.id));
  res.status(200).json({ success: true });
});
