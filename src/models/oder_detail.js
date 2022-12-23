"use strict";

import { DB_SCHEMA } from "src/contants";

const { Model } = require("sequelize");

export const OrderDetailModel = (sequelize, DataTypes) => {
  class OrderDetail extends Model {}

  OrderDetail.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "orders",
        },
        onDelete: "CASCADE",
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
        },
      },
      quantity: {
        type: DataTypes.BIGINT,
      },
      total: {
        type: DataTypes.BIGINT,
      },
    },
    {
      tableName: "order_details",
      sequelize,
      timestamps: DataTypes.DATEONLY,
      modelName: "OrderDetail",
      schema: DB_SCHEMA,
      underscored: true,
    }
  );
  return OrderDetail;
};
