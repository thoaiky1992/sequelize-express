import { HttpException } from "../middleware/error.middleware";
import { UserSevice } from "../services/user.service";

const getMany = async (req, res, next) => {
  try {
    const users = await UserSevice.getMany(req, res);
    res.status(200).json(users);
  } catch (error) {
    next(new HttpException(500, error.message));
  }
};

const createOne = async (req, res, next) => {
  try {
    const user = await UserSevice.createOne(req, res);
    res.status(200).json(user);
  } catch (error) {
    next(new HttpException(500, error.message));
  }
};

export const UserController = {
  getMany,
  createOne,
};
