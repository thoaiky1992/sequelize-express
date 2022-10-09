import { json } from "sequelize";
import { HttpException } from "../middleware/error.middleware";
import { User } from "../models";
import { UserSevice } from "../services/user.service";
import formidable from "formidable";
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
    const form = formidable({ multiples: true });
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve([fields, files]);
      });
    });
    console.log(fields, files);
    // const user = await UserSevice.createOne(req, res);
    res.status(200).json(fields);
  } catch (error) {
    next(new HttpException(500, error.message));
  }
};

export const UserController = {
  getMany,
  createOne,
};
