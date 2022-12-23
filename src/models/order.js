"use strict";

import { DB_SCHEMA } from "src/contants";

const { Model } = require("sequelize");

export const OrderModel = (sequelize, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      total: {
        type: DataTypes.BIGINT,
      },
    },
    {
      tableName: "orders",
      sequelize,
      timestamps: DataTypes.DATEONLY,
      modelName: "Order",
      schema: DB_SCHEMA,
      underscored: true,
    }
  );
  return Order;
};
