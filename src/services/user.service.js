import { LIMIT } from "../contants";
import { Op, literal, fn } from "sequelize";
import { User } from "../models/user.model";
import { Post } from "../models/post.model";

const getMany = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * LIMIT;
  const users = await User.findAndCountAll({
    where: { createdAt: { [Op.between]: [fn("date", "2022/10/09"), fn("date", "2022/10/10")] } },
    include: [{ model: Post, as: "posts" }],
    attributes: { exclude: ["updatedAt"] },
    offset,
    limit: LIMIT,
  });
  return users;
};

const createOne = async (req, res) => {
  const user = await User.create(req.body);
  return { user };
};

export const UserSevice = {
  getMany,
  createOne,
};
