import type { NextFunction, Request, Response } from "express";
import appError from "../errors/errors";
import { booksDatabase } from "../database/database";
import type { ValidateRequests } from "../interfaces/interfaces";
import { ZodError } from "zod";

class middlewares {

  static handleError(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof appError) {
      res.status(err.statusCode).json({
        error: err.message
      })
    } else if (err instanceof ZodError) {
      return res.status(409).json(err)
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

  static validateRequest(schemas: ValidateRequests) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body)
      }

      if (schemas.params) {
        req.params = await schemas.params.parseAsync(req.params)
      }

      if (schemas.query) {
        req.query = await schemas.query.parseAsync(req.query)
      }
      next()
    }
  }
}

export default middlewares