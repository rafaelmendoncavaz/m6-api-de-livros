import type { NextFunction, Request, Response } from "express";
import appError from "../errors/errors";
import { booksDatabase } from "../database/database";

class middlewares {

  static handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof appError) {
      res.status(err.statusCode).json({
        error: err.message
      })
    } else {
      res.status(500).json({
        error: "Internal Server Error"
      })
    }
  }

  static handleIdRequest(req: Request, res: Response, next: NextFunction) {
    if (!booksDatabase.some(book => book.id === Number(req.params.id))) {
      throw new appError(404, "Book not found.")
    }
    next()
  }

  static handleNameRequest(req: Request, res: Response, next: NextFunction) {
    if (req.body.name) {
      if (booksDatabase.some(book => book.name.toLowerCase() === req.body.name.toLowerCase())) {
        throw new appError(409, "Book already registered.")
      }
    }
    next()
  }
}

export default middlewares