"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ tableName: "posts", schema: process.env.DB_SCHEMA }, [
      {
        title: "Post 111111",
        body: "Body 11111111",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Post 22222222",
        body: "Body 22222222",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Post 33333333",
        body: "Body 33333333",
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete({ tableName: "posts", schema: process.env.DB_SCHEMA }, null, {});
  },
};
