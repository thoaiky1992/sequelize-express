"use strict";
const dotenv = require("dotenv");
dotenv.config();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      {
        tableName: "users",
        schema: process.env.DB_SCHEMA,
      },
      "points",
      {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      {
        tableName: "users",
        schema: process.env.DB_SCHEMA,
      },
      "points"
    );
  },
};
