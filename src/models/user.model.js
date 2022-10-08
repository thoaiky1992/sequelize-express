"use strict";

import { DB_SCHEMA } from "../contants";
import bcryptjs from "bcryptjs";
import { ConnectDB } from "./connect-db";
import { Post } from "./post.model";
const { Model } = require("sequelize");
const db = ConnectDB();
const { DataTypes } = db.Sequelize;

export class User extends Model {
  getFullName() {
    return "hehe";
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      get() {
        return this.userName;
      },
      set(value) {
        this.setDataValue("password", value);
      },
    },
  },
  {
    sequelize: db.sequelize,
    timestamps: DataTypes.DATEONLY,
    modelName: "User",
    schema: DB_SCHEMA,
    underscored: true,
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
  }
);
