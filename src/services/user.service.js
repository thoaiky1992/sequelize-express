// import { Op, fn } from "sequelize";
import { Transaction } from "sequelize";
import { LIMIT } from "src/contants";
import { db, Post, User } from "src/models";
import { UploadFile } from "src/utils/upload-file";

// eslint-disable-next-line no-unused-vars
const getMany = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * LIMIT;
  const users = await User.findAndCountAll({
    // where: { createdAt: { [Op.between]: [fn("date", "2022/10/09"), fn("date", "2022/10/10")] } },
    include: [{ model: Post, as: "posts" }],
    attributes: { exclude: ["updatedAt"] },
    offset,
    limit: LIMIT,
  });
  return users;
};

// eslint-disable-next-line no-unused-vars
const createOne = async (req, res) => {
  const payload = Object.assign({}, req.body);
  const files = req.files;
  if (files && files.length) {
    const filePaths = UploadFile(files[0], "/images/avatars", new Date().getTime() + "-" + files[0].originalname);
    payload.avatar = filePaths.prefixPath;
  }
  const user = await User.create(payload);
  delete user.password;
  return user;
};

const decrementPoint = async () => {
  // const user = await User.findByPk(1);
  // if (user.points > 0) await user.decrement("points", { by: 1 });

  // const transaction = await db.sequelize.transaction();
  // try {
  //   const user = await User.findByPk(1, { transaction });
  //   if (user.points > 0) await user.decrement("points", { by: 1, transaction });
  //   transaction.commit();
  // } catch (error) {
  //   await transaction.rollback();
  //   throw error;
  // }

  const transaction = await db.sequelize.transaction({ isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE });
  try {
    const user = await User.findByPk(1, { transaction });
    if (user.points > 0) await user.decrement("points", { by: 1, transaction });
    transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const UserSevice = {
  getMany,
  createOne,
};
