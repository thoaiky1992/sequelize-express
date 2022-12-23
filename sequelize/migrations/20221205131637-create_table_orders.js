"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "orders",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
        },
        address: {
          type: Sequelize.DataTypes.STRING,
        },
        phone: {
          type: Sequelize.DataTypes.STRING,
        },
        total: {
          type: Sequelize.DataTypes.BIGINT,
        },
        created_at: Sequelize.DataTypes.DATEONLY,
        updated_at: Sequelize.DataTypes.DATEONLY,
        deleted_at: Sequelize.DataTypes.DATEONLY,
      },
      { timestamps: true, schema: process.env.DB_SCHEMA }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({ tableName: "orders", schema: process.env.DB_SCHEMA });
  },
};
