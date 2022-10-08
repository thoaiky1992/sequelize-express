"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "posts",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "users",
          },
          onDelete: "cascade",
        },
        title: {
          type: Sequelize.DataTypes.STRING,
        },
        body: {
          type: Sequelize.DataTypes.STRING,
        },
        created_at: Sequelize.DataTypes.DATEONLY,
        updated_at: Sequelize.DataTypes.DATEONLY,
        deleted_at: Sequelize.DataTypes.DATEONLY,
      },
      { timestamps: true, schema: process.env.DB_SCHEMA }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({ tableName: "posts", schema: process.env.DB_SCHEMA });
  },
};
