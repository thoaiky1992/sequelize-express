import { Router } from "express";
import { UserController } from "src/controllers/user.controller";

const userRouter = Router();

userRouter.get("/", UserController.getMany).post("/", UserController.createOne);

export default userRouter;
