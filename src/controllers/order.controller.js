import { HttpException } from "src/middleware/error.middleware";
import { OrderService } from "src/services/order.service";

const getMany = async (req, res, next) => {
  try {
    const orders = await OrderService.getMany(req, res);
    res.status(200).json(orders);
  } catch (error) {
    next(new HttpException(500, error.message));
  }
};
const createOne = async (req, res, next) => {
  try {
    const orders = await OrderService.createOne(req, res);
    res.status(200).json(orders);
  } catch (error) {
    next(new HttpException(500, error.message));
  }
};

export const OrderController = {
  createOne,
  getMany,
};
