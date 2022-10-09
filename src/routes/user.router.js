import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import authenticatedMiddleware from "../middleware/authenticate.middleware";
import ValidationMiddleware from "../middleware/validation.middleware";
import { UserValidation } from "../validation/user.validation";

const userRouter = Router();

userRouter.get("/", UserController.getMany).post("/", UserController.createOne);

export default userRouter;
