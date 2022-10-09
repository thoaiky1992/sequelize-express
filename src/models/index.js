import { DataTypes, Model, Sequelize } from "sequelize";
import chalk from "chalk";
import { UserModel } from "./user.model";
import { PostModel } from "./post.model";
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASS, DB_USER } from "../contants";
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
let db = {};

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  logging: (data) => {
    const sql = String(data).replace("Executing (default): ", "");
    console.log(`\n${chalk.hex("#e1a20f").bold("Executing (default) -->") + " " + chalk.green(sql)}\n`);
  },
});

const User = UserModel(sequelize, DataTypes);
const Post = PostModel(sequelize, DataTypes);

// relationships
User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });

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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, User, Post };