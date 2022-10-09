"use strict";

import { DB_SCHEMA } from "../contants";
const { Model } = require("sequelize");

export const PostModel = (sequelize, DataTypes) => {
  class Post extends Model {}

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
      sequelize,
      timestamps: DataTypes.DATEONLY,
      modelName: "Post",
      schema: DB_SCHEMA,
      underscored: true,
    }
  );
  return Post;
};
