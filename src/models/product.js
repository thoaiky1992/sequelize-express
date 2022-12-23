"use strict";

import { DB_SCHEMA } from "src/contants";

const { Model } = require("sequelize");

export const ProductModel = (sequelize, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      stock: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "products",
      sequelize,
      timestamps: DataTypes.DATEONLY,
      modelName: "Product",
      schema: DB_SCHEMA,
      underscored: true,
    }
  );
  return Product;
};
