import { Router } from "express";
import { OrderController } from "src/controllers/order.controller";

const orderRouter = Router();

orderRouter.get("/", OrderController.getMany).post("/", OrderController.createOne);

export default orderRouter;
