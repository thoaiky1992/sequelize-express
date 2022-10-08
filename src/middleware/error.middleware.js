import { NextFunction, Request, Response } from "express";
import chalk from "chalk";
export class HttpException extends Error {
  status;
  message;

  constructor(status, message) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ErrorMiddleware(error, req, res, next) {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  console.log(chalk.yellow(`Error: ${status} - ${message}`));
  res.status(status).json({
    status,
    message,
  });
}

export default ErrorMiddleware;
