"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "users",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_name: {
          type: Sequelize.DataTypes.STRING,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
        },
        password: {
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
    await queryInterface.dropTable({ tableName: "users", schema: process.env.DB_SCHEMA });
  },
};
