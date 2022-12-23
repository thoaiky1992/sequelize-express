// import { Op, fn } from "sequelize";
import { Transaction } from "sequelize";
import { LIMIT } from "src/contants";
import { db, Order, Product, OrderDetail } from "src/models";

/**
 *
 * @param {*} req : Request
 * @param {*} res : Response
 * @returns list order and count records
 */
const getMany = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * LIMIT;
  const orders = await Order.findAndCountAll({ offset, limit: LIMIT });
  return orders;
};

// eslint-disable-next-line no-unused-vars
const createOne = async (req, res) => {
  // do something .....
  const transaction = await db.sequelize.transaction({ isolationLevel: Transaction.ISOLATION_LEVELS.SERIALIZABLE });
  try {
    const product = await Product.findByPk(1, { transaction });
    if (product.stock > 0) {
      const order = await Order.create(
        { name: "ky", address: "asdasd", phone: "123456789", total: 2000 },
        { transaction }
      );
      await OrderDetail.create({ orderId: order.id, productId: product.id, quantity: 1, total: 2000 }, { transaction });
      await product.decrement("stock", { by: 1, transaction });
      await transaction.commit();
    }
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const OrderService = {
  getMany,
  createOne,
};
