import { config } from "dotenv";
config();
export const APP_PORT = Number(process.env.APP_PORT);
export const DB_HOST = String(process.env.DB_HOST);
export const DB_USER = String(process.env.DB_USER);
export const DB_PASS = String(process.env.DB_PASS);
export const DB_NAME = String(process.env.DB_NAME);
export const DB_DIALECT = String(process.env.DB_DIALECT);
export const DB_SCHEMA = String(process.env.DB_SCHEMA);

export const APP_DOMAIN = String(process.env.APP_DOMAIN);
export const DEFAULT_AVATAR = String(process.env.DEFAULT_AVATAR);
export const LIMIT = 10;
export const HASH_SALT = 10;
