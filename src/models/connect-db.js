import { Model, Sequelize } from "sequelize";
import chalk from "chalk";
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASS, DB_USER } from "../contants";
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
let db = {};

export const ConnectDB = () => {
  if (db.sequelize) return db;

  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: (data) => {
      const sql = String(data).replace("Executing (default): ", "");
      console.log(`\n${chalk.hex("#e1a20f").bold("Executing (default) -->") + " " + chalk.green(sql)}\n`);
    },
  });

  // fs.readdirSync(__dirname)
  //   .filter((file) => {
  //     return file.length > 10 && file.indexOf(".") !== 0 && file !== basename && file.endsWith(".model.js");
  //   })
  //   .forEach((file) => {
  //     const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
  //     db[model.name] = model;
  //   });

  // Object.keys(db).forEach((modelName) => {
  //   if (db[modelName].associate) {
  //     db[modelName].associate(db);
  //   }
  // });

  // const User = db.User;
  // const Post = db.Post;

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  return db;
};
