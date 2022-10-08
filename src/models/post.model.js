"use strict";

import { DB_SCHEMA } from "../contants";
import { ConnectDB } from "./connect-db";
import { User } from "./user.model";
const { Model } = require("sequelize");
const db = ConnectDB();
const { DataTypes } = db.Sequelize;

export class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      references: {
        model: "users",
      },
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db.sequelize,
    timestamps: DataTypes.DATEONLY,
    modelName: "Post",
    schema: DB_SCHEMA,
    underscored: true,
  }
);
