import express from "express";
import helmet from "helmet";
import cors from "cors";
import chalk from "chalk";
import { config } from "dotenv";
import { customMorgan } from "./config/morgan.js";
import { db } from "./models/index.js";
import { initialRouter } from "./routes/index.js";
import ErrorMiddleware from "./middleware/error.middleware.js";
import compression from "compression";
import multer from "multer";
config();

db.sequelize
  .authenticate()
  .then(() => {
    console.log(chalk.hex("#ed095a").bold("Connection has been established successfully."));
    const app = express();
    app.use(compression());
    app.use(customMorgan());
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(multer().array("files"));
    app.use(express.static("public"));

    initialRouter(app);
    app.use(ErrorMiddleware);

    app.listen(process.env.APP_PORT, () => console.log("server starting on port::::", process.env.APP_PORT));
  })
  .catch((error) => console.error(chalk.red("Unable to connect to the database:", error)));
