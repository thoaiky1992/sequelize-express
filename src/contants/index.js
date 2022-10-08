import { config } from "dotenv";
config();

export const DB_HOST = String(process.env.DB_HOST);
export const DB_USER = String(process.env.DB_USER);
export const DB_PASS = String(process.env.DB_PASS);
export const DB_NAME = String(process.env.DB_NAME);
export const DB_DIALECT = String(process.env.DB_DIALECT);
export const DB_SCHEMA = String(process.env.DB_SCHEMA);

export const LIMIT = 10;
export const HASH_SALT = 10;
