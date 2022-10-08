const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    dialect: "postgres",
    autoLoadModels: false,
    database: String(process.env.DB_NAME),
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
  },
  test: {
    dialect: "postgres",
    autoLoadModels: false,
    database: String(process.env.DB_NAME),
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
  },
  production: {
    dialect: "postgres",
    autoLoadModels: false,
    database: String(process.env.DB_NAME),
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASS),
  },
};
