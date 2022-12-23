"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "order_details",
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        order_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "orders",
          },
          onDelete: "cascade",
        },
        product_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: "products",
          },
          onDelete: "cascade",
        },
        quantity: {
          type: Sequelize.DataTypes.BIGINT,
          defaultValue: 0,
        },
        total: {
          type: Sequelize.DataTypes.BIGINT,
          defaultValue: 0,
        },
        created_at: Sequelize.DataTypes.DATEONLY,
        updated_at: Sequelize.DataTypes.DATEONLY,
        deleted_at: Sequelize.DataTypes.DATEONLY,
      },
      { timestamps: true, schema: process.env.DB_SCHEMA }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({ tableName: "order_details", schema: process.env.DB_SCHEMA });
  },
};
