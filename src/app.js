import express from "express";
import helmet from "helmet";
import cors from "cors";
import { config } from "dotenv";
import { ConnectDB } from "./models/connect-db.js";
import { customMorgan } from "./config/morgan.js";
import chalk from "chalk";
import { initialRouter } from "./routes/index.js";
import ErrorMiddleware from "./middleware/error.middleware.js";
import { RelationModel } from "./models/relation.js";
config();

const db = ConnectDB();
RelationModel();

db.sequelize
  .authenticate()
  .then(() => {
    console.log(chalk.hex("#ed095a").bold("Connection has been established successfully."));
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(customMorgan());
    app.use(helmet());
    app.use(cors());

    initialRouter(app);
    app.use(ErrorMiddleware);

    app.listen(process.env.APP_PORT, () => console.log("server starting on port::::", process.env.APP_PORT));
  })
  .catch(() => console.error(chalk.red("Unable to connect to the database:", error)));
