import type { Request, Response } from "express";
import type { ControllerMethods } from "../interfaces/interfaces";
import Services from "../services/services";

const book = new Services()

class Controllers implements ControllerMethods {

  create(req: Request, res: Response): Response {
    const createBook = book.create(req.body)

    return res.status(201).json(createBook)
  }

  getMany(req: Request, res: Response): Response {
    const search = req.query.search as string
    const getBooks = book.getMany(search)

    return res.status(200).json(getBooks)
  }

  getById(req: Request, res: Response): Response {
    const getBookById = book.getById(req.params.id)

    return res.status(200).json(getBookById)
  }

  update(req: Request, res: Response): Response {
    const updateBook = book.update(req.params.id, req.body)

    return res.status(200).json(updateBook)
  }

  delete(req: Request, res: Response): Response {
    book.delete(req.params.id)

    return res.status(204).json()
  }
}

export default Controllers