"use strict";

import { DB_SCHEMA, DEFAULT_AVATAR, HASH_SALT } from "../contants";
const { Model } = require("sequelize");
import bcryptjs from "bcryptjs";

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
      avatar: {
        type: DataTypes.STRING,
        defaultValue: DEFAULT_AVATAR,
      },
      password: {
        type: DataTypes.STRING,
        // get() {
        //   return this.userName;
        // },
        set(value) {
          this.setDataValue("password", bcryptjs.hashSync(value, HASH_SALT));
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
