"use strict";

import { DB_SCHEMA } from "../contants";
import bcryptjs from "bcryptjs";
const { Model } = require("sequelize");

export const UserModel = (sequelize, DataTypes) => {
  class User extends Model {
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
      sequelize,
      timestamps: DataTypes.DATEONLY,
      modelName: "User",
      schema: DB_SCHEMA,
      underscored: true,
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
    }
  );
  return User;
};
