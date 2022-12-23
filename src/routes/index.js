import { Router } from "express";
import orderRouter from "./order.router";
import userRouter from "./user.router";

/**
 *
 * @param {*} app : Applicaion (Express)
 */
export function initialRouter(app) {
  const router = Router();
  // router.use("/users", userRouter);
  router.use("/order", orderRouter);

  app.use("/api/v1/", router);
}
