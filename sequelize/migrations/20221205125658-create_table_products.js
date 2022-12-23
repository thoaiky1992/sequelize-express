"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "products",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
        },
        image: {
          type: Sequelize.DataTypes.STRING,
        },
        description: {
          type: Sequelize.DataTypes.STRING,
        },
        price: {
          type: Sequelize.DataTypes.INTEGER,
          defaultValue: 0,
        },
        stock: {
          type: Sequelize.DataTypes.INTEGER,
          defaultValue: 1,
        },
        created_at: Sequelize.DataTypes.DATEONLY,
        updated_at: Sequelize.DataTypes.DATEONLY,
        deleted_at: Sequelize.DataTypes.DATEONLY,
      },
      { timestamps: true, schema: process.env.DB_SCHEMA }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({ tableName: "products", schema: process.env.DB_SCHEMA });
  },
};
