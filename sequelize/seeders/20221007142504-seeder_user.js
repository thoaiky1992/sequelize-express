"use strict";
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert({ tableName: "users", schema: process.env.DB_SCHEMA }, [
      {
        user_name: "User 111111",
        email: "User1111@gmail.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_name: "User 222222",
        email: "User222222@gmail.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_name: "User 333333",
        email: "User333333@gmail.com",
        password: "123456",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete({ tableName: "users", schema: process.env.DB_SCHEMA }, null, {});
  },
};
